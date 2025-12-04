import React from 'react';
import { PropertyType } from '../../types';

const types: PropertyType[] = [
  {
    id: 1,
    title: "Residential",
    description: "Homes, Condos, Townhouses",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9hlkznlN9lIsgI22PYZJfKqN8d_a4Nm_awxnbpCrkE6uiluDeKdDAmDMeB8ZzBfD4xrzBFx3kEl2tIguA0AYziU8a3XtiHI0HSqIEzy4QCVG4-SRpOxHdgQJlPZqGF7xeSGXbXtM4X_uQfSK0PXrZWwTtlyYCrryryC4ofXIO-lHgjiPLzAv12JLsAzii1gPI80hghRfMvfi90g66kZAzRF8ELQQoSeJsBl2P0lanAL6qY5jzBoHSSP7_Au_QS7fBx4OMDAIbaA",
    imageAlt: "Suburban house with a fence and backyard"
  },
  {
    id: 2,
    title: "Commercial",
    description: "Offices, Retail, Industrial",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAutXxnLI9v6Oi15zQJK-I6geUWL6Y8Vu7DTmcOpTzpZpu22-3wjqJWzUs03c9sK0JxXRUgKZSl3zlFS1lfrNRN3A2nugpkYu1PEAKzXlu3j2uH4fS1FEInggqZR69W3_AK7bGx7MjqUIcAU99HI2BRYUHq2tjtXkl7wad-TqfO5phyTdi85YxMz35QpgOofH79YubJuLfDTxyZ22Fa2yvpvCkyHpzvyQSF-sKkayYY3AdIUEjYSDKC2YBmAOCM4jAwAmIkZIDJug",
    imageAlt: "Modern office building exterior"
  },
  {
    id: 3,
    title: "Rental",
    description: "Apartments, Houses, Short-term",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6Nrq8vK2Z-qFNjMN9cVCEDk795YgyPk-KR0cYW9wtqq1PUzZJk-Bo5-2_8d0EG5TqrIYY53Ip9jkuoLEViDgAbcs38nX_g2N0HWtDTUkj3y5kVkOrXtwaVlM73Rlx8J-EN8EWESLakKTZcH29ZhikltimYn72XLGc9N4CjV6mxlStflCviQZE-v_K-Cqebt-n3uEPS_Gt68V-dYxtJz39s1Ijheef-nADoR-WFa38Trc0lO6aZbFGIqO4dLgWPqUl3A5QcKklBg",
    imageAlt: "Apartment interior with modern furniture"
  },
  {
    id: 4,
    title: "Land & Lots",
    description: "Developable land, Rural plots",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyHl-RDV7Gf7d-UikJdCmVovk1o8KnSiw4Wd7xy-bSLE2d0vFYgvUVpDR-qqiDjp_0CARHmciyyfO_ZLAwq9Bujv--vpsLx0vuZlYjiDjjqAD-eJ_FJOksKt1lUwmcUonKRyoYzXSCxv0daX-FYaSgbrYLr4P4ru-PYp6m5Wrb2ypJbj5XTCKZmTbVaoRWpGlcMTZKy7wUzhYvd-65sbySa3rEDrqm45G9AYV3S4GRQ2KKPFRkTQ83hpR3CGzpIGzkMnRUsibOpg",
    imageAlt: "Land lot with a 'For Sale' sign"
  }
];

const PropertyTypes: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-charcoal-medium border-t border-b border-charcoal-light/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif-display font-bold tracking-tight text-off-white sm:text-5xl">Explore Property Types</h2>
          <p className="mt-6 text-lg leading-8 text-gray-400 font-sans-body max-w-3xl mx-auto">Find the perfect property to match your unique needs and goals.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {types.map((type) => (
            <a key={type.id} className="group block relative rounded-xl overflow-hidden shadow-xl border border-charcoal-light/40 transition-all hover:shadow-3xl hover:-translate-y-1" href="#">
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden group-hover:opacity-90 transition-opacity">
                <img className="h-full w-full object-cover object-center" src={type.imageUrl} alt={type.imageAlt} />
              </div>
              <div className="p-6 text-center bg-charcoal-light/80 backdrop-blur-sm absolute bottom-0 left-0 right-0">
                <h3 className="text-xl font-serif-display font-semibold text-primary">{type.title}</h3>
                <p className="mt-2 text-sm font-sans-body text-gray-300">{type.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;