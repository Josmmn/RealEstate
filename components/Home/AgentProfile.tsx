import React from 'react';

const AgentProfile: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-charcoal-medium border-t border-b border-charcoal-light/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <img 
            className="rounded-xl shadow-2xl w-full max-w-lg aspect-[4/5] object-cover object-top border border-charcoal-light/30" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMCiXmypCY_MCtxIhYYyT_AzhLOfaGCG68xJ7wqhbpXJdox1bWoR7zhUNf2GWvaT2pWOIvwzQjbZcf1-JbDhg_beEaIytoNR5D5x7-5RU8hOzi00h55icUBaiyQ2a7ajpbi-M_ew2dYEJLowrvIWvfq5ys16LoIWuyAuEp2YjqDe_q5Vc2o3LLVv0n9zSR4t6E7urUUuthq36tIqXKnL9tYR8wUgVoWRoQuLr0HZgbjcVoe_7745AA4mU9L9uGjFhwOKuvWpfv0Q" 
            alt="Professional headshot of a smiling male real estate agent in a suit." 
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-serif-display font-bold tracking-tight text-off-white sm:text-5xl">Your Dedicated Real Estate Partner</h2>
          <p className="mt-6 text-xl font-sans-body font-medium text-primary">Mr. Alexander Sterling</p>
          <p className="mt-8 text-lg leading-8 text-gray-300 font-sans-body max-w-xl mx-auto md:mx-0">
            With extensive local market knowledge and a commitment to understanding your unique goals, Alexander Sterling guides first-time buyers, growing families, and investors alike. He offers personalized support, expert advice, and a smooth journey to achieve your real estate aspirations.
          </p>
          <button className="mt-10 flex mx-auto md:mx-0 min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-charcoal-dark text-base font-semibold leading-normal tracking-[0.015em] hover:bg-gold-accent transition-colors shadow-lg">
            <span className="truncate">Meet Our Team</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgentProfile;