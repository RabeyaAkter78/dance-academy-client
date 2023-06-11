import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <div className='container mb-8'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${"https://i.ibb.co/HFbwXzt/404-page-cover.jpg"})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        {/* <h1 className="mb-5 text-5xl font-bold">404</h1>
                        <p className="mb-5">Page Not Found</p> */}
                        <button className="btn   btn-error mt-80">
                            <Link to='/'>Go Back Home</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;