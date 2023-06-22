import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle("Register")
    const [error, setError] = useState("");
    const { createUser, updateUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // create an new user
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateUserInfo(data.name, data.photoURL)
                .then( result =>{
                    const userInfo = {name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL}

                    fetch('https://b7a12-summer-camp-server-side-ashaansojib-ashaansojib.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                })
                .catch( error =>{
                    setError(error.message)
                })
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
        reset()
    }
    return (
        <div className='mx-auto lg:w-[400px] text-center'>
            <div className="card shadow-2xl my-4">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Type Your Full Name</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" {...register("email", { required: true })} name='email' className="input input-bordered" />
                        {errors.email && <span className="text-red-600 text-left">Email must Valid</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text"  {...register("photoURL", { required: true })} placeholder="Put Photo Url" className="input input-bordered" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: true, minLength: 8,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} placeholder="Type Password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p className="text-red-500">Use Unique Password</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 8 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-500">One Uppercase, One lower case, One number and One special character.</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} placeholder="Confirm Password" className="input input-bordered" />
                        {errors.password && <p className="text-red-500">Password Don't Match</p>}
                    </div>
                    <span className='text-red-500'>{error}</span>
                    <label className="label">
                        <span>Already have any Account? <Link to="/login" className='link link-accent' >Login</Link></span>
                    </label>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;