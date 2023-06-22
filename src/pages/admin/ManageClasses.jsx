import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassesCard from '../cards/ClassesCard';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    useTitle("Manage Classes")
    const [axiosSecure] = useAxiosSecure();
    const { data: allClasses = [], refetch } = useQuery(['allClasses'], async () => {
        const res = await axiosSecure('admin/classes')
        return res.data;
    });
    const handleApproved = (id) =>{
        axiosSecure.patch(`classes/admin/${id}`)
        .then(data => {
            Swal.fire('This Class Approved By Admin')
            refetch();
        })
    }
    const handleDeny = (id) =>{
        axiosSecure.patch(`classe/admin/${id}`)
        .then(data => {
            Swal.fire('Denied this class by Admin')
            refetch();
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className='text-[18px]'>Image</th>
                        <th className='text-[18px]'>Email</th>
                        <th className='text-[18px]'>Course</th>
                        <th className='text-[18px]'>Seate</th>
                        <th className='text-[18px]'>Price</th>
                        <th className='text-[18px]'>Status</th>
                        <th className='text-[18px]'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allClasses.map(classItem => <ClassesCard 
                            key={classItem._id} 
                            classItem={classItem}
                            handleDeny={handleDeny}
                            handleApproved={handleApproved}
                            ></ClassesCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageClasses;