import React from 'react';

const Installation = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc] p-4 md:p-12">
            <div className="max-w-6xl mx-auto">

                {/* HEADER SECTION */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-black text-slate-800 mb-4">Your Installed Apps</h1>
                    <p className="text-slate-500 max-w-lg mx-auto">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </header>

                {/* TOOLBAR: Info & Sort */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-slate-800">1 Apps Found</h2>

                    {/* DaisyUI Select for Sorting */}
                    <select className="select select-bordered select-sm w-40 bg-white text-slate-500 font-medium rounded-md">
                        <option disabled selected>Sort By Size</option>
                        <option>Latest</option>
                        <option>Size: High to Low</option>
                    </select>
                </div>

                {/* LIST CONTAINER */}
                <div className="space-y-4">

                    {/* APP ROW ITEM (Repeatable) */}
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-100 gap-4 transition-all hover:shadow-md">

                            <div className="flex items-center gap-5 w-full sm:w-auto">
                                {/* Square Placeholder */}
                                <div className="w-16 h-16 bg-gray-200 rounded-xl flex-shrink-0 overflow-hidden">
                                    {/* <img src={appIcon} className="w-full h-full object-cover" /> */}
                                </div>

                                {/* App Content */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold text-slate-800 text-lg">
                                        Forest: Focus For Productivity
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                                        <span className="flex items-center gap-1 text-emerald-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            9M
                                        </span>
                                        <span className="flex items-center gap-1 text-orange-400">
                                            <span className="text-sm">★</span> 5
                                        </span>
                                        <span className="text-slate-400">258 MB</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <button className="btn btn-md w-full sm:w-32 bg-[#00d394] hover:bg-emerald-500 border-none text-white font-bold rounded-lg normal-case">
                                Uninstall
                            </button>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Installation;