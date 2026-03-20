import React from "react";
import { Link } from "react-router";


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
                    /* Wrap the card in a Link */
                    <Link
                        key={app.id}
                        to={`/details/${app.id}`}
                        className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition block group"
                    >
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <h3 className="text-sm font-semibold mt-3 text-gray-700 line-clamp-2 group-hover:text-purple-600 transition-colors">
                            {app.title}
                        </h3>

                        <div className="flex justify-between mt-2">
                            <span className="text-green-500 text-xs bg-green-50 px-2 py-1 rounded">
                                ⬇ {app.downloads >= 1000000000
                                    ? `${(app.downloads / 1000000000).toFixed(1)}B`
                                    : app.downloads >= 1000000
                                        ? `${Math.floor(app.downloads / 1000000)}M`
                                        : `${Math.floor(app.downloads / 1000)}K`}
                            </span>

                            <span className="text-orange-500 text-xs bg-orange-50 px-2 py-1 rounded">
                                ★ {app.ratingAvg.toFixed(1)}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center mt-10">
                {/* Updated button to be a Link to All Apps */}
                <Link
                    to="/all-apps"
                    className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-md text-sm hover:opacity-90 transition"
                >
                    Show All
                </Link>
            </div>
        </section>
    );
};

export default Trending;