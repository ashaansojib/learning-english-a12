import React from 'react';
import { Link } from 'react-router-dom';

const ClassesCard = ({ classItem, handleApproved, handleDeny }) => {
    const { image, _id, price, status, email, course, seate } = classItem;
    return (
        <tr>
            <th>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </th>
            <th>
                <h2>{email}</h2>
            </th>
            <th>
                <p>{course}</p>
            </th>
            <th>
                {seate}
            </th>
            <th>
                <p>{price}</p>
            </th>
            <th>
                <p>{status}</p>
            </th>
            <th>
                <button disabled={status === 'Denied' ? true : false} onClick={()=>handleApproved(_id)} className="btn btn-ghost btn-xs">Approved</button>
                <button disabled={status === 'Denied' || status === 'Approved' ? true : false} onClick={()=>handleDeny(_id)} className="btn btn-ghost btn-xs">Deny</button>
                <button disabled={status === 'Denied' ? false : true} className="btn btn-ghost btn-xs"><Link to={`/dashboard/feedback/${email}`}>Feedback</Link></button>
            </th>
        </tr>
    );
};

export default ClassesCard;