import React from 'react';
import { Testimonial } from '../../types';
import Icon from '../UI/Icon';

const testimonials: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    quote: "\"As first-time homebuyers, we were nervous, but Premier Properties guided us every step of the way. Their patience and expertise made our dream of owning a home a reality!\"",
    author: "- The Chen Family"
  },
  {
    id: 2,
    stars: 5,
    quote: "\"Selling our suburban home and finding a larger one for our growing family was seamless with Premier Properties. They truly understood our needs and delivered beyond expectation.\"",
    author: "- Mr. & Mrs. Rodriguez"
  },
  {
    id: 3,
    stars: 5,
    quote: "\"Premier Properties provided invaluable insights for our investment property acquisition. Their market knowledge and negotiation skills helped us secure a fantastic deal.\"",
    author: "- Ms. Sarah Kim, Investor"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif-display font-bold tracking-tight text-off-white sm:text-5xl">Client Success Stories</h2>
          <p className="mt-6 text-lg leading-8 text-gray-400 font-sans-body max-w-3xl mx-auto">Hear how we've helped diverse clients achieve their real estate goals.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-charcoal-medium p-10 rounded-xl shadow-xl border border-charcoal-light/40 flex flex-col justify-between">
              <div>
                <div className="flex text-gold-accent text-xl">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Icon key={i} name="star" />
                  ))}
                </div>
                <blockquote className="mt-6 text-lg leading-relaxed text-gray-300 font-sans-body">{testimonial.quote}</blockquote>
              </div>
              <p className="mt-8 font-serif-display font-semibold text-off-white text-xl">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;