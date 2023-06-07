
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: "url(https://wallpaperaccess.com/full/2523652.jpg)" }}>
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ">
                    <div className="card-body text-white">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <h3>Already Have An Account? Please <Link to="/login"><span className="font-bold">Login</span></Link> </h3>

                          
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;