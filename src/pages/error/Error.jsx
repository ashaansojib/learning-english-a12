import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Error = () => {
    useTitle("404 Found")
    return (
        <div className='max-w-screen-md mx-auto text-center'>
            <div>
                <img src="/error.png" alt="" />
            </div>
            <Link to="/"><button className='btn btn-outline'>Go Back Home</button></Link>
        </div>
    );
};

export default Error;