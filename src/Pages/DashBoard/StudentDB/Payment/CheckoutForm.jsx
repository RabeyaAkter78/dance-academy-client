import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useSelectCourseData from "../../../../Hooks/useSelectCourseData";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, id, course_image, course_name, instructor_name,
    instructor_email, seat_number }) => {
    const { user } = useContext(AuthContext);
    const [selecteddatas] = useSelectCourseData();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [axiosSecure] = UseAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');


    useEffect(() => {
        axiosSecure.post('/createPayment',
            { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })

    }, [price, axiosSecure])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log('error', error);
            setError(error.message);
        }
        else {
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'Unknown',
                    email: user?.email || 'anonymous',
                },
            },
        },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransectionId(paymentIntent.id)

            // save payment indormation to the server:

            const payment = {
                transectionId: paymentIntent.id,
                date: new Date(),

                name: user?.displayName,
                email: user?.email,
                course_image,
                course_name,
                price,
                id, 
                instructor_name,
                instructor_email,
                seat_number


            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    // console.log(res.data);

                    if (res.data.insertedId) {
                        // TODO:reset korte hobe:
                        Swal.fire({
                            position: '',
                            icon: 'success',
                            title: 'Payment Successful!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                });

        }


    }


    return (
        <>
            <form className="w-2/3 m-8 bg-neutral-300 p-8 mx-auto rounded-lg text-black" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="flex btn btn-outline btn-error border-0 border-y-2 btn-md mt-12 mx-auto" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {error && <p className="text-red-500 text-center">{error}</p>}

            {transectionId && <p className="text-green-500 text-center">Transection Complete! Your Transection Id:{transectionId}</p>}
        </>
    );
};

export default CheckoutForm;