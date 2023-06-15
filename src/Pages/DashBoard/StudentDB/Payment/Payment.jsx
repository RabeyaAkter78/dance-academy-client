import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { useLocation } from "react-router-dom";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {

    const location = useLocation();
    const data = location.state;
    const classPrice = data.course_price;
    const course_image = data.course_image;
    const id = data._id
    const course_name = data.course_name;
    const instructor_name = data.instructor_name;
    const instructor_email = data.instructor_email;
    const seat_number = data.seat_number;
    // console.log(classPrice, id, image);

    const price = parseFloat(classPrice.toFixed(2))


    return (
        <div className=" w-full bg-pink-50">
            <SectionTitle
                heading={"Payment"}
                subHeading={""}
            ></SectionTitle>


            <Elements stripe={stripePromise}>

                <CheckoutForm
                    price={price}
                    id={id}
                    course_image={course_image}

                    course_name={course_name}
                    instructor_name={instructor_name}
                    instructor_email={instructor_email}
                    seat_number={seat_number}
                ></CheckoutForm>

            </Elements>
        </div>
    );
};

export default Payment;