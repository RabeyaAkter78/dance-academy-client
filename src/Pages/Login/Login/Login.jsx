import { Link } from "react-router-dom";

const Login = () => {
    return (
      
         <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: "url(https://i.ibb.co/6rhTRBM/7b711ed65d3300f657827e091383d36d.png)" }}> 
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <h3>New Here?Please <Link to="/signup"><span className="font-bold">SignUp</span></Link> </h3>

                            <Link to="/" className="btn btn-secondary btn-sm form-control mt-6">Go To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;