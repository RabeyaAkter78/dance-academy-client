import { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
// import Classes from '../Shared/Classes/Classes';

const PopularclassNamees = () => {
    const [classes, setClasses] = useState([])


    useEffect(() => {
        fetch('https://dance-academy-server-rabeyaakter78.vercel.app/class')
            .then(res => res.json())
            .then(data => {

                setClasses(data);
                // console.log(data);


            })
    }, [])
    return (
        <div>
           
                <SectionTitle
                    heading={"Popular classes"}
                    subHeading={"“Dance is your pulse, your heartbeat, your breathing. It’s the rhythm of your life. It’s the expression in time and movement, in happiness, joy, sadness, and envy,” — Jacques d’Amboise, the American ballet dancer and choreographer, once said."}
                ></SectionTitle>




            <div className="flex min-h-screen items-center justify-center bg-pink-50 my-14">
                <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-12">
                    {
                        classes?.slice(0, 6).map(course => <div key={course._id}
                        >
                            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black rounded">
                                <div className="h-96 w-72">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:-rotate-5 group-hover:scale-150" src={course.course_image} alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 className="font-serif  text-3xl font-bold text-white">{course.course_name}</h1>
                                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Total Seat: {course.seat_number}</p>

                                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Enrolled Student: {course.student_number}</p>

                                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Available seat: {course.seat_number - course.student_number}</p>

                                    <button className="btn btn-outline border-0 border-y-4 rounded bg-red-900 py-2 px-3  text-sm  text-white shadow shadow-black/60">Select</button>
                                </div>
                            </div>

                        </div>)
                    }

                </div>
            </div>
        </div >
    );
};

export default PopularclassNamees;
