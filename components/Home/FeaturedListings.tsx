import React from 'react';
import { Property } from '../../types';
import Icon from '../UI/Icon';

const listings: Property[] = [
  {
    id: 1,
    price: "$750,000",
    title: "Coastal Haven Retreat, Galveston, TX",
    location: "Galveston, TX",
    beds: "4 Beds",
    baths: "3 Baths",
    sqft: "2,800 sqft",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    imageAlt: "Beautiful coastal home with palm trees"
  },
  {
    id: 2,
    price: "$625,000",
    title: "Modern Heights Living, Houston, TX",
    location: "Houston Heights, TX",
    beds: "3 Beds",
    baths: "2.5 Baths",
    sqft: "1,950 sqft",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern contemporary home in Houston Heights"
  },
  {
    id: 3,
    price: "$1,850,000",
    title: "Memorial Luxury Estate, Houston, TX",
    location: "Memorial, Houston, TX",
    beds: "5 Beds",
    baths: "4.5 Baths",
    sqft: "4,200 sqft",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    imageAlt: "Luxury estate interior with grand staircase"
  }
];

const FeaturedListings: React.FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif-display font-bold tracking-tight text-off-white sm:text-5xl">Featured Properties</h2>
          <p className="mt-6 text-lg leading-8 text-gray-400 font-sans-body max-w-3xl mx-auto">Explore our exclusive collection of properties across Houston and the Gulf Coast.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
          {listings.map((listing) => (
            <div key={listing.id} className="group relative bg-charcoal-medium rounded-xl overflow-hidden shadow-xl border border-charcoal-light/40 transition-all duration-300 hover:shadow-3xl hover:-translate-y-1 hover:scale-[1.02]">
              <div className="relative aspect-w-16 aspect-h-9 w-full overflow-hidden lg:aspect-w-4 lg:aspect-h-3 lg:h-80">
                <img 
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                  src={listing.imageUrl} 
                  alt={listing.imageAlt} 
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-primary text-charcoal-dark font-semibold py-2 px-6 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif-display font-semibold text-primary">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {listing.price}
                  </a>
                </h3>
                <p className="mt-2 text-lg font-sans-body font-medium text-off-white">{listing.title}</p>
                <div className="mt-6 flex flex-wrap items-center justify-start gap-x-8 gap-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2"><Icon name="bed" className="text-base" /> {listing.beds}</div>
                  <div className="flex items-center gap-2"><Icon name="bathtub" className="text-base" /> {listing.baths}</div>
                  <div className="flex items-center gap-2"><Icon name="square_foot" className="text-base" /> {listing.sqft}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;