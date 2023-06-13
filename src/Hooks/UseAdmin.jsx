import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseAdmin = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log('is admin response:', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default UseAdmin;