import React from 'react';

const UsersCard = ({ user, serial,handleAdmin, handleDelete, handleInstructor }) => {
    const { _id, email, role } = user;
    return (
        <tr>
            <th>
                <span>{serial + 1}</span>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <p>{email}</p>
                </div>
            </td>
            <td>
                <p>Sojib</p>
            </td>
            <td>
                {
                    role === 'admin' ? <span className='text-green-600 btn btn-ghost btn-xs'>Admin</span> : <button onClick={()=> handleAdmin(_id)} className="btn btn-ghost btn-xs">Admin</button>
                }
                {
                    role === 'instructor' ? <span className='text-sky-500 btn btn-ghost btn-xs'>Instructor</span> : <button onClick={()=> handleInstructor(_id)} className="btn btn-ghost btn-xs">Instructors</button>
                }
            </td>
            <th>
                <button onClick={()=> handleDelete(_id)} className="btn btn-ghost btn-xs">Remove</button>
            </th>
        </tr>
    );
};

export default UsersCard;