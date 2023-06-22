import React from 'react';
import { Link } from 'react-router-dom';
import FooterHead from './FooterHead';

const Footer = () => {
    return (
        <footer>
            <FooterHead></FooterHead>
            <div className='p-4 text-center bg-slate-200'>
                <div className="my-container">
                <p>Copyright @ 2023 - All Rights Are Reserved By <Link to="/">Learn English</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;