import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../../../Providers/AuthProvider";


const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [classes, setClasses] = useState([])


    useEffect(() => {
        fetch(`https://dance-academy-server-rabeyaakter78.vercel.app/myClass?email=${user?.email}`)
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

            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Availabe Seat</th>
                            <th>Prcice</th>
                            <th>Status</th>
                            <th>See FeedBack</th>
                        </tr>
                    </thead>
                    <tbody >
                        {classes.map((course, index) => <tr key={course._id}>
                            <th>{index + 1}</th>
                            <td >
                                <img className="w-12 h-12 mask mask-squircle" style={{ borderRadius: '0 200px 200px 0' }} src={course.course_Image} alt="" />
                            </td>
                            <td>{course.course_name}</td>
                            <td>{course.available_seats}</td>
                            <td> $ {course.price}</td>
                            <td className="flex flex-col justify-center items-center">
                                <button className="btn btn-neutral border-0 border-b-2 btn-outline btn-xs mb-4">Pending</button>
                                <button className="btn btn-success border-0 border-b-2 btn-outline btn-xs mb-4">Accept</button>
                                <button className="btn btn-error border-0 border-b-2 btn-outline btn-xs">Denied</button>
                            </td>
                            <td >
                                <button className="btn btn-info border-0 border-b-2 btn-outline btn-xs">FeedBack</button>
                            </td>

                        </tr>

                        )}


                    </tbody>
                </table>
            </div>
            {/* <div className="text-black/70 bg-purple-50 p-14 my-10">
                {
                    course.map(event => <div key={event._id}
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

            </div> */}
        </div>
    );
};

export default MyClass;