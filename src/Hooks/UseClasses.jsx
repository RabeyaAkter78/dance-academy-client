import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseClasses = () => {

    const { user, loading } = useContext(AuthContext);
    console.log(user);

    const [axiosSecure] = UseAxiosSecure();

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading && !!user,
        queryFn: async () => {
            const res = await axiosSecure(`/class?email=${user?.email}`)
            console.log('res from axios', res);
            return res.data;
        },
    })

    return [classes, refetch]
};



export default UseClasses;