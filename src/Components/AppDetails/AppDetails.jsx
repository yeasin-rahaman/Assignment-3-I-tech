import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { toast, Toaster } from 'react-hot-toast'; // or your preferred toast library

const AppDetails = () => {
    const [isInstalled, setIsInstalled] = useState(false);

    const handleInstall = () => {
        setIsInstalled(true);
        toast.success('Application installed successfully!');
    };

    const data = [
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

                {/* SECTION 1: HEADER & APP INFO */}
                <section className="flex flex-col md:flex-row gap-8 items-start mb-12">
                    {/* App Image */}
                    <div className="w-full md:w-64 aspect-square bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center p-8">
                        <img src="/app-logo.png" alt="App Icon" className="w-full h-auto" />
                    </div>

                    {/* App Details */}
                    <div className="flex-1 space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-800">SmPlan:ToDo List With Reminder</h1>
                            <p className="text-sm text-slate-500 mt-1">
                                Developed by <span className="text-purple-600 font-medium">productive.io</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 py-4 border-y border-slate-100">
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Downloads</span>
                                <span className="text-2xl font-black text-slate-800">8M</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Average Ratings</span>
                                <span className="text-2xl font-black text-slate-800">4.9 ★</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Total Reviews</span>
                                <span className="text-2xl font-black text-slate-800">54K</span>
                            </div>
                        </div>

                        <button
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`btn btn-md px-8 h-12 rounded-lg text-white font-bold transition-all border-none
                ${isInstalled ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#00d394] hover:bg-[#00ba83] shadow-lg shadow-emerald-100'}`}
                        >
                            {isInstalled ? 'Installed' : 'Install Now (291 MB)'}
                        </button>
                    </div>
                </section>

                <hr className="border-slate-100 mb-10" />

                {/* SECTION 2: RATINGS CHART */}
                <section className="mb-12">
                    <h2 className="text-xl font-bold text-slate-800 mb-6">Ratings</h2>
                    <div className="w-full h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={data} margin={{ left: 0, right: 40 }}>
                                <XAxis type="number" hide />
                                <YAxis
                                    dataKey="star"
                                    type="category"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#64748b', fontSize: 12 }}
                                />
                                <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={24}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill="#ff8c00" />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </section>

                <hr className="border-slate-100 mb-10" />

                {/* SECTION 3: DESCRIPTION */}
                <section>
                    <h2 className="text-xl font-bold text-slate-800 mb-6">Description</h2>
                    <div className="space-y-6 text-slate-500 leading-relaxed text-sm md:text-base">
                        <p>
                            This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles.
                            Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions...
                        </p>
                        <p>
                            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific
                            Pomodoro session, making your schedule more structured...
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AppDetails;