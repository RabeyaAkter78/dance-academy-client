import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    const navOptions = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/instructors">INSTRUCTORS</Link></li>
        <li><Link to="/classes">CLASSES</Link></li>
        <li><Link to="/dashboard">DASHBOARD</Link></li>
    </>



    return (
        <>
            <div className="navbar font-serif fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    < >
                        <img src="https://i.ibb.co/W68BLYR/dancelogo.png" alt="" />

                    </>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end text-white mt-4">
                    <div className="tooltip" data-tip={user?.displayName}>
                        {user && <img className="rounded-full mr-4" style={{ height: '50px' }} src={user?.photoURL} />
                        }
                    </div>

                    {user ?
                        <button onClick={handleLogOut} className="btn">LogOut</button>
                        :
                        <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;