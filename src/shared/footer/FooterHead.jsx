import React from 'react';
import { Link } from 'react-router-dom';
import { FaBlogger, FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";

const FooterHead = () => {
    return (
        <div className='bg-gray-100'>
            <div className='md:grid lg:grid-cols-4 md:grid-cols-2 gap-4 py-8 px-4 my-container'>
                <div className='lg:space-y-2'>
                    <h2 className='text-2xl font-semibold'><span className='text-orange-500'>Learn</span> English</h2>
                    <p>Improve your English reading skills. EnglishClub helps ESL learners with tips, exercises and tests, a reading guide, recommended reading, short stories.</p>
                    <button className='btn btn-outline text-orange-400 border border-orange-400'>Appointment</button>
                </div>
                <div className='lg:space-y-2'>
                    <h2 className='text-xl font-semibold'>Quick Links</h2>
                    <ul>
                        <li className='hover:underline'><Link>About Us</Link></li>
                        <li className='hover:underline'><Link>Sevices</Link></li>
                        <li className='hover:underline'><Link>Policis</Link></li>
                        <li className='hover:underline'><Link>Online Payment</Link></li>
                        <li className='hover:underline'><Link>Contact Us</Link></li>
                    </ul>
                </div>
                <div className='lg:space-y-2'>
                    <h2 className='text-xl font-semibold'>Our Services</h2>
                    <ul>
                        <li className='hover:underline'><Link>Basic English</Link></li>
                        <li className='hover:underline'><Link>English Grammer</Link></li>
                        <li className='hover:underline'><Link>ILTS English</Link></li>
                        <li className='hover:underline'><Link>Spoken English</Link></li>
                        <li className='hover:underline'><Link>Kids English</Link></li>
                    </ul>
                </div>
                <div className='lg:space-y-2'>
                    <h2 className='text-xl font-semibold'>Follow Us..</h2>
                    <div className='flex items-center gap-2 lg:pt-4'>
                        <FaFacebook className='text-3xl text-green-500'></FaFacebook>
                        <FaYoutube className='text-3xl text-red-500'></FaYoutube>
                        <FaEnvelope className='text-3xl text-gray-600'></FaEnvelope>
                        <FaBlogger className='text-3xl text-orange-600'></FaBlogger>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterHead;