import React from 'react';
import Icon from '../UI/Icon';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar-container backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl border border-charcoal-light/30 bg-[rgba(38,38,38,0.95)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="md:col-span-4">
          <label className="flex flex-col w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-14">
              <div className="text-gray-400 flex border-none bg-charcoal-light items-center justify-center pl-4 rounded-l-lg border-r-0">
                <Icon name="search" className="text-xl" />
              </div>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-off-white focus:outline-0 focus:ring-0 border-none bg-charcoal-light focus:border-none h-full placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-sans-body leading-normal" 
                placeholder="Search by Address, Neighborhood, or Zip Code" 
              />
            </div>
          </label>
        </div>
        <div className="flex gap-4 flex-wrap items-center md:col-span-3">
          <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-charcoal-light px-5 hover:bg-charcoal-light/70 transition-colors shadow-sm">
            <p className="text-sm font-sans-body font-medium text-off-white">Price Range</p>
            <Icon name="expand_more" className="text-gray-400 text-base" />
          </button>
          <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-charcoal-light px-5 hover:bg-charcoal-light/70 transition-colors shadow-sm">
            <p className="text-sm font-sans-body font-medium text-off-white">Beds</p>
            <Icon name="expand_more" className="text-gray-400 text-base" />
          </button>
          <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-charcoal-light px-5 hover:bg-charcoal-light/70 transition-colors shadow-sm">
            <p className="text-sm font-sans-body font-medium text-off-white">Baths</p>
            <Icon name="expand_more" className="text-gray-400 text-base" />
          </button>
          <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-charcoal-light px-5 hover:bg-charcoal-light/70 transition-colors shadow-sm">
            <p className="text-sm font-sans-body font-medium text-off-white">More Filters</p>
            <Icon name="tune" className="text-gray-400 text-base" />
          </button>
        </div>
        <div className="flex justify-start md:justify-end">
          <button className="flex min-w-[120px] w-full md:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 bg-primary text-charcoal-dark text-base font-semibold leading-normal tracking-[0.015em] hover:bg-gold-accent transition-colors shadow-lg">
            <span className="truncate">Find Your Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;