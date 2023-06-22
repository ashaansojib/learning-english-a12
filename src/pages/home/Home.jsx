import React from 'react';
import Header from './header/Header';
import Instructors from './instructors/Instructors';
import useTitle from '../../hooks/useTitle';
import PopularClass from './classes/PopularClass';
import {motion, useScroll } from 'framer-motion';
import About from '../about/About';

const Home = () => {
    useTitle("Home")
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Header></Header>
            <PopularClass></PopularClass>
            <About></About>
            <Instructors></Instructors>
        </>
    );
};

export default Home;