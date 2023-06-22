import React from 'react';
import UsersCard from '../cards/UsersCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const ManageUser = () => {
    useTitle("Manage Users")
    const [axiosSecure] = useAxiosSecure();
    const {data: users = [], refetch} = useQuery(['users'], async() =>{
        const res = await axiosSecure('users')
        return res.data;
    });
    // make a user as admin
    const handleAdmin = (id) =>{
        axiosSecure.patch(`users/admin/${id}`)
        .then(data => {
            Swal.fire('The User Is Admin Now!')
            refetch();
        })
    }
    // const handle delete
    const handleDelete = (id) =>{
        fetch(`https://b7a12-summer-camp-server-side-ashaansojib-ashaansojib.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire('The User Permanently Deleted!')
            refetch();
        })
    }
    const handleInstructor = id =>{
        fetch(`https://b7a12-summer-camp-server-side-ashaansojib-ashaansojib.vercel.app/users/instructor/${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire('The User Is Instructor Now!')
            refetch();
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Create Role</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( (user, index) => <UsersCard 
                        key={user._id} 
                        user={user}
                        handleAdmin={handleAdmin}
                        handleDelete={handleDelete}
                        handleInstructor={handleInstructor}
                        serial={index}></UsersCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;