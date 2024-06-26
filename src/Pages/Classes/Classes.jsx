import { useContext, useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import useSelectCourseData from "../../Hooks/useSelectCourseData";
import UseInstructor from "../../Hooks/useInstructor";
import useAdmin from "../../Hooks/useAdmin";


const Classes = () => {
    const [selecteddatas, refetch] = useSelectCourseData();
    // console.log(selecteddatas);

    const [courses, setCourses] = useState([]);
    const { user } = useContext(AuthContext);
    const [isInstructor] = UseInstructor();
    const [isAdmin] = useAdmin();
    // console.log(isAdmin, isInstructor);



    // get All class Api: 
    useEffect(() => {
        fetch('https://dance-academy-server-teal.vercel.app/course')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCourses(data);
            })
    }, []);



    // selected class api:
    const handleSelect = (course) => {
        const { _id, ...rest } = course;
        const selectedCourse = { selectedId: _id, ...rest, email: user?.email };


        fetch("https://dance-academy-server-teal.vercel.app/selectedClass", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectedCourse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Successfully Selected!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

                console.log(data);
            })
    };




    return (
        <div>
            <SectionTitle
                heading={"All Class Are here"}
                subHeading={"“When you dance, your purpose is not to get a certain place on the floor. It’s to enjoy every step along the way!”"}
            ></SectionTitle>


            <div className="flex min-h-screen items-center justify-center bg-pink-50 ">
                <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-12">
                    {
                        courses.map(course => <div key={course._id} className={`${course.seat_number - course.student_number < 1 ? "bg-red-500" : "bg-base-100"}`}
                        >
                            <div className={`card w-96  shadow-xl`}>
                                <figure className="px-10 pt-10">
                                    <img src={course.course_image} alt="Shoes" className="rounded-xl h-80   drop-shadow-lg shadow-2xl shadow-black" />
                                </figure>

                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Curse: {course.course_name}</h2>
                                    <h2 className="card-title">Instructor: {course.instructor_name}</h2>
                                    <p> Total seat: {course.seat_number}</p>
                                    <p> Student Number: {course.student_number}</p>
                                    <p> Available Seat: {course.seat_number - course.student_number}</p>

                                    <p> Price: ${course.course_price}</p>




                                    {isAdmin || isInstructor || course.seat_number - course.student_number < 1 ?

                                        <div className="card-actions">
                                            <button className="btn btn-sm  btn-outline border-0 border-y-2 mt-2 bg-neutral-900 " disabled>Select</button>
                                        </div>
                                        :
                                        <div className="card-actions">
                                            <button onClick={() => handleSelect(course)} className="btn btn-sm btn-error btn-outline border-0 border-y-2 mt-2">Select</button>
                                        </div>

                                    }



                                </div>
                            </div>

                        </div>)
                    }



                </div>
            </div>

        </div >
    );
};

export default Classes;