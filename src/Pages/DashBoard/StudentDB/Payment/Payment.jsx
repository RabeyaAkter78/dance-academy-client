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
    const image = data.course_image;
    const id = data._id
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
                    image={image}
                ></CheckoutForm>

            </Elements>
        </div>
    );
};

export default Payment;