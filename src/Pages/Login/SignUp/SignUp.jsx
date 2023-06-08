
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase.config";



const auth = getAuth(app);

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })

    };
    // login with google:
    const provider = new GoogleAuthProvider();

    const handleLogInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then(() => {

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
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: "url(https://wallpaperaccess.com/full/2523652.jpg)" }}>
                <div className="hero-content flex-col lg:flex-row">

                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo Url</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                                {errors.photoUrl && <span className="text-red-600">Photo URl is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Contact number</span>
                                </label>
                                <input type="text" {...register("contactNumber")} placeholder="Contact number" className="input input-bordered text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Address</span>
                                </label>
                                <input type="text" {...register("address")} placeholder="Address" className="input input-bordered text-black" />
                            </div>
                            <div className="form-control text-black">
                                <label className="label">
                                    <span className="label-text text-white">Gender</span>
                                </label>

                                <select className="input input-bordered " placeholder="Gender" {...register("gender")}>
                                    <option className="text-black" value="female">female</option>
                                    <option className="text-black" value="male">male</option>
                                    <option className="text-black" value="other">other</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
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
                                    <span className="label-text text-white">Confirm Password</span>
                                </label>
                                <input type="password"  {...register("confirmPassword", { required: true })} placeholder="Confirm password" className="input input-bordered text-black" />
                                {errors.photoUrl && <span className="text-red-600">password is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                            <div className="text-white">
                                <h3>Already Have An Account? Please <Link to="/login"><span className="font-bold">Login</span></Link> </h3>
                            </div>
                            <button onClick={handleLogInWithGoogle} className=' btn btn-success mb-5'>login with google</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SignUp;