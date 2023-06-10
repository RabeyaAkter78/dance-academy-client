
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase.config";
import Swal from "sweetalert2";



const auth = getAuth(app);

const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { createUser,updateUserData ,logOut} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);


                updateUserData(data.name,data.photoUrl)
                .then(()=>{
                    console.log('user profile data updated');
                    reset();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'User Created Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    logOut();
                    navigate('/login');
                })
              
                .catch(error=>{
                    console.log(error);
                })
            })

    };
    // login with google:
    const provider = new GoogleAuthProvider();

    const handleLogInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then(() => {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Login Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <Helmet>
                <title>Dance | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen " style={{ backgroundImage: "url(https://i.ibb.co/ZcFBjYt/photo-1640017955477-75b58521007d-ixlib-rb-4-0.jpg)" }}>
           
                <div className="hero-content flex-col lg:flex-row">

                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Photo Url</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                                {errors.photoUrl && <span className="text-red-600">Photo URl is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Contact number</span>
                                </label>
                                <input type="text" {...register("contactNumber")} placeholder="Contact number" className="input input-bordered text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Address</span>
                                </label>
                                <input type="text" {...register("address")} placeholder="Address" className="input input-bordered text-black" />
                            </div>
                            <div className="form-control text-black">
                                <label className="label">
                                    <span className="label-text ">Gender</span>
                                </label>

                                <select className="input input-bordered " placeholder="Gender" {...register("gender")}>
                                    <option className="text-black" value="female">female</option>
                                    <option className="text-black" value="male">male</option>
                                    <option className="text-black" value="other">other</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/

                                })} placeholder="password" className="input input-bordered text-black" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Confirm Password</span>
                                </label>
                                <input type="password"  {...register("confirmPassword", { required: true })} placeholder="Confirm password" className="input input-bordered text-black" />
                                {errors.photoUrl && <span className="text-red-600">password is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                            <div className="">
                                <h3>Already Have An Account? Please <Link to="/login"><span className="font-bold">Login</span></Link> </h3>
                            </div>
                            <button onClick={handleLogInWithGoogle} className='btn btn-outline border-0 border-y-2 btn-error mt-3'>login with google</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SignUp;