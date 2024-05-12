import { useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useEffect } from "react";

const UpcomingEvents = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('https://dance-academy-server-teal.vercel.app/event')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                // console.log(data);
            })
    }, []);


    return (
        <div className=" mb-16 mt-16">
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
                               
                                <div className="card-actions justify-end flex gap-4 ">
                                    <button className="btn btn-outline border-0 border-y-2 btn-error mt-3">Booking</button>
                                    <button className="btn btn-outline border-0 border-y-2 btn-error mt-3" onClick={() => document.getElementById('my_modal_5').showModal()}>Read More</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box bg-pink-100 font-semibold">
                                            <img className="p-5 w-full" src={event.image} alt={event.event_name} />
                                            <h3 className="font-bold text-lg">event Name: {event.event_name}</h3>
                                            <p className="py-4">Event ID: {event._id}</p>
                                            <p className="py-4"><ul>event Details:</ul> {event.details}</p>
                                            <p className="mb-3 text-lg italic ">Ticket Price: 50 $</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn btn-outline border-0 border-y-2 btn-error mt-3">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default UpcomingEvents;