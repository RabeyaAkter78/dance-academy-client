
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import UseAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";

const useSelectCourseData = () => {
    const [axiosSecure] = UseAxiosSecure()

    const { user, loading } = useContext(AuthContext)

    const { data: selecteddatas = [], refetch } = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),   
        queryFn: async () => {
            const response = await axiosSecure(`https://dance-academy-server-rabeyaakter78.vercel.app/selectedClass?email=${user?.email}`)
            return response.data;
        },
    })
    return [selecteddatas, refetch, loading]




}
export default useSelectCourseData;