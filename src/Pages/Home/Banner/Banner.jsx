import { Link } from 'react-router-dom';
import image1 from '../../../assets/images/dance1.png'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mb-16">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/HVBSmbn/corina-1-RGB.jpg" className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0  bottom-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white font-bold lg:space-y-7 lg:w-1/2 lg:pl-12'>
                            <h2 className='text-5xl md:text-6xl text-white font-bold'>
                            Express Yourself through Movement
                                at Dance Academy
                               
                            </h2>
                            <p>Learn From The Best Dance professionals
                               </p>
                            <div>
                                <Link to="/classes">
                                    <button className="btn btn-outline border-0 border-y-2 btn-error  mt-3">Take A Tour</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1404175194/photo/ballerina-dance-ballet-dancer-in-red-dress-jumping-split-woman-in-ballerina-shoes-dancing-in.jpg?s=612x612&w=0&k=20&c=ulKfQhNR6viAQhMj-uvrXG3BHZNu8-Be_-1OanihWL8=" className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0  bottom-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white font-bold lg:space-y-7 lg:w-1/2 lg:pl-12'>
                            <h2 className='text-5xl md:text-6xl text-white font-bold'> Dancing is Like dreaming With your foot!</h2>
                            <p>Learn From The Best Dance professionals</p>
                            <div>
                                <Link to="/classes">
                                    <button className="btn btn-outline border-0 border-y-2 btn-error  mt-3">Take A Tour</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" />
                    <div className="absolute flex items-center h-full left-0 top-0  bottom-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white font-bold lg:space-y-7 lg:w-1/2 lg:pl-12'>
                            <h2 className='text-5xl md:text-6xl text-white font-bold'> Dance With Self Confidence</h2>
                            <p> Unleash your inner dancer and embark on an extraordinary journey of grace, expression, and self-discovery at Dance Academy.</p>
                            <div>
                                <Link to="/classes">
                                    <button className="btn btn-outline border-0 border-y-2 btn-error  mt-3">Take A Tour</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;