import React from 'react';

const NavBar = () => {
    return (
        <div className="w-full bg-[#f5f6f8] border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="font-semibold text-[14px] text-gray-700">HERO.IO</span>
                </div>

                {/* Center Menu */}
                <div className="hidden md:flex gap-8 text-sm">
                    <a className="text-purple-600 font-medium">Home</a>
                    <a className="text-gray-600">Apps</a>
                    <a className="text-gray-600">Installation</a>
                </div>

                {/* Button */}
                <button className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white border-none rounded-md px-4">
                    Contribute
                </button>
            </div>
        </div>
    );
};

export default NavBar;