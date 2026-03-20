import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { toast, Toaster } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const { id } = useParams();
    const AppData = useLoaderData();

    // 1. Robust filtering
    const currentApp = AppData?.find(app => String(app.id) === String(id));

    const [isInstalled, setIsInstalled] = useState(false);

    const handleInstall = () => {
        setIsInstalled(true);
        toast.success('Application installed successfully!');
    };

    // 2. Safety Check: If data is missing, show a loading or error state
    if (!currentApp) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800">App Not Found</h2>
                    <p className="text-slate-500">We couldn't find the data for ID: {id}</p>
                </div>
            </div>
        );
    }

    // Static chart data based on Figma design
    const chartData = [
        { star: '5 star', count: 11000 },
        { star: '4 star', count: 6500 },
        { star: '3 star', count: 2800 },
        { star: '2 star', count: 1800 },
        { star: '1 star', count: 900 },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans p-4 md:p-12">
            <Toaster position="top-center" />

            <main className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-10">
                {/* SECTION 1: DYNAMIC HEADER */}
                <section className="flex flex-col md:flex-row gap-8 items-start mb-12">
                    <div className="w-full md:w-64 aspect-square bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center p-8">
                        <img
                            src={currentApp.image}
                            alt={currentApp.title}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="flex-1 space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-800">{currentApp.title}</h1>
                            <p className="text-sm text-slate-500 mt-1">
                                Developed by <span className="text-purple-600 font-medium">{currentApp.developer || 'productive.io'}</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 py-4 border-y border-slate-100">
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Downloads</span>
                                <span className="text-2xl font-black text-slate-800">{currentApp.downloads || '0'}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Average Ratings</span>
                                <span className="text-2xl font-black text-slate-800">{currentApp.ratingAvg || '0'} ★</span>
                            </div>
                        </div>

                        <button
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`btn btn-md px-8 h-12 rounded-lg text-white font-bold transition-all border-none
                                ${isInstalled ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#00d394] hover:bg-[#00ba83] shadow-lg shadow-emerald-100'}`}
                        >
                            {isInstalled ? 'Installed' : `Install Now (${currentApp.size || 'N/A'})`}
                        </button>
                    </div>
                </section>

                {/* SECTION 2: DESCRIPTION */}
                <section>
                    <h2 className="text-xl font-bold text-slate-800 mb-6">Description</h2>
                    <div className="text-slate-500 leading-relaxed">
                        <p>{currentApp.description || "No description provided."}</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AppDetails;