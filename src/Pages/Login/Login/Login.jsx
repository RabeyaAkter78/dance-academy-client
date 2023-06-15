import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import app from "../../../firebase.config";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";


// const auth = getAuth(app)
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState();
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';
    // console.log(from);

    const onSubmit = data => {
        console.log(data);


        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                
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
                setError(error.message);
                reset();
            })
    };

    const handleShow = () => {
        setShowPassword(!showPassword)
    }


    return (

        <div>
            <Helmet>
                <title>Dance | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: "url(https://i.ibb.co/ZcFBjYt/photo-1640017955477-75b58521007d-ixlib-rb-4-0.jpg)" }}>

                <div className="hero-content flex-col lg:flex-row">

                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="text" {...register("email")} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control ">


                                <label className="label">
                                    <span className="label-text ">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}  {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span>PAssword should be six characters</span>}

                                <button onClick={handleShow} className="label">
                                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </button>

                            </div>
                            <p className="text-red-500">{error}</p>

                            <div className="form-control mt-6">
                                <button className="btn btn-outline border-0 border-y-2 btn-error  mt-3">Login</button>
                            </div>
                            <div className="">
                                <h3>New Here?Please <Link to="/signup"><span className="font-bold">SignUp</span></Link> </h3>

                            </div>
                            <SocialLogin></SocialLogin>
                            {/* <Link to="/" className="btn btn-outline btn-sm border-0 border-y-2 btn-error mt-3">Go To Home</Link> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;

