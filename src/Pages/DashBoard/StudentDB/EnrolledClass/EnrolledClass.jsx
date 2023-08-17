import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const EnrolledClass = () => {
    const { user } = useContext(AuthContext);
    const [payments, setPayments] = useState([]);
    // console.log(payments);
    useEffect(() => {
        fetch(`https://dance-academy-server-teal.vercel.app/payments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPayments(data);
                console.log(data);

            })
    }, []);

   

    return (
        <div className="w-full h-full">
            <Helmet>
                <title>Dance| Payment</title>
            </Helmet>

            <SectionTitle
                heading={`Dear ${user?.displayName} `}
                subHeading={'Welcome To The New Course.The detailed scheduled of the class will be provide to you through Email.'}
            ></SectionTitle>


            <div className="overflow-y-auto w-full">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Instructor Email</th>
                            <th>Total Seat</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {payments.map((data, index) => <tr key={data._id}>
                            <th>{index + 1}</th>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={data.course_image} alt="Avatar Tailwind CSS Component" />
                                    
                                    </div>
                                </div>
                            </div>
                            <td>{data.course_name}</td>
                            <td>{data.instructor_name}</td>
                            <td>{data.instructor_email}</td>
                            <td>{data.seat_number}</td>
                            <td> $ {data.price}</td>
                   
                        </tr>

                        )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;