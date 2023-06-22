import React from 'react';

const PopularClassCard = ({ classData }) => {
    const { name, image, price,course } = classData;
    return (
        <div className="card md:w-[270px] rounded-b-none hover:border-sky-600 border">
            <figure><img src={image} className='w-full h-full' alt="Shoes" /></figure>
            <div className="p-2">
                <p className='text-xl py-1'>{course}</p>
                <h2 className='text-slate-500'>{name}</h2>
                <div className='flex justify-between items-center'>
                    <p>BDT : {price}</p>
                    <button className='active'>More</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;