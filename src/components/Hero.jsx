import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white pb-20">

      {/* HERO TOP */}
      <div className="relative h-[90vh] flex items-center justify-center text-center px-6">
        
        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2070"
          className="absolute w-full h-full object-cover"
          alt=""
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold">
            High-Quality <br /> Car Detailing.
          </h1>

          <p className="mt-4 text-gray-300">
            Premium inside & out auto detailing services with a 100% satisfaction guarantee.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            
            {/* Blue -> Yellow */}
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
            hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Book now ↗
            </button>

            {/* Yellow -> Blue */}
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold 
            hover:bg-blue-600 hover:text-white transition-all duration-300">
              Read more ↗
            </button>

          </div>
        </div>

        {/* FLOATING CARD */}
        <div className="hidden md:block absolute right-20 bottom-[-80px] bg-blue-600 p-6 rounded-2xl w-64 shadow-lg">
          
          <div className="flex -space-x-2 mb-3">
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/46.jpg" />
          </div>

          <h2 className="text-3xl font-bold">4k+</h2>
          <p className="text-blue-100 text-sm">Happy Satisfied Clients.</p>

          <div className="mt-4 flex justify-between items-center text-sm">
            <span>Easy online booking</span>
            <button className="bg-black p-2 rounded-md">↗</button>
          </div>
        </div>

      </div>

      {/* BIG IMAGE SECTION */}
      <div className="max-w-7xl mx-auto  mt-24 relative">
        
        <img
          src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2070"
          className="rounded-2xl w-full"
          alt=""
        />

      </div>

      {/* SERVICES SECTION */}
    </div>
  );
};

export default Hero;