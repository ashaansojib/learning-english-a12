import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { SyncLoader } from 'react-spinners';
import ApproveClassCard from './ApproveClassCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllClasses = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const { data: approveClass = [], refetch } = useQuery(['approveClass'], async () => {
        const res = await axiosSecure.get('approve-classes')
        return res.data;
    });
    if (approveClass.length === 0) {
        return <div className='my-container py-40 text-center'><SyncLoader color="#36d7b7" /></div>
    }
    // console.log(user)
    const handleSelect = (id, item) => {
        // console.log(item)
        const { _id, course, email, image, name, price } = item;
        const savedClass = {
            _id: _id,
            courseName: course,
            instructorMail: email,
            courseImage: image,
            instructorName: name,
            courseFee: price,
            myEmail: user?.email,
            enroll: 0
        }

        if (user === null) {
            Swal.fire({
                title: 'You need to login first',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            return navigate('/login')
        }
        // if (selected) {
        //     return toast.warning('🦄 Already Select This Course', {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        // }
        fetch('https://b7a12-summer-camp-server-side-ashaansojib-ashaansojib.vercel.app/new-selected-class', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(savedClass),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(data => {
                console.log(data);
                if (data.message === 'Data already exists') {
                    alert('Data already exists in the database');
                } else {
                    alert('Class selected');
                }
            })
            .catch(error => {
                console.log(error);
                if (error instanceof TypeError) {
                    alert('An error occurred while selecting the class');
                } else {
                    alert('This class already added you');
                }
            });


        // axiosSecure.post('new/select-classes', savedClass)
        // .then( res =>{
        //     console.log(res.data)
        // })
        // fetch('https://b7a12-summer-camp-server-side-ashaansojib-ashaansojib.vercel.app/new/select-classes', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(savedClass)
        // })
        // .then( res =>{
        //     console.log(res)
        // })
        // .catch(error =>{
        //     console.log(error)
        // })


        // axiosSecure.patch(`select-course/${id}`)
        //     .then(data => {
        //         toast.success('🦄 Done You Selected This', {
        //             position: "top-center",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "light",
        //         });
        //         refetch();
        //     });
    }
    // console.log(approveClass[0])
    return (
        <div className='my-container'>
            <h2 className='text-3xl font-medium flex items-center gap-4 py-4'>Best Learning Course <span className='text-green-500'><FaArrowRight></FaArrowRight></span></h2>
            <ToastContainer />
            <div className='grid grid-cols-3 gap-2'>
                {
                    approveClass.map(item => <ApproveClassCard
                        key={item._id}
                        item={item}
                        handleSelect={handleSelect}
                    ></ApproveClassCard>)
                }
            </div>
        </div>
    );
};

export default AllClasses;