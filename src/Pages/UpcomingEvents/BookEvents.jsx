
const BookEvents = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-pink-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="emil" placeholder="Email" className="input input-bordered" required />
                            </div>
                           
                            <div className="form-control mt-6">
                                <button className="btn btn-outline border-0 border-y-2 btn-error mt-3">Book Now</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default BookEvents;