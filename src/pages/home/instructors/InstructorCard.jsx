import { FaLocationArrow, FaCalendar, FaDollarSign } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const InstructorCard = ({instructor}) => {
    const {_id, name, email, photo, role} = instructor;
    const [rating, setRating] = useState(5)
    return (
        <div className='p-4  rounded-md border'>
            <div className='rounded-md bg-gray-200'>
                <img className="h-full" src={photo} alt="" />
            </div>
            <div className='lg:space-y-2 py-2 border-b'>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <p className='text-gray-600'>{role} - Learn English</p>
                <div>
                    <Rating style={{ maxWidth: 110 }} value={rating} onChange={setRating}></Rating>
                </div>
            </div>
            <div className='lg:space-y-2 py-2'>
                <p className='text-gray-600 flex items-center gap-2 text-sm'> <span><FaLocationArrow></FaLocationArrow></span> Dhanmondi, Dhaka, Bangladesh</p>
                <p className='text-gray-600 flex items-center gap-2 text-sm'> <span><FaCalendar></FaCalendar></span> Available On Mon, 22 December</p>
                <p className='text-gray-600 flex items-center gap-2 text-sm'> <span><FaDollarSign></FaDollarSign></span> $150</p>
            </div>
            <div>
                <Link to="/"><button className='btn-sm btn-outline w-full border-orange-400 border rounded-md'>View Profile</button></Link>
            </div>
        </div>
    );
};

export default InstructorCard;