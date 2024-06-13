import React from 'react';
import heroImage from '../assets/Hero.webp';
import Navbar from '../components/Navbar';

const HeroSection = () => {
    return (
        <section className="hero-section bg-cover bg-center h-[32rem] m-4 rounded-[3rem] text-white p-8" style={{ backgroundImage: `url(${heroImage})` }}>
            <Navbar />

            <div className="flex flex-col justify-center items-start h-full space-y-4">
                <h2 className="text-4xl font-bold">Bridging the Gap Between Earth and Space</h2>
                <p className="text-lg">Explore the wonders of space tourism with us.</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Discover More</button>
            </div>
        </section>
    );
}

export default HeroSection;
