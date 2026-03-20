import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { toast, Toaster } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const { id } = useParams();
    const AppData = useLoaderData();
    const currentApp = AppData?.find(app => String(app.id) === String(id));

    const [isInstalled, setIsInstalled] = useState(false);

    // 1. Check if the app is already in Local Storage on page load
    useEffect(() => {
        const savedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
        const exists = savedApps.some(app => String(app.id) === String(id));
        if (exists) {
            setIsInstalled(true);
        }
    }, [id]);

    // 2. Handle Installation and Local Storage Update
    const handleInstall = () => {
        // Get existing apps or empty array
        const savedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');

        // Add current app if it's not already there
        if (!savedApps.some(app => String(app.id) === String(id))) {
            const updatedApps = [...savedApps, currentApp];
            localStorage.setItem('installedApps', JSON.stringify(updatedApps));

            setIsInstalled(true);
            toast.success(`${currentApp.title} added to your library!`);
        }
    };

    if (!currentApp) return <div className="p-20 text-center">App Not Found</div>;

    const chartData = [
        { star: '5 star', count: 11200 },
        { star: '4 star', count: 6500 },
        { star: '3 star', count: 2800 },
        { star: '2 star', count: 1800 },
        { star: '1 star', count: 900 },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans p-4 md:p-12">
            <Toaster position="top-center" />

            <main className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-slate-100">
                <section className="flex flex-col md:flex-row gap-8 items-start mb-12">
                    <div className="w-full md:w-64 aspect-square bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center p-6">
                        <img src={currentApp.image} alt={currentApp.title} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex-1 space-y-6">
                        <div>
                            <h1 className="text-3xl font-black text-slate-800">{currentApp.title}</h1>
                            <p className="text-base text-slate-500 mt-2">
                                Developed by <span className="text-[#8b5cf6] font-bold">{currentApp.companyName || 'i tech'}</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 py-6 border-y border-slate-100">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-1">Downloads</span>
                                <span className="text-2xl font-black text-slate-800">{currentApp.downloads}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-1">Rating</span>
                                <span className="text-2xl font-black text-slate-800">{currentApp.ratingAvg} ★</span>
                            </div>
                        </div>

                        <button
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`btn btn-lg px-10 h-14 rounded-xl text-white font-bold transition-all border-none normal-case text-lg
                                ${isInstalled
                                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                    : 'bg-[#00d394] hover:bg-[#00ba83] shadow-lg shadow-emerald-50 active:scale-95'
                                }`}
                        >
                            {isInstalled ? '✓ Installed' : 'Install Now'}
                        </button>
                    </div>
                </section>

                {/* CHART & DESCRIPTION SECTIONS REMAIN THE SAME */}
                <section className="mb-12">
                    <h2 className="text-xl font-black text-slate-800 mb-6">Ratings & Reviews</h2>
                    <div className="w-full h-[250px] bg-slate-50 rounded-xl p-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={chartData}>
                                <XAxis type="number" hide />
                                <YAxis dataKey="star" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
                                    {chartData.map((entry, index) => <Cell key={index} fill="#ff8c00" />)}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-black text-slate-800 mb-6">Description</h2>
                    <p className="text-slate-600 leading-relaxed">{currentApp.description}</p>
                </section>
            </main>
        </div>
    );
};

export default AppDetails;