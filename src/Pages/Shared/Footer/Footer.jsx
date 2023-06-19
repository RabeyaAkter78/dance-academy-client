import { FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer px-10 py-4 border-t bg-base-content text-white  border-base-300 ">
                <div className="items-center grid-flow-col gap-10">
                    <img src="https://i.ibb.co/W68BLYR/dancelogo.png" alt="" />
                    <div className=" flex-col ">
                        <p>Dance Academy Ltd. <br />Providing reliable tech since 1992 </p>
                        <p>Dhaka,Bangladesh.</p>
                        <p className="flex items-center gap-2"><FaMailBulk></FaMailBulk><span>danceacademy@gmail.com</span></p>
                        <p className="flex items-center gap-2"><FaPhone></FaPhone><span>01234567890</span></p>

                    </div>

                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div>
                    <p className="font-bold">explore</p>
                    <hr />
                    </div>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="/" className="link link-hover">Home</Link>
                        <Link to="/instructors" className="link link-hover">Instructors</Link>
                        <Link to="/classes" className="link link-hover">Service</Link>
                        <Link to="/contact" className="link link-hover">Contact</Link>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4  bg-base-content text-white mb-12">
                <div>
                    <p>Copyright © 2023 - All right reserved by This Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;