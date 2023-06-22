import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../shared/nav/Nav';
import Footer from '../shared/footer/Footer';


const Main = () => {
    
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;