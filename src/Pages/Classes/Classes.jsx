import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";


const Classes = () => {
    const [courses, setCourses] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCourses(data);
            })
    }, [])

    const handleSelect = (courses) => {
        console.log(courses);
    }

    return (
        <div>
            <SectionTitle
                heading={"All Class Are here"}
                subHeading={"“When you dance, your purpose is not to get a certain place on the floor. It’s to enjoy every step along the way!”"}
            ></SectionTitle>


            <div className="flex min-h-screen items-center justify-center bg-pink-50 ">
                <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-12">
                    {
                        courses.map(course => <div key={course._id}
                        >
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={course.course_image} alt="Shoes" className="rounded-xl h-80 " />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Curse: {course.course_name}</h2>
                                    <h2 className="card-title">Instructor: {course.instructor_name}</h2>
                                    <p> Total seat: {course.seat_number}</p>
                                    <p> Student Number: {course.student_number}</p>
                                    <p> Price: ${course.course_price}</p>
                                    <div className="card-actions">
                                        <button onClick={() => handleSelect(courses)} className="btn btn-sm btn-error btn-outline border-0 border-y-2 mt-2">Select</button>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }



                </div>
            </div>

        </div>
    );
};

export default Classes;