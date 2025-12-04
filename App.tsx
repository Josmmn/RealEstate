import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import FeaturedListings from './components/Home/FeaturedListings';
import PropertyTypes from './components/Home/PropertyTypes';
import AgentProfile from './components/Home/AgentProfile';
import Insights from './components/Home/Insights';
import Testimonials from './components/Home/Testimonials';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedListings />
        <PropertyTypes />
        <AgentProfile />
        <Insights />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;