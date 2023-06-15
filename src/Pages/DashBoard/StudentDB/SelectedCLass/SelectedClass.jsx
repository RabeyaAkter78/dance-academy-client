
import { FaTrash, FaWallet } from "react-icons/fa";
import useSelectCourseData from "../../../../Hooks/useSelectCourseData";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
// import Swal from "sweetalert2";


const SelectedClass = () => {
    const [selecteddatas, refetch] = useSelectCourseData();
    console.log(selecteddatas);

    // const { id } = useParams();

    // const handlePay = () => {

    //     fetch(`http://localhost:5000/selectedClass/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }




    return (
        <div>
            <SectionTitle
                heading={"Your Selected Class"}
                subHeading={"“When you dance, your purpose is not to get a certain place on the floor. It’s to enjoy every step along the way!”"}
            ></SectionTitle>


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
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Pay</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            selecteddatas?.map((course, index) => <tr key={course._id} className="hover">
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
                                <td>${course.course_price}</td>
                                <th>
                                    <button className="btn btn-error border-0 border-b-2 btn-outline btn-md"><FaTrash></FaTrash></button>
                                </th>
                                <th>
                                    {/* state={course.course_price} */}
                                    <Link to="/dashboard/payment" state={course} >
                                        <button className="btn btn-accent border-0 border-b-2 btn-outline btn-md text-white "><FaWallet></FaWallet></button>
                                        {/* <button onClick={handlePay} className="btn btn-accent border-0 border-b-2 btn-outline btn-md text-white "><FaWallet></FaWallet></button> */}
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

export default SelectedClass;