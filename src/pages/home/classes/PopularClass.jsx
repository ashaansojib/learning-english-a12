import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaArrowRight } from "react-icons/fa";
import PopularClassCard from './PopularClassCard';

const PopularClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: popularClass = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('classes')
        return res.data;
    });
    return (
        <div className='my-container my-10'>
            <h2 className='text-3xl font-medium flex items-center gap-4'>Our Top Courses <span className='text-green-500'><FaArrowRight></FaArrowRight></span></h2>
            <div className='grid lg:grid-cols-3 justify-center items-center lg:p-10 gap-2 p-4'>
                {
                    popularClass.map(classData => <PopularClassCard
                        key={classData._id}
                        classData={classData}
                    ></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;