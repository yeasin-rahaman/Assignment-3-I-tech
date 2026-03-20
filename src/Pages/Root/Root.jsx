import React from 'react';
import NavBar from '../../Components/Navigation/NavBar';
import Footer from '../../Components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div className="bg-gray-100">
            <NavBar />

            {navigation.state === "loading" && (
                <div className="flex justify-center py-6">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            )}

            <Outlet />

            <Footer />
        </div>
    );
};

export default Root;