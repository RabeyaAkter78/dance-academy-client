import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../../../Providers/AuthProvider";


const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [classes, setClasses] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/myClass?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setClasses(data);
                // console.log(data);
            })
    }, [user?.email])


    return (
        <div className="">
            <SectionTitle
                heading={`${user?.displayName}`}
                subHeading={`Instructor Email:${user?.email}`}
            ></SectionTitle>

            <div className="text-black/70 bg-purple-50 p-14 my-10">
                {
                    classes.map(event => <div key={event._id}
                    >
                        <div className=" grid md:grid-cols-2 bg-red-100 mb-10 group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black rounded">
                            <div className=" h-[500px] w-[500px]">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:-rotate-0 group-hover:-scale-x-50" src={event.classImage} alt="" />
                            </div>

                            <div className="text-slate-950 card-body p-28">
                                <h1 className="font-serif  text-3xl font-bold ">class Name:  {event.className}</h1>
                                <p className="mb-3 text-lg italic "> Price:$ {event.price}</p>
                                <p className="mb-3 text-lg italic "> Available Seat : {event.availabeSeat}</p>
                                <div className="card-actions justify-end flex gap-4 ">
                                    <button className="btn btn-outline border-0 border-y-2 btn-error  mt-3">Booking</button>
                                    <button className="btn btn-outline border-0 border-y-2 btn-error mt-3">Read More</button>
                                </div>
                            </div>
                           
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default MyClass;