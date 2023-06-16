import { useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useEffect } from "react";

const UpcomingEvents = () => {
    const [events, setEvents] = useState([])


    useEffect(() => {
        fetch('https://dance-academy-server-rabeyaakter78.vercel.app/event')
            .then(res => res.json())
            .then(data => {

                setEvents(data);
                // console.log(data);


            })
    }, [])


    return (
        <div className="">
            <SectionTitle
                heading={"Upcoming Events"}
                subHeading={"Don't Miss The Chance.Registration Now For The Upcomming Events! lets Have more FUN"}
            ></SectionTitle>

            <div className="text-black/70 bg-purple-50 p-14 my-10">
                {
                    events.map(event => <div key={event._id}
                    >
                        <div className=" grid md:grid-cols-2 bg-red-100 mb-10 group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black rounded">
                            <div className=" h-[500px] w-[500px]">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:-rotate-0 group-hover:scale-x-125" src={event.image} alt="" />
                            </div>

                            <div className="text-slate-950 card-body p-28">
                                <h1 className="font-serif  text-3xl font-bold ">{event.event_name}</h1>
                                <p className="mb-3 text-lg italic  ">{event.details}</p>
                                <p className="mb-3 text-lg italic "> PRICE:{event.price}</p>
                                <div className="card-actions justify-end flex gap-4 ">
                                    <button className="btn btn-outline border-0 border-y-2 btn-error  mt-3">Booking</button>
                                    <button className="btn btn-outline border-0 border-y-2 btn-error mt-3">Read More</button>
                                </div>
                            </div>
                            {/* <div className="card-body">
                                <h2 className="card-title">{event.event_name}</h2>
                                <p>{event.details}</p>
                                <p>{event.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Listen</button>
                                </div>
                            </div> */}
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default UpcomingEvents;