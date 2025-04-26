import { useQuery } from "@tanstack/react-query";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const { data: datas = [], refetch } = useQuery({
        queryKey: ["manageCourses"],
        queryFn: async () => {
            const res = await fetch("https://dance-academy-server-teal.vercel.app/manageCourses");
            return res.json();
        }
    })

    console.log(datas);

    const handleAccept = (id) => {
        fetch(`https://dance-academy-server-teal.vercel.app/aproveCourses/${id}`, {
            method: "PATCH"
        })
            .then(() => {
                refetch();
                Swal.fire({
                    position: '',
                    icon: 'success',
                    title: 'Course is approved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    const handleDenied = (id) => {
        fetch(`https://dance-academy-server-teal.vercel.app/deniedCourses/${id}`, {
            method: "PATCH"
        })
            .then(() => {
                refetch();
                Swal.fire({
                    position: '',
                    icon: 'success',
                    title: 'Course is Denied',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }


    return (
        <div className="w-full h-full">
            <Helmet>
                <title>Dance |DashBoard | ManageClasses</title>
            </Helmet>
            <h3 className="text-3xl font-semibold">All courses:{datas.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Instructor Email</th>
                            <th>Available seat</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas?.map((course, index) => <tr key={course._id} className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.course_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{course.course_name}</td>
                                <td>{course.instructor_name}</td>
                                <td>{course.instructor_email}</td>
                                <td>{course.available_seats}</td>
                                <td>${course.course_price}</td>
                                <th>

                                    <button className="btn btn-neutral border-0 border-b-2 btn-outline btn-xs mb-4">{course.status}</button>

                                    {
                                        course.status === 'approved' ?
                                            <button className="btn btn-success border-0 border-b-2 btn-outline bg-gray-800 btn-xs mb-4" disabled>Accepted</button>
                                            :
                                            <button onClick={() => handleAccept(course._id)} className="btn btn-success border-0 border-b-2 btn-outline btn-xs mb-4">Approve</button>
                                    }

                                    {
                                        course.status === 'denied' ?
                                            <button className="btn btn-error border-0 border-b-2 bg-neutral-800 btn-outline btn-xs" disabled>Denied</button>
                                            :
                                            <button onClick={() => handleDenied(course._id)} className="btn btn-error border-0 border-b-2 btn-outline btn-xs">Denie</button>
                                    }


                                </th>
                                <th>
                                    <Link to='/dashBoard/feedBack' state={course}>
                                        <button className="btn btn-info border-0 border-b-2 btn-outline btn-xs">FeedBack</button>
                                    </Link>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageClasses;