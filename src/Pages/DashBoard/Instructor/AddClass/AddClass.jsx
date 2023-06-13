
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";


const img_hosting_token = import.meta.env.VITE_image_hosting_token
// console.log(img_hosting_token);

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    // console.log(img_hosting_url);



    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.course_Image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    console.log(imgURL);

                    // const { course_name, email, course_Image, price, instructor_Name, total_seats, available_seats } = data;

                    const newClass = data;
                    newClass.course_Image = imgURL;

                    // const newData = { course_name, email, instructor_Name, course_Image: imgURL, total_seats: parseInt(total_seats), available_seats: parseInt(available_seats), price: parseInt(price) }

                    console.log(newClass);
                }


                console.log(imgResponse);
            })


        fetch("http://localhost:5000/addAClass", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Login Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                reset();
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
                            <input {...register("course_Image")} type="file" className="file-input file-input-bordered w-full max-w-xs" />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">instructor_Name</span>
                            </label>
                            <input type="text" {...register("instructor_Name")} placeholder="Instructor Name" className="input input-bordered" defaultValue={user?.displayName} required readOnly />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">instructor_Email</span>
                            </label>
                            <input type="email" {...register("email")} defaultValue={user?.email}
                                placeholder="Instructor Email" className="input input-bordered" required readOnly />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Total Seat</span>
                            </label>

                            <input type="text" {...register("total_seats")} placeholder=" Total Seat" className="input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">available_seats</span>
                            </label>
                            <input type="text" {...register("available_seats")} placeholder=" Availabe Seat" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" {...register("price")} placeholder="Price" className="input input-bordered" required />
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



// const handleAddAClass = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const course_name = form.course_name.value;

    //     const course_Image = form.course_Image.value;
    //     // console.log(course_Image);
    //     // const formData = new FormData();
    //     // formData.append('image', image)

    //     // fetch(img_hosting_url, {
    //     //     method: 'POST',
    //     //     body: formData
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(imgResponse => {
    //     //         console.log(imgResponse);
    //     //     })


    //     // const instructor_Name = form.instructor_Name.value;
    //     // const email = form.email.value;
    //     // const total_seats = form.total_seats.value;
    //     // const available_seats = form.available_seats.value;
    //     // const price = form.price.value;


    //     // const addClass = { course_name, email, course_Image, price, instructor_Name, total_seats, available_seats, };

    //     // console.log(addClass);

    //     // fetch("http://localhost:5000/addAClass", {
    //     //     method: "POST",
    //     //     headers: {
    //     //         'content-type': 'application/json'
    //     //     },
    //     //     body: JSON.stringify(addClass)
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         // console.log(data);

    //     //         if (data.insertedId) {
    //     //             Swal.fire({
    //     //                 position: 'top',
    //     //                 icon: 'success',
    //     //                 title: 'Login Successfully!',
    //     //                 showConfirmButton: false,
    //     //                 timer: 1500
    //     //             })
    //     //         }
    //     //         form.reset();
    //     //     })
    //     // console.log(addClass);
    // };