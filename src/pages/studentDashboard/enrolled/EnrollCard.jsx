import React from 'react';

const EnrollCard = ({enrolledItem}) => {
    const {date, price, status, productId, user} = enrolledItem;
    return (
        <tr>
            <th>
                <span>{user}</span>
            </th>
            <td>
                <p>{productId}</p>
            </td>
            <td>
                <p>{date}</p>
            </td>
            <td>{price}</td>
            <th>
                <p>{status}</p>
            </th>
        </tr>
    );
};

export default EnrollCard;