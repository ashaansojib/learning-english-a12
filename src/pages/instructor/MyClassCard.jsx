import React from 'react';
import { Link } from 'react-router-dom';

const MyClassCard = ({ myClass }) => {
    const { course, email, image, name, price, seate, status } = myClass;
    return (
        <div className='p-4 w-[300px] rounded-md border border-teal-500'>
            <div className='rounded-md'>
                <img className="max-h-full" src={image} alt="" />
            </div>
            <div className='lg:space-y-2 py-2 border-b'>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <p className='text-gray-600'>{email}</p>
                <p>{course}</p>
            </div>
            <div className='grid grid-cols-2 justify-between'>
                <p>Fees: {price}</p>
                <p>Available: {seate}</p>
                <p>Status: {status}</p>
            </div>
            <div>
                <Link to="/"><button className='btn-sm btn-outline w-full border-orange-400 border rounded-md'>View Profile</button></Link>
            </div>
        </div>
    );
};

export default MyClassCard;