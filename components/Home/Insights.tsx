import React from 'react';
import { Insight } from '../../types';

const insights: Insight[] = [
  {
    id: 1,
    title: "First-Time Buyer's Guide",
    description: "Navigating your first home purchase can be daunting. Our comprehensive guide simplifies the process, from mortgage pre-approval to closing.",
    buttonText: "Read Guide"
  },
  {
    id: 2,
    title: "Houston Market Forecast 2024",
    description: "Get our latest predictions on property values, rental yields, and growth areas across Houston's dynamic real estate landscape.",
    buttonText: "View Report"
  },
  {
    id: 3,
    title: "Investing in Multi-Family Units",
    description: "Discover the benefits and strategies for investing in multi-family properties, a smart choice for passive income and portfolio diversification.",
    buttonText: "Learn More"
  }
];

const Insights: React.FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif-display font-bold tracking-tight text-off-white sm:text-5xl">Investment Insights &amp; Market Trends</h2>
          <p className="mt-6 text-lg leading-8 text-gray-400 font-sans-body max-w-3xl mx-auto">Stay informed with expert analysis, trends, and advice for smart real estate investments in Houston.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {insights.map((insight) => (
            <div key={insight.id} className="bg-charcoal-medium p-10 rounded-xl shadow-xl border border-charcoal-light/40 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif-display font-semibold text-primary">{insight.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-300 font-sans-body">{insight.description}</p>
              </div>
              <button className="mt-8 flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-charcoal-dark text-sm font-semibold leading-normal tracking-[0.015em] hover:bg-gold-accent transition-colors shadow-lg">
                <span className="truncate">{insight.buttonText}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;