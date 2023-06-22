import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import { RiseLoader } from 'react-spinners';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='my-container text-center lg:mt-52 md:mt-32'><RiseLoader color="#36d7b7" /></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;