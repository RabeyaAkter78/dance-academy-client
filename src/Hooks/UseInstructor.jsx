import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseInstructor = () => {
    const { user } = useContext(AuthContext);
    // console.log(user?.email);
    const [axiosSecure] = UseAxiosSecure();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log('is Instructor response:', res);
            return res.data.instructor;
        }
    })
    // console.log(isInstructor);
    return [isInstructor, isInstructorLoading]
};

export default UseInstructor;



// http://localhost:5000/