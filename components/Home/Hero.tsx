import React from 'react';
import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(16, 16, 16, 0.6) 0%, rgba(16, 16, 16, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCv0hU07YWIuxql3qPrnFpmgLPY02MMytX7Sd8SEzhfGrNZbMoaVKPxpyT_0Je1s9Zzot7_RY8_bO7eylzfDePE9k3SwfO18-Spko-HhYgdhOf4f9jZyyz9aeNXmJyluzV_tE2ltuWKv32hsdEEr8yWVAk57oM04tbCTrMjNqLKHm8ceA9f9Ya_kQ1wKm2fxT1A171kpf6IP0WRpgAHkt6c8hHbRmdbkkjQlD41abY0ByEe4zgCaddUlgmihuwdK0rcBxtVmkX9aw")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <div className="relative" style={heroStyle}>
        <div className="flex min-h-[640px] flex-col gap-8 items-center justify-center p-4">
          <div className="flex flex-col gap-6 text-center max-w-4xl px-4 pt-16 lg:pt-24">
            <h1 className="text-off-white text-5xl md:text-7xl font-serif-display font-bold leading-tight tracking-[-0.033em]">
              Your Gateway to Houston Real Estate
            </h1>
            <h2 className="text-gray-300 text-lg md:text-xl font-sans-body font-light leading-relaxed max-w-2xl mx-auto">
              Discover a diverse range of properties, from starter homes to investment opportunities, tailored to every journey.
            </h2>
          </div>
        </div>
      </div>
      <div className="relative -mt-20 lg:-mt-16 max-w-6xl mx-auto px-4 z-10">
        <SearchBar />
      </div>
    </>
  );
};

export default Hero;