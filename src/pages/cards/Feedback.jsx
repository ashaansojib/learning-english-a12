import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';

const Feedback = () => {
    const {email} = useParams();
    const { user } = useAuth();
    const [feedbackText, setFeedBackText] = useState("");
    const [axiosSecure] = useAxiosSecure();
    
    const feedbackMessage = {
        feedback: feedbackText,
        admin: user?.email,
        date: new Date(),
        email: email
    }
    const getFeedBackValue = (e) => {
        setFeedBackText(e.target.value)
    }
    const sendFeedBack = () => {
        axiosSecure.post('https://b7a12-summer-camp-server-side-ashaansojib-ashaansojib.vercel.app/admin/feedback', feedbackMessage)
        .then( res =>{
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
    // console.log(email)
    return (
        <div className='mx-auto w-[500px] h-[300px] mt-4'>
            <textarea onChange={getFeedBackValue} className="textarea textarea-bordered w-full h-full" placeholder="Write your feedback why you dont approved this class"></textarea>
            <button onClick={sendFeedBack} className='btn btn-outline'>Send Feedback</button>
        </div>
    );
};

export default Feedback;