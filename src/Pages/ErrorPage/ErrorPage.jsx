import React from 'react';
import ErrorImg from "./../../assets/error-404.png"
// import HeroSection from '../../Components/HeroSection/HeroSection';
const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 text-center">

            {/* ILLUSTRATION CONTAINER */}
            <div className="relative w-full max-w-md mb-12 transform hover:scale-105 transition-transform duration-500">
                {/* You would replace this placeholder with your specific 404 image.
      If you're using the asset from the screenshot:
    */}
                <img
                    src={ErrorImg}
                    alt="404 Page Not Found"
                    className="w-full h-auto drop-shadow-xl"
                />
            </div>

            {/* TEXT CONTENT */}
            <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
                    Oops, page not found!
                </h1>
                <p className="text-slate-500 text-sm md:text-base max-w-xs mx-auto">
                    The page you are looking for is not available.
                </p>
            </div>

            {/* ACTION BUTTON */}
            <div className="mt-8">
                <button
                    onClick={() => window.history.back()}
                    className="btn bg-[#8b5cf6] hover:bg-[#7c3aed] border-none text-white px-10 rounded-lg font-bold shadow-lg shadow-purple-100 normal-case"
                >
                    Go Back!
                </button>
            </div>

        </div>
    );
};

export default ErrorPage;