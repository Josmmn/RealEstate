import React from 'react';
import { Property } from '../../types';
import Icon from '../UI/Icon';

const listings: Property[] = [
  {
    id: 1,
    price: "$350,000",
    title: "Downtown Modern Condo, Houston, TX",
    location: "Houston, TX",
    beds: "1 Bed",
    baths: "1 Bath",
    sqft: "850 sqft",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTF7Ejx2ODqDhmSJX05vPW8jghTwrQ5fG__OljTOv0xiEw2Ni96uOhE3UXDVIvni1mGwEqZvyMIra3qYGT3p2LMIWEnlKVZl35pq2Eqz8gasmKYG-L49ddvukkua5EHwrp2ftBS_2JUJ2w5myYCDCuHZG1Un_IsMoLnzFClDvVsMJtVla42uwNB1bqWcOSCkskyhr8d3ffikWcCBIqYgqnzQZV9s8HmtFvWNrnseBUBgGoad091lOdar462Ar9ggz-RnTngq5P4g",
    imageAlt: "Modern condo interior with large windows and city view"
  },
  {
    id: 2,
    price: "$580,000",
    title: "The Oakwood Family Home, Houston, TX",
    location: "Houston, TX",
    beds: "4 Beds",
    baths: "2.5 Baths",
    sqft: "2,400 sqft",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBtGQSX5bIT93rTEKlSwszd_lcobxy10vnw2_j23RgfGD4NIs3K86ED130GIbT35b0JYfGdodUCQl5Crk2-03MLO3tM1tgyDs1q5P65Sbh1jiqbz_EPvH1bt8qxo95dQaPzGFz71UHtDwxnZFp0AqfQd_2e9_3gQOnutef4woLMQAARZO9mQLmx_yGVCxZYNZSAtzaRuLRUTnTQEl3ZXvLa3Gv75lNsCkHYsil-Ae8YcMVoZIp8gluu0gq1Hv1owvP-e3cqa24jw",
    imageAlt: "Charming suburban family home with a green lawn"
  },
  {
    id: 3,
    price: "$1,200,000",
    title: "The Harmony Apartments, Houston, TX",
    location: "Houston, TX",
    beds: "Multi-unit",
    baths: "8 Baths",
    sqft: "6,000 sqft",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYpXi5J-WXQd-LcrqtHdTALSD7OANT4aGdgPFNt33EHeggvPzlbCFVylggwtlubhY4XVvZWRUafKpeWaT0Br4NpfuO5ymrCQj7OaemC6W_CCx2qreyLw265RDvwnxNYOzxL7qgfAYYLRpy1V1Jtq9ahNWLO0Y6I644r6obGHxc_hPQup3nYIQpdr3juAmNK5z5YbaAZo1B3jI31sOgPRF5CzeeoBGeYflFTmT4D4A9Y0r2W_mePoOnYJWw6ndHYc3CdhNMMm7f6Q",
    imageAlt: "Multi-family apartment building exterior"
  }
];

const FeaturedListings: React.FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif-display font-bold tracking-tight text-off-white sm:text-5xl">Our Diverse Property Portfolio</h2>
          <p className="mt-6 text-lg leading-8 text-gray-400 font-sans-body max-w-3xl mx-auto">From cozy starter homes to expansive family residences and smart investment opportunities.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
          {listings.map((listing) => (
            <div key={listing.id} className="group relative bg-charcoal-medium rounded-xl overflow-hidden shadow-xl border border-charcoal-light/40 transition-all hover:shadow-3xl hover:-translate-y-1">
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden lg:aspect-w-4 lg:aspect-h-3 group-hover:opacity-90 transition-opacity lg:h-80">
                <img className="h-full w-full object-cover object-center" src={listing.imageUrl} alt={listing.imageAlt} />
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