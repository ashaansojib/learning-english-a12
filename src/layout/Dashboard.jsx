import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useTitle from '../hooks/useTitle';
import { FaAccessibleIcon, FaBook, FaEnvelope, FaHome, FaHouseUser, FaMobile, FaUserEdit } from "react-icons/fa";

const Dashboard = () => {
    useTitle("Dashboard")
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    // console.log(isAdmin, user)
    // console.log(user)
    const location = useLocation();
    return (
        <div className='bg-slate-200 max-w-screen-xl mx-auto grid grid-cols-4 gap-2'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-[#212121] text-white">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <h2 className='bg-[#42A5F5] text-white py-4 px-2'><Link to='/'>E-Learning | Home</Link></h2>
                    <div className='p-4 text-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        <h2 className='text-xl'>{user.displayName}</h2>
                    </div>
                    <div className="divider text-gray-400">--------------
                        {isAdmin && ('Admin Dashboard')}
                        {isInstructor && !isAdmin && ('Instructor Dashboard')}
                        {!isAdmin && !isInstructor && ('Student Dashboard')}
                        --------------</div>
                    <ul className="menu p-4 w-80">
                        <li className='hover:bg-black'><Link> <FaHome></FaHome> Dashboard</Link></li>
                        {
                            isAdmin && (
                                <>
                                    <li className='hover:bg-black'><Link to="/dashboard/manage-classes"><FaBook></FaBook> Manage Classes</Link></li>
                                    <li className='hover:bg-black'><Link to="/dashboard/manage-users"> <FaHouseUser></FaHouseUser> Manage Users</Link></li>
                                </>
                            )
                        }
                        {
                            isInstructor && !isAdmin && (
                                <>
                                    <li className='hover:bg-black'><Link to="/dashboard/add-class"><FaUserEdit></FaUserEdit> Add A Class</Link></li>
                                    <li className='hover:bg-black'><Link to="/dashboard/my-classes"><FaBook></FaBook> My Classes</Link></li>
                                </>
                            )
                        }
                        {
                            !isAdmin && !isInstructor && (
                                <>
                                    <li className='hover:bg-black'><Link to="/dashboard/my-selected-class"><FaBook></FaBook> My Selected Classes</Link></li>
                                    <li className='hover:bg-black'><Link to="/dashboard/enrolled"><FaAccessibleIcon></FaAccessibleIcon> My Enrolled Classes</Link></li>
                                </>
                            )
                        }
                    </ul>
                    <div className="divider text-gray-400 border-b"></div>
                    <ul className="menu p-4 w-80 text-white">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-3'>
                {
                    location.pathname === '/dashboard' && <div className="card w-96 mt-10 mx-auto bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img referrerPolicy='no-referrer' src={user.photoURL} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{user.displayName}</h2>
                      <p className='flex gap-1 items-center'><span><FaEnvelope></FaEnvelope></span>{user.email}</p>
                      <p className='flex gap-1 items-center'><FaMobile></FaMobile> (+998) 9080878XX</p>
                    </div>
                  </div>
                }
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;