import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import './Checkout.css'
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const CheckOut = ({ price, id }) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [process, setProcess] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        axiosSecure.post('create-payment-intent', { price })
            .then(res => {
                // console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [price, axiosSecure])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error)
            setError(error.message)
        }
        else {
            // console.log('payment methods', paymentMethod)
            setError("")
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            setError(confirmError.message)
        }
        setProcess(true)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                user: user?.email,
                productId: id,
                transactionId: paymentIntent.id,
                price: parseFloat(price),
                date: new Date(),
                status: paymentIntent.status
            }
            axiosSecure.post('payments', payment)
                .then(res => {
                    if (res.data.result.acknowledged) {
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Payment Successfully done!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className='mt-4'>
                {error && <span className='text-center text-red-600'>{error}</span>}
                {transactionId && <span className='text-green-600'>This is your transction is: {transactionId}</span>}
            </div>
            <button className='bg-green-600 active' type="submit" disabled={!stripe || !clientSecret || process}>
                Pay Now
            </button>
        </form>
    );
};

export default CheckOut;