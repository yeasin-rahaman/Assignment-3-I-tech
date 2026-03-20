import React from 'react';
import Trending from '../Components/Trending/Trending';
import HeroSection from '../Components/HeroSection/HeroSection';
import Stats from '../Components/STATS/Stats';

const Home = () => {
    return (
        <div>

            {/* HERO */}
            <HeroSection></HeroSection>

            {/* STATS */}
            <Stats></Stats>


            {/* TRENDING */}
            <Trending></Trending>


        </div>
    );
};

export default Home;