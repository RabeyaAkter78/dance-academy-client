// import { useContext, useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
// import { AuthContext } from "../../Providers/AuthProvider";
import UseInstructor from "../../Hooks/useInstructor";
import { useEffect } from "react";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    // const { user } = useContext(AuthContext);

    const [isInstructor] = UseInstructor();
    console.log(isInstructor);


    useEffect(() => {
        fetch('https://dance-academy-server-teal.vercel.app/instructor')
            .then(res => res.json())
            .then(data => {

                setInstructors(data);
                console.log(data);
            })
    }, [])



    return (
        <div>
            <SectionTitle
                subHeading={" "}
                heading={"our Genious Instructors"}
            ></SectionTitle>


            <div className="flex min-h-screen items-center justify-center bg-pink-50 ">
                <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-12">
                    {
                        instructors.map(instructor => <div key={instructor._id}
                        >
                            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black rounded">
                                <div className="h-96 w-72">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:-rotate-0 group-hover:scale-125" src={instructor.image} alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 "></div>
                                <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 className="font-serif  text-3xl font-bold pb-28 text-white">{instructor.name}</h1>
                                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{instructor.classes}</p>
                                    {/* <button className="rounded-full bg-neutral-900 py-2 px-3  text-sm  text-white shadow shadow-black/60">See More</button> */}
                                </div>
                            </div>

                        </div>)
                    }



                </div>
            </div>
        </div>
    );
};

export default Instructors;