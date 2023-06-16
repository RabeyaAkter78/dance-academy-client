import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { useEffect } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../../../Providers/AuthProvider";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [payments, setPayments] = useState([]);
    console.log(payments);
    useEffect(() => {
        fetch('https://dance-academy-server-rabeyaakter78.vercel.app/payments')
            .then(res => res.json())
            .then(data => {
                setPayments(data);
                console.log(data);
            })
    }, [])


    return (
        <div className="w-full h-full">
            <Helmet>
                <title>Dance| Payment</title>
            </Helmet>

            <SectionTitle
                heading={`${user?.displayName} `}
                subHeading={'Your Payment History'}
            ></SectionTitle>

            <div className="overflow-y-auto w-full">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>TransactionID</th>
                            <th>Date</th>
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
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td> $ {data.price}</td>
                            <td>{data.transectionId}</td>
                            <td>{data.date}</td>

                        </tr>

                        )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;