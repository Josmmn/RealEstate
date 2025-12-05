import React from 'react';
import Icon from '../UI/Icon';

const AgentProfile: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-charcoal-medium border-t border-b border-charcoal-light/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <img
            className="rounded-xl shadow-2xl w-full max-w-lg aspect-[4/5] object-cover object-top border border-charcoal-light/30"
            src="Pictures/realtor.webp"
            alt="Professional headshot of Sarah Mitchell"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-serif-display font-bold tracking-tight text-off-white sm:text-5xl">Your Dedicated Real Estate Partner</h2>
          
          <div className="mt-6 flex flex-col items-center md:items-start">
             <h3 className="text-2xl font-sans-body font-medium text-primary">Sarah Mitchell</h3>
             <div className="flex items-center gap-2 mt-2">
                <div className="flex text-gold-accent text-sm">
                  <Icon name="star" className="text-lg" />
                  <Icon name="star" className="text-lg" />
                  <Icon name="star" className="text-lg" />
                  <Icon name="star" className="text-lg" />
                  <Icon name="star" className="text-lg" />
                </div>
                <span className="text-gray-400 text-sm font-sans-body">5.0 Client Rating</span>
             </div>
          </div>

          <p className="mt-8 text-lg leading-8 text-gray-300 font-sans-body max-w-xl mx-auto md:mx-0">
            Sarah Mitchell is a dedicated real estate professional with over 12 years of experience serving the Houston metropolitan area. Known for her personalized approach and deep market expertise, she helps buyers and sellers navigate the real estate journey with confidence. Whether you're searching for your dream home or looking to sell, Sarah is committed to delivering exceptional results tailored to your unique needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <a
                href="#contact"
                className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-charcoal-dark text-base font-semibold leading-normal tracking-[0.015em] hover:bg-gold-accent transition-colors shadow-lg"
             >
                <span className="truncate">View Profile</span>
             </a>
             <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-charcoal-light text-off-white text-base font-semibold leading-normal tracking-[0.015em] hover:bg-charcoal-light/80 transition-colors shadow-lg border border-charcoal-light/50">
                <span className="truncate">Contact Sarah</span>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentProfile;