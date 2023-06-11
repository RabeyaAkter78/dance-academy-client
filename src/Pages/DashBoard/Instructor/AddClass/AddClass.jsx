
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddClass = () => {
    const { user } = useContext(AuthContext);
   
    const handleAddToys = (event) => {
        event.preventDefault();
        const form = event.target;
        const course_name = form.course_name.value;
        const course_Image = form.course_Image.value;
        const instructor_Name = form.instructor_Name.value;
        const email = form.email.value;
        const available_seats = form.available_seats.value;
        const price = form.price.value;


        const addClass = { course_name, email, course_Image,price,instructor_Name,  available_seats, };
        console.log(addClass);
        fetch("http://localhost:5000/addAClass", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Login Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                form.reset();
            })
        console.log(addClass);
    };
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
            <form onSubmit={handleAddToys} className=' mb-12'>
                <div className=" w-full bg-pink-50">
                    <h2 className='text-center text-red-400 font-bold text-4xl'>Add A Class</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 w-full  shadow-2xl bg-base-100">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">course_name</span>
                            </label>
                            <input type="text" name='course_name' placeholder="Class Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">course_Image</span>
                            </label>
                            <input type="text" name='course_Image' placeholder="Class Image" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">instructor_Name</span>
                            </label>
                            <input type="text" name="instructor_Name" placeholder="Instructor Name" className="input input-bordered" defaultValue={user?.displayName} required readOnly />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">instructor_Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email}
                                placeholder="Instructor Email" className="input input-bordered" required readOnly />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">available_seats</span>
                            </label>

                            <input type="text" name='available_seats' placeholder=" Availabe Seat" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
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