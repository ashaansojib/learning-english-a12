import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";
import MyClassCard from "./MyClassCard";

const MyClasses = () => {
    useTitle("Dashboard - My Classes")
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: classes = []} = useQuery(['classes'], async() =>{
        const res = await axiosSecure.get(`classes/instructor/${user?.email}`)
        // console.log(res.data)
        return res.data;
    });
    return (
        <div className="grid grid-cols-3 gap-y-2 p-4 ">
            {
                classes.map( myClass => <MyClassCard key={myClass._id} myClass={myClass}></MyClassCard> )
            }
        </div>
    );
};

export default MyClasses;