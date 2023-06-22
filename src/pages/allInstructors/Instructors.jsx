import React from 'react';
import AllInstructors from './AllInstructors';
import useTitle from '../../hooks/useTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { SyncLoader } from 'react-spinners';

const Instructors = () => {
    useTitle("All Instructors")
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('instructors')
        return res.data;
    });
    if(instructors.length === 0){
        return <div className='my-container py-40 text-center'><SyncLoader color="#36d7b7" /></div>
    }
    return (
        <div className='my-container'>
            <h2 className='text-center text-2xl font-medium py-4'>Get All Our Instructors In Tabular Form</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='bg-gray-100 text-xl'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructors.map( (ins, index) => <AllInstructors
                            index={index}
                            key={ins._id}
                            ins={ins}
                            ></AllInstructors>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;