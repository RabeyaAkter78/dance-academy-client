import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash, } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../Hooks/useAxiosSecure";


const ManageUsers = () => {
    // TODO:MAke the button disabled
    // const [disabled, setDisabled] = useState(false);

    const [axiosSecure] = UseAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = (user) => {

        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
        // setDisabled(true).includes(user._id);

    };

    const handleMakeInstructor = (user) => {

        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `${user.name} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
        // setDisabled(true).includes(user._id);

    }


    const handleDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`,
                    {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }



    return (
        <div className="w-full h-full">
            <Helmet>
                <title>Dance |DashBoard | ManageUsers</title>
            </Helmet>
            <h3 className="text-3xl font-semibold">All Users:{users.length}</h3>

            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>



                        {users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="flex gap-4">


                                {user.role === 'admin' ?
                                    <button className="btn btn-outline border-0 border-y-2  bg-gray-800   mt-3" disabled> Admin</button>

                                    :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline border-0 border-y-2 btn-error  mt-3"> Admin</button>
                                }
                                {user.role === 'instructor' ?
                                    <button className="btn btn-outline border-0 border-y-2  bg-gray-800  mt-3" disabled> Instructor</button>
                                    :
                                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-outline border-0 border-y-2 btn-error  mt-3"> Instructor</button>
                                }


                            </td>
                            <td>
                                <button onClick={() => handleDelete(user)} className="btn btn-ghost font-bold btn-md text-white bg-red-600"><FaTrash></FaTrash></button>
                            </td>
                        </tr>

                        )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;