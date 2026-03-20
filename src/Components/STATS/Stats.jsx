import React from 'react';

const Stats = () => {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 text-center">

            <h2 className="text-2xl font-semibold mb-10">
                Trusted By Millions, Built For You
            </h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

                <div>
                    <p className="text-sm opacity-80">Total Downloads</p>
                    <h3 className="text-5xl font-bold mt-2">29.6M</h3>
                    <p className="text-xs opacity-80 mt-1">21% More Than Last Month</p>
                </div>

                <div>
                    <p className="text-sm opacity-80">Total Reviews</p>
                    <h3 className="text-5xl font-bold mt-2">906K</h3>
                    <p className="text-xs opacity-80 mt-1">46% More Than Last Month</p>
                </div>

                <div>
                    <p className="text-sm opacity-80">Active Apps</p>
                    <h3 className="text-5xl font-bold mt-2">132+</h3>
                    <p className="text-xs opacity-80 mt-1">31 More Will Launch</p>
                </div>

            </div>
        </section>
    );
};

export default Stats;