import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-dark text-gray-400 border-t border-charcoal-light/30">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-sm font-sans-body font-semibold leading-6 text-off-white">Navigation</h3>
            <ul className="mt-6 space-y-4" role="list">
              <li><a className="text-sm leading-6 hover:text-primary transition-colors" href="#">Buy a Home</a></li>
              <li><a className="text-sm leading-6 hover:text-primary transition-colors" href="#">Sell Your Property</a></li>
              <li><a className="text-sm leading-6 hover:text-primary transition-colors" href="#">Rental Listings</a></li>
              <li><a className="text-sm leading-6 hover:text-primary transition-colors" href="#">Investment Opportunities</a></li>
              <li><a className="text-sm leading-6 hover:text-primary transition-colors" href="#">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-sans-body font-semibold leading-6 text-off-white">Connect</h3>
            <ul className="mt-6 space-y-4" role="list">
              <li><p className="text-sm leading-6">(713) 555-HOME</p></li>
              <li><p className="text-sm leading-6">info@premierpropertieshouston.com</p></li>
              <li><p className="text-sm leading-6">123 Market St, Houston, TX 77002</p></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-sans-body font-semibold leading-6 text-off-white">Legal</h3>
            <ul className="mt-6 space-y-4" role="list">
              <li><a className="text-sm leading-6 hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="text-sm leading-6 hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="text-sm leading-6 hover:text-primary transition-colors" href="#">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-sans-body font-semibold leading-6 text-off-white">Follow Us</h3>
            <ul className="mt-6 space-y-4" role="list">
              <li><a className="text-sm leading-6 hover:text-primary transition-colors" href="#">Instagram</a></li>
              <li><a className="text-sm leading-6 hover:text-primary transition-colors" href="#">LinkedIn</a></li>
              <li><a className="text-sm leading-6 hover:text-primary transition-colors" href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-charcoal-light/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs leading-5 text-gray-500">© 2024 Premier Properties Houston. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;