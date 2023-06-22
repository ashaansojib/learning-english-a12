import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const ApproveClassCard = ({ item, handleSelect }) => {
    const { user } = useAuth();
    const { _id, course, name, price, image, seate, selected } = item;
    const [role, setRole] = useState("");
    axios.get(`https://b7a12-summer-camp-server-side-ashaansojib-ashaansojib.vercel.app/current-user/${user?.email}`)
    .then( res =>{
        // console.log(res.data)
        setRole(res.data?.role)
    })
    .catch( error =>{
        console.log(error)
    })
    return (
        <div className={`card w-[270px] rounded-b-none border ${seate === 0 && 'border-red-500'}`}>
            <figure><img src={image} className='w-full h-full' alt="Shoes" /></figure>
            <div className="p-2">
                <p className='text-xl py-1'>{course}</p>
                <h2 className='text-slate-500'>{name}</h2>
                <div className='flex justify-between items-center'>
                    <p>BDT : {price}</p>
                    <p>Available : {seate}</p>
                </div>
                <button disabled={(seate === 0 || role === 'admin' || role === 'instructor') && true} onClick={() => handleSelect(_id, item)} className='btn-outline rounded-none btn w-full mt-2'>Select Course</button>
            </div>
        </div>
    );
};

export default ApproveClassCard;