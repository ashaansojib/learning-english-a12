import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';
import GoogleLogin from '../../shared/socialLogin/GoogleLogin';
import useTitle from '../../hooks/useTitle';
import { FaEye } from 'react-icons/fa';

const Login = () => {
    useTitle("Login")
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("")
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        userLogin(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                navigate("/")
            })
            .catch(error => {
                // console.log(error)
                setError(error.message)
            })
        reset()
    }
    const handleShow = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className='mx-auto lg:w-[400px] text-center'>
            <div className="card shadow-2xl my-4">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" {...register("email", { required: true })} name='email' className="input input-bordered" />
                        {errors.email && <span className="text-red-600 text-left">Email must Valid</span>}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'} {...register("password", {
                            required: true, minLength: 8,
                            maxLength: 20,
                        })} placeholder="Type Password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p className="text-red-500">Invalid Password</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 8 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less than 20 characters</p>}
                        <span onClick={handleShow} className='absolute top-16 right-2'><FaEye></FaEye></span>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <label className="label">
                        <span>You Don't have any Account? <Link to="/register" className="link link-accent">Register</Link></span>
                    </label>
                    <span className='text-sm text-red-600'>{error}</span>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline">Login</button>
                    </div>
                </form>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};

export default Login;