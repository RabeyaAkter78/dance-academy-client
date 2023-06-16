import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FaPen } from "react-icons/fa";


const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [classes, setClasses] = useState([]);
    console.log(classes);
    useEffect(() => {
        fetch(`http://localhost:5000/myClass?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                console.log(data);
            })
    }, [user?.email])

    // console.log(classes.feedBack);

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
                            <th>##</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Prcice</th>
                            <th>Enrolled Student</th>
                            <th>Update</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody >
                        {classes?.map((course, index) => <tr key={course._id}>
                            <th>{index + 1}</th>
                            <td >
                                <img className="w-12 h-12 mask mask-squircle" style={{ borderRadius: '0 200px 200px 0' }} src={course.course_image} alt="" />
                            </td>
                            <td>{course.course_name}</td>
                            <td> $ {course.course_price}</td>
                            <td>{course.student_number}</td>
                            <td>
                                <button className="btn btn-circle btn-outline btn-success border-0 border-b-4"><FaPen></FaPen></button>
                            </td>
                            <td className="flex flex-col justify-center items-center">{course.status}</td>
                            <td >

                            </td>

                        </tr>

                        )}


                    </tbody>
                </table>
            </div>
            <div className="my-8">
                <SectionTitle
                    heading={"FeedBack Section"}
                    subHeading={""}
                ></SectionTitle>

                <div className="flex flex-col items-center justify-center">
                    {
                        classes.map(course =>
                            course.feedBack && <div key={course._id}>

                                <img className="rounded-lg text-center" src={course.course_image} alt="" />
                                <p className="text-center font-medium mt-8" >FeedBack for this class: <span className="text-3xl"> {course.course_name}</span></p>
                                <p className="text-center font-medium mt-4" >Id Number: {course._id}</p>
                                <p className="text-center font-medium mt-8 text-2xl">Feedback:{course.feedBack}</p>
                            </div>
                        )
                    }
                </div>

            </div>





        </div>
    );
};

export default MyClass;