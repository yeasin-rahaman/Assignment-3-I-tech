import React from 'react';
import { NavLink } from 'react-router'; // or 'react-router-dom' depending on your package

const NavBar = () => {
    // Helper function for active link styling
    const navLinkStyles = ({ isActive }) =>
        isActive
            ? "text-purple-600 font-medium"
            : "text-gray-600 hover:text-purple-500 transition-colors";

    return (
        <div className="w-full bg-[#f5f6f8] border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

                {/* Logo - Wrapped in NavLink to return Home */}
                <NavLink to="/" className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="font-semibold text-[14px] text-gray-700">I Tech</span>
                </NavLink>

                {/* Center Menu */}
                <div className="hidden md:flex gap-8 text-sm">
                    <NavLink to="/" className={navLinkStyles}>
                        Home
                    </NavLink>
                    <NavLink to="/all-app" className={navLinkStyles}>
                        Apps
                    </NavLink>
                    <NavLink to="/Installation" className={navLinkStyles}>
                        Installation
                    </NavLink>
                </div>

                {/* Action Button */}
                <button className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white border-none rounded-md px-4">
                    Contribute
                </button>
            </div>
        </div>
    );
};

export default NavBar;