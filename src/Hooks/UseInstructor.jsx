import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseInstructor = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log('is Instructor response:', res);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default UseInstructor;