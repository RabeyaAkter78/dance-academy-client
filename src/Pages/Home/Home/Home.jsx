import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../../PopularClasses/PopularClasses";
import Instructors from "../../Instructors/Instructors";
import UpcomingEvents from "../../UpcomingEvents/UpcomingEvents";
import Contackus from "../../Contackus";
import AboutUs from "../../AboutUs/AboutUs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dance | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Instructors></Instructors>
            <UpcomingEvents></UpcomingEvents>
            <AboutUs></AboutUs>

            <Contackus></Contackus>
        </div>
    );
};

export default Home;