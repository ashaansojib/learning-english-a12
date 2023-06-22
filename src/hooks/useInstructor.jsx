import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () =>{
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor = [], isLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`users/instructor/${user?.email}`);
            return res.data.instructor;
            // console.log(res)
        }
    })
    return [isInstructor]
}
export default useInstructor;