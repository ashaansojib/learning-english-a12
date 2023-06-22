import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const GoogleLogin = () => {
    const {singInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin =() =>{
        singInWithGoogle()
        .then( result =>{
            const loginUser = result.user;
            const userInfo = {name: loginUser.displayName, email: loginUser.email, photo: loginUser.photoURL}
            fetch('https://b7a12-summer-camp-server-side-ashaansojib-ashaansojib.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            navigate(from, {replace: true})
        })
        .catch( error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleLogin} className="btn btn-sm btn-outline">
                    Login With Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;