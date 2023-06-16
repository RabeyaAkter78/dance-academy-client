import { FaVoicemail } from "react-icons/fa";
import SectionTitle from "./Shared/SectionTitle/SectionTitle";

const Contackus = () => {
    return (
        <div className="my-12">

            <SectionTitle
                heading={"Contact us"}
                subHeading={"“When you dance, your purpose is not to get a certain place on the floor. It’s to enjoy every step along the way!”"}
            ></SectionTitle>

            {/* TODO:Make it dynamic */}
            <div className="flex min-h-screen items-center justify-center bg-pink-50 my-14 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-8">
                        <div className="h-96 w-96">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:-rotate-5 group-hover:scale-150" src="https://media.istockphoto.com/id/638128384/photo/3d-man-and-vintage-red-phone-on-white-background.jpg?s=612x612&w=0&k=20&c=i8sy24C50YF7vW3NlcghyCQ8MAMU0o74roKmoRbVN8Q=" alt="" />
                        </div>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact Number</span>
                                </label>
                                <input type="text" placeholder="XXXXXXXXXXX" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Contackus;