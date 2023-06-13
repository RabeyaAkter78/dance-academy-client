import { useQuery } from "@tanstack/react-query";

import { Helmet } from "react-helmet-async";


const ManageClasses = () => {

    const { data: datas = [], refetch } = useQuery({


        queryKey: ["manageCourses"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/manageCourses");
            return res.json();
        }
    })

    console.log(datas);


    // const [courses, setCourses] = useState([])
    // const { user } = useContext(AuthContext);

    // useEffect(() => {
    //     fetch('http://localhost:5000/course')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setCourses(data);
    //         })
    // }, [])


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
                            <th>Class NAme</th>
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
                                <td>{course.email}</td>
                                <td>{course.available_seats}</td>
                                <td>${course.price}</td>
                                <th>
                                    
                                    <button className="btn btn-neutral border-0 border-b-2 btn-outline btn-xs mb-4">{course.status}</button>
                                    <button className="btn btn-success border-0 border-b-2 btn-outline btn-xs mb-4">Accept</button>
                                    <button className="btn btn-error border-0 border-b-2 btn-outline btn-xs">Denied</button>
                                </th>
                                <th>
                                    <button className="btn btn-info border-0 border-b-2 btn-outline btn-xs">FeedBack</button>
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