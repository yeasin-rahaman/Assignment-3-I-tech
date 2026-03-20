import React from 'react';
import NavBar from '../../Components/Navigation/NavBar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className="bg-gray-100">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;