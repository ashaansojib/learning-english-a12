import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const AddAClass = () => {
    useTitle("DashBoard - Add A Class");
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const addClass = (e) => {
        e.preventDefault();
        const form = e.target;
        const courseName = form.courseName.value;
        const courseBanner = form.courseBanner.value;
        const price = parseFloat(form.price.value);
        const seate = parseInt(form.seate.value);
        const status = form.status.value;
        const instructor = form.instructor.value;
        const mail = form.mail.value;
        const classInfo = {
            course: courseName,
            image: courseBanner,
            price: price,
            seate: seate,
            status: status,
            name: instructor,
            email: mail,
        }
        // console.log/(classInfo)
        axiosSecure.post('classes', classInfo)
        .then( res =>{
            if(res.data.acknowledged){
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            form.reset();
        })
        .catch( error =>{
            console.log(error)
        })
    }
    
    return (
        <div>
            <div className='my-container'>
                <form onSubmit={addClass} className="card-body">
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course Name *</span>
                            </label>
                            <input type="text" name="courseName" placeholder="Type Course Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course Fees *</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seate *</span>
                            </label>
                            <input type="text" name="seate" placeholder="Available Seate" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing *</span>
                            </label>
                            <input type="text" name="status" defaultValue="Pending" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course Banner *</span>
                        </label>
                        <input type="text" name='courseBanner' placeholder='Type Image Link' className="file-input file-input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name *</span>
                        </label>
                        <input type="text" name="instructor" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Mail *</span>
                        </label>
                        <input type="email" name="mail" defaultValue={user?.email} className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-outline">Post A Class</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAClass;