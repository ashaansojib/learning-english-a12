import React from 'react';

const AllInstructors = ({ ins, index }) => {
    const { email, name, photo, role } = ins;
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <p>{name}</p>
            </td>
            <td>{email}</td>
            <th>
                <p>{role}</p>
            </th>
        </tr>
    );
};

export default AllInstructors;