import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import EnrollCard from './EnrollCard';
import useAuth from '../../../hooks/useAuth';

const EnrolledClass = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: enrolled = [], refetch} = useQuery(['enrolled'], async()=>{
        const res = await axiosSecure.get(`payments?email=${user?.email}`)
        return res.data;
    });
    // console.log(enrolled)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='bg-gray-100 text-xl'>
                            <th>User Email</th>
                            <th>Transaction</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map( enrolledItem => <EnrollCard
                            key={enrolledItem._id}
                            enrolledItem={enrolledItem}
                            ></EnrollCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;