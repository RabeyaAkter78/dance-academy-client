import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";




export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // console.log(user);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserData = (name, photoUrl) => {
        // console.log(name, photoUrl)

        const updatedUser = { ...user }
        updatedUser.displayName = name;
        updatedUser.photoURL = photoUrl;

        setUser(updatedUser);
        const auth = getAuth();
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);


            // get and set jwt token:
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data.token);
                        localStorage.setItem('access-token', data.data.token
                        )
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token');
            }

            console.log('current user:', currentUser);
            setLoading(false);
        });
        
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserData,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;