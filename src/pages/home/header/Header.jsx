import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Header = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <header className='top-banner'>
            <div className="my-container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='lg:grid grid-cols-2 justify-between items-center gap-4'>
                            <div>
                                <p className='my-badge'>ONLY BEST LIFECOACHES</p>
                                <h2 className='text-6xl font-bold my-4'>We Provide Service <span className='text-sky-400'>4 Years</span></h2>
                                <p>English texts for beginners to practice reading and comprehension online and for free. Practicing your comprehension of written English will both improve</p>
                                <button className='mt-4 my-btn'>Learn More</button>
                            </div>
                            <div className='lg:flex justify-end items-center'>
                                <img className='lg:w-[400px]' src="/slider-banner.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='lg:grid grid-cols-2 justify-between items-center gap-4'>
                            <div>
                                <p className='my-badge'>ONLY BEST LIFECOACHES</p>
                                <h2 className='text-6xl font-bold my-4'>We Teach You Take <span className='text-sky-400'>Life Control</span></h2>
                                <p>Reading practice to help you understand texts with a wide vocabulary where you ... Our online English classes feature lots of useful learning materials.</p>
                                <button className='mt-4 my-btn'>Learn More</button>
                            </div>
                            <div className='flex justify-end items-center'>
                                <img className='lg:w-[400px]' src="https://unicoach.wgl-demo.net/wp-content/uploads/2020/10/home1_slider1.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </header>
    );
};

export default Header;