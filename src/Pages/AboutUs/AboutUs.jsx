import { FaAward, FaRegSmile, FaUserAlt, FaUserShield, FaUsersCog, FaUsersSlash } from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import './AboutUs.css';


const AboutUs = () => {
    return (

        <div className="my-20">
            <SectionTitle
                heading={"About us"}
                subHeading={""}
            >
            </SectionTitle>
            <div className="about-us bg-slate-800 bg-fixed pt-12 my-20">
                <div className="md:flex justify-center items-center pb-20 px-36 pt-12 bg-slate-500 bg-opacity-60 text-white">

                    <div className="md:flex justify-center items-center pb-20 px-36 pt-12 inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 bg-slate-900 bg-opacity-60 text-white">
                        {/* <div>
                            <img src="https://ibb.co/yf8fPRF" alt="" />
                        </div> */}
                        <div className="md:ml-12">
                            <h4 className="text-2xl uppercase">Welcome to Dance Academy!</h4>
                            <p>In Dance Academy,where dance comes alive! We are a premier dance academy dedicated to inspiring individuals of all ages and skill levels. With highly trained instructors, state-of-the-art facilities, and a diverse range of dance styles, we provide a transformative experience. From ballet to hip-hop, our classes cater to beginners and aspiring professionals alike. Join our inclusive and supportive environment, where students can showcase their talents through performances, workshops, and competitions. At Dance Academy , we are more than a dance school; we are a passionate community celebrating the joy and expression of dance.</p>
                        </div>
                    </div>
                </div>
                {/* stats */}
                <div className="stats shadow flex justify-center items-center my-16 shadow shadow-lg shadow-black bg-pink-50">

                    <div className="stat">

                        <div className="stat-title "><FaRegSmile className="h-[40px] w-[40px] text-yellow-400 text-center"></FaRegSmile></div>
                        <div className="stat-value">3000</div>
                        <div className="stat-desc">Happy clients</div>
                    </div>

                    <div className="stat">

                        <div className="stat-title"><FaUserAlt className="h-[40px] w-[40px] text-yellow-400 text-center"></FaUserAlt></div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">New Clients</div>
                    </div>

                    <div className="stat">

                        <div className="stat-title"><FaUserShield className="h-[40px] w-[40px] text-yellow-400 text-center"></FaUserShield></div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ New registers</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title"><FaAward className="h-[40px] w-[40px] text-yellow-400 text-center"></FaAward></div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">Awards</div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AboutUs;