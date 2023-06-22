import React from 'react';
import SectionTitle from '../../hooks/SectionTitle';

const About = () => {
    return (
        <div className='my-container'>
            <SectionTitle heading="What to Expect from a Collab Course" subHeading="Collaboration skills are what enable you to work well with others. Most work environments require collaboration, so these skills are essential. These skills include understanding a variety of perspectives, managing priorities from everyone in the group."></SectionTitle>
            <div className='lg:grid grid-cols-2 gap-2 p-2'>
                <div>
                    <img src="https://html.merku.love/collab/assets/images/about/about_image_1.jpg" alt="" />
                </div>
                <div className='grid md:grid-cols-2 gap-2'>
                    <div className='border border-sky-500 p-4 hover:-translate-y-2 transition hover:bg-[#f7ff62]'>
                        <img className='p-2 rounded-full bg-sky-300' src="https://html.merku.love/collab/assets/images/service/icon_academic_cap.svg" alt="" />
                        <h2 className='text-xl font-semibold'>Knowledge</h2>
                        <p>Duis aute irure dolor in repreh in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                    </div>
                    <div className='border border-sky-500 p-4 hover:translate-x-2 transition hover:bg-[#f7ff62]'>
                        <img className='p-2 rounded-full bg-sky-300' src="https://html.merku.love/collab/assets/images/service/icon_physics.svg" alt="" />
                        <h2 className='text-xl font-semibold'>Unlimited Access</h2>
                        <p>Duis aute irure dolor in repreh in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                    </div>
                    <div className='border border-sky-500 p-4 hover:translate-y-2 transition hover:bg-[#f7ff62]'>
                        <img className='p-2 rounded-full bg-sky-300' src="https://html.merku.love/collab/assets/images/service/icon_communication.svg" alt="" />
                        <h2 className='text-xl font-semibold'>Practical Skills</h2>
                        <p>Duis aute irure dolor in repreh in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                    </div>
                    <div className='border border-sky-500 p-4 hover:translate-y-2 transition hover:bg-[#f7ff62]'>
                        <img className='p-2 rounded-full bg-sky-300' src="https://html.merku.love/collab/assets/images/service/icon_diploma.svg" alt="" />
                        <h2 className='text-xl font-semibold'>A Certificate</h2>
                        <p>Duis aute irure dolor in repreh in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;