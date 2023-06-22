import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { FadeLoader } from 'react-spinners';
import SelectedCard from './SelectedCard';
import Swal from 'sweetalert2';

const MySelectedClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: selectClass = [], refetch } = useQuery(['selected'], async () => {
        const res = await axiosSecure.get(`my-selected-class/${user?.email}`)
        return res.data;
    });
    // console.log(selectClass)
    if (selectClass.length === 0) {
        return <div className='my-container p-40 text-center'><h2 className='text-red-500'>Data Is Empty</h2><FadeLoader color="#36d7b7" /></div>
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this course?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`selected-class-delete/${id}`)
                    .then(res => {
                        console.log(res);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        ).then(() => {
                            refetch();
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
    };


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='bg-gray-100 text-xl'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectClass.map((data, index) => <SelectedCard
                                key={data._id}
                                data={data}
                                index={index}
                                handleDelete={handleDelete}
                            ></SelectedCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;