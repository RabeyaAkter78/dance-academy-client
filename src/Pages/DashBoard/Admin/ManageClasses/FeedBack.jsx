import axios from "axios";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const FeedBack = () => {
    const location = useLocation();
    const data = location.state;
    const course_image = data.course_image;
    console.log(data);

    const feedBack = (event) => {
        event.preventDefault();
        const form = event.target;
        const formdata = form.textArea.value;

        axios.patch(`http://localhost:5000/adminFeedBack/${data._id}`, { adminFeedBack: formdata })
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: '',
                        icon: 'success',
                        title: 'send your feedback successfully ',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        form.reset();
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>

                        {/* row 3 */}


                    </tbody>


                </table>



            </div>
            <form onSubmit={feedBack} className="flex flex-col justify-center">
                <textarea name="textArea" id="" cols="30" rows="5"></textarea>

                <input type="submit" value="submit" className="btn btn-outline btn-error border-0 border-y-2 my-4" />
            </form>

        </div>
    );
};

export default FeedBack;