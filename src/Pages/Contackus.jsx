import { FaLocationArrow, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import SectionTitle from "./Shared/SectionTitle/SectionTitle";

const Contackus = () => {
    return (
        <div className="my-12">

            <SectionTitle
                heading={"Contact us"}
                subHeading={"Feel free to reach out to us with any questions, inquiries, or to schedule a visit. We would love to hear from you!"}
            ></SectionTitle>

            {/* TODO:Make it dynamic */}
            <div className="flex gap-14 min-h-screen items-center justify-center bg-pink-50 my-14 ">
                {/* <div className="flex min-h-screen items-center justify-center bg-pink-50 my-14 "> */}
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h4 className="font-medium text-2xl">We are just a click away! feel free to write us.</h4>
                            <div className="form-control">
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Phone Number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <textarea className="border border-2 p-2" placeholder="Write Message" name="Write Message" id="" cols="10" rows="5"></textarea>

                            <div className="form-control mt-6">
                                <button className="btn btn-outline border-0 border-y-2 btn-error  mt-3">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* indicator */}
                    <div className="flex flex-col gap-8 mr-8">
                        <div className="indicator mb-8 ">
                            <div className="indicator-item indicator-start">
                                <button className="btn btn-error"><FaPhoneAlt></FaPhoneAlt></button>
                            </div>
                            <div className="card border shadow shadow-lg shadow-black w-96">
                                <div className="card-body">
                                    <h2 className="card-title text-red-400">Tell Us</h2>
                                    <p>01234567890</p>

                                </div>
                            </div>
                        </div>
                        <div className="indicator mb-8">
                            <div className="indicator-item indicator-start">
                                <button className="btn btn-error"><FaMailBulk></FaMailBulk></button>
                            </div>
                            <div className="card border shadow shadow-lg shadow-black w-96">
                                <div className="card-body">
                                    <h2 className="card-title text-red-400">Drop Mail</h2>
                                    <p>danceacademy@example.com</p>

                                </div>
                            </div>
                        </div>
                        <div className="indicator mb-8">
                            <div className="indicator-item indicator-start">
                                <button className="btn btn-error"><FaLocationArrow></FaLocationArrow></button>
                            </div>
                            <div className="card border shadow shadow-lg shadow-black w-96">
                                <div className="card-body">
                                    <h2 className="card-title text-red-400">Loaction</h2>
                                    <p>Dhaka Bangladesh</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Contackus;