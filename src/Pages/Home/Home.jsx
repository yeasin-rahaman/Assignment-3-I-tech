import Trending from '../../Components/Trending/Trending';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Stats from '../../Components/STATS/Stats';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()
    console.log(data);
    return (
        <div>

            {/* HERO */}
            <HeroSection></HeroSection>

            {/* STATS */}
            <Stats></Stats>

            {/* TRENDING */}
            <Trending data={data}></Trending>


        </div>
    );
};

export default Home;