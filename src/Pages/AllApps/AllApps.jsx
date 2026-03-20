import React, { useState, useMemo } from 'react';
import { useLoaderData, Link } from 'react-router';

const AllApps = () => {
    const initialData = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');

    // 1. Format Numbers (Millions/Billions)
    const formatNumber = (num) => {
        if (num >= 1000000000) return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
        if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        return num;
    };

    // 2. Live Search Logic (Case-Insensitive)
    const filteredApps = useMemo(() => {
        return initialData.filter((app) =>
            app.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, initialData]);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <main className="max-w-7xl mx-auto p-4 md:p-8">

                {/* HEADER SECTION */}
                <header className="text-center my-12 md:my-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Our All Applications
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore All Apps on the Market developed by us. We code for Millions.
                    </p>
                </header>

                {/* SEARCH & STATS BAR */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                    <p className="text-lg md:text-xl font-bold">
                        <span className="text-gray-900">({filteredApps.length})</span> Apps Found
                    </p>

                    <div className="relative w-full sm:w-auto group">
                        <input
                            type="text"
                            placeholder="Search Apps"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input w-full sm:w-80 pl-11 h-12 bg-[#ffffff] text-white placeholder:text-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all rounded-lg shadow-lg"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 absolute left-4 top-3.5 text-gray-400 group-focus-within:text-purple-400 transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* APP GRID OR EMPTY STATE */}
                {filteredApps.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 animate-in fade-in duration-500">
                        {filteredApps.map((app) => (
                            <Link
                                key={app.id}
                                to={`/details/${app.id}`}
                                className="card bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 group overflow-hidden rounded-2xl"
                            >
                                <figure className="aspect-square bg-gray-100 w-full overflow-hidden relative">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                </figure>

                                <div className="card-body p-5 gap-3">
                                    <div>
                                        <h2 className="text-[15px] font-bold text-slate-800 leading-tight line-clamp-2 h-10 group-hover:text-purple-600 transition-colors">
                                            {app.title}
                                        </h2>
                                        <p className="text-[11px] text-slate-400 uppercase tracking-wide font-bold mt-1">{app.companyName}</p>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto">
                                        {/* Downloads Tag */}
                                        <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-md text-[11px] font-black border border-green-100/50">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            {formatNumber(app.downloads)}
                                        </div>

                                        {/* Rating Tag */}
                                        <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded-md text-[11px] font-black border border-orange-100/50">
                                            <span className="text-xs">★</span> {app.ratingAvg}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    /* NO APP FOUND STATE */
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="bg-slate-100 p-6 rounded-full mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">No App Found</h3>
                        <p className="text-slate-500 mt-2">
                            We couldn't find any app matching "<span className="font-semibold text-slate-800">{searchQuery}</span>"
                        </p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-6 text-purple-600 font-bold hover:underline"
                        >
                            Clear search and try again
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AllApps;