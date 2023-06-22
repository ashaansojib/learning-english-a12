import React from 'react';
import { Link } from 'react-router-dom';

const SelectedCard = ({index, data, handleDelete}) => {
    const { _id, courseImage, courseName, courseFee} = data;
    
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={courseImage} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <p>{courseName}</p>
            </td>
            <td>BDT: {courseFee}</td>
            <th>
                <button onClick={()=>handleDelete(_id)} className='btn-sm btn-outline btn rounded-none'>Delete</button>
            </th>
            <th>
                <Link to={`/dashboard/payment/${courseFee}/${_id}`}><button className='btn-sm btn-outline btn rounded-none hover:bg-blue-600'>Payment</button></Link>
            </th>
        </tr>
    );
};

export default SelectedCard;