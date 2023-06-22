import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {
    const { price, id } = useParams();
    // console.log(id)
    return (
        <Elements stripe={stripePromise}>
            <div className='w-[700px] mt-10 mx-auto bg-slate-100 p-4'>
                <CheckOut id={id} price={price}></CheckOut>
            </div>
        </Elements>
    );
};

export default Payment;