import React from 'react';
import bannerImg from "./../../assets/hero.png"
import playStoreIcon from "./../../assets/Playstore.png"
import appStore from "./../../assets/appStore.png"
const HeroSection = () => {
    return (
        <section className="text-center pt-20 px-6 bg-[#f5f6f8]">

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                We Build <br />
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Productive
                </span>{" "}
                Apps
            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-gray-500 text-sm">
                At I Tech, we craft innovative apps designed to make everyday life simpler,
                smarter, and more exciting. Our goal is to turn your ideas into digital experiences.
            </p>

            {/* Store Buttons */}
            <div className="flex justify-center gap-4 mt-8">
                <button className="flex items-center gap-2 border px-4 py-2 rounded-md bg-white shadow-sm hover:shadow">
                    <img src={playStoreIcon} className="w-5" />
                    <span className="text-sm font-medium text-gray-800">Google Play</span>
                </button>

                <button className="flex items-center gap-2 border px-4 py-2 rounded-md bg-white shadow-sm hover:shadow">
                    <img src={appStore} className="w-5" />
                    <span className="text-sm font-medium text-gray-800">App Store</span>
                </button>
            </div>

            {/* HERO IMAGE */}
            <div className="relative flex justify-center mt-14">

                <img src={bannerImg} className="" />



            </div>
        </section>

    );
};

export default HeroSection;