
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../../Hooks/useAxiosSecure";


const img_hosting_token = import.meta.env.VITE_image_hosting_token
console.log(img_hosting_token);

const AddClass = () => {
    const [axiosSecure] = UseAxiosSecure();
    const [loading, setLoading] = useState();

    const { user } = useContext(AuthContext);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    console.log(img_hosting_url);



    const onSubmit = data => {
        console.log(data);

        const formData = new FormData();
        formData.append('image', data.course_image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    console.log(imgURL);

                    const { course_name,
                        instructor_email,
                        course_price,
                        instructor_name,
                        seat_number,
                        student_number,
                        course_details } = data;


                    const newData = {
                        course_name,
                        instructor_email,
                        instructor_name, course_image: imgURL,
                        seat_number: parseInt(
                            seat_number),
                        student_number: parseInt(
                            student_number),
                        course_price: parseInt(
                            course_price),
                        course_details, status: "pending"
                    }

                    axiosSecure.post("/addAClass", newData)
                        .then(data => {
                            setLoading(false)
                            if (data.data.insertedId) {
                                console.log(data.data);
                                reset()
                                Swal.fire({
                                    position: '',
                                    icon: 'success',
                                    title: 'Added your Course',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })

                    console.log(newData);
                }
                console.log(imgResponse);
            })
    }

    const handleToast = () => {
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Added Successfully!',
            showConfirmButton: false,
            timer: 1500
        })
    };

    return (
        <div>
            <Helmet>
                <title>Dance |Instructor |Add A Class </title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className=' mb-12'>
                <div className=" w-full bg-pink-50">
                    <h2 className='text-center text-red-400 font-bold text-4xl'>Add A Class</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 w-full  shadow-2xl bg-base-100">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">course_name</span>
                            </label>
                            <input type="text" {...register("course_name")} placeholder="Class Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input {...register("course_image")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            {/* <input {...register("course_Image")} type="file" className="file-input file-input-bordered w-full max-w-xs" /> */}

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    instructor_name</span>
                            </label>
                            <input type="text" {...register("instructor_name")} placeholder="Instructor Name" className="input input - bordered" defaultValue={user?.displayName} required readOnly />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">instructor_
                                    instructor_email</span>
                            </label>
                            <input type="email" {...register("instructor_email")} defaultValue={user?.email}
                                placeholder=" instructor_email" className="input input-bordered" required readOnly />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Total Seat</span>
                            </label>

                            <input type="text" {...register("seat_number")} placeholder=" Total Seat" className="input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Student Number</span>
                            </label>
                            <input type="text" {...register("student_number")} placeholder=" Student Number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" {...register("course_price")} placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">course details</span>
                            </label>
                            <textarea type="text" {...register("course_details")} placeholder="course details" className="input input - bordered" required />
                        </div>



                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleToast} className="btn btn-error border-0 border-y-2">Add</button>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddClass;


