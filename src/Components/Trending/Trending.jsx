import React from "react";

const Trending = ({ data }) => {
    // Slice to show only first 8 apps
    const trendingApps = data.slice(0, 8);

    return (
        <section className="py-16 px-6 bg-[#f5f6f8]">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Trending Apps</h2>
                <p className="text-gray-500 text-sm mt-2">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {trendingApps.map((app) => (
                    <div
                        key={app.id}
                        className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition"
                    >
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="text-sm font-semibold mt-3 text-gray-700 line-clamp-2">
                            {app.title}
                        </h3>

                        <div className="flex justify-between mt-2">
                            <span className="text-green-500 text-xs bg-green-50 px-2 py-1 rounded">
                                ⬇ {app.downloads >= 1000000
                                    ? `${Math.floor(app.downloads / 1000000)}M`
                                    : `${Math.floor(app.downloads / 1000)}K`}
                            </span>

                            <span className="text-orange-500 text-xs bg-orange-50 px-2 py-1 rounded">
                                ★ {app.ratingAvg.toFixed(1)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-md text-sm">
                    Show All
                </button>
            </div>
        </section>
    );
};

export default Trending;