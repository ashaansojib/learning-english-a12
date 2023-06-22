import React from 'react';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className='my-container text-center lg:mt-52 md:mt-32'><RiseLoader color="#36d7b7" /></div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;