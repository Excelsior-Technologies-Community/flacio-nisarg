import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const CTA = () => {
  return (
    <div className="bg-black px-6 py-16">
      <div className="max-w-9xl  relative rounded-3xl overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="./img/cta-bg-img.jpg"
          alt=""
          className="w-full  object-cover brightness-100"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 "></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          
          <p className="text-yellow-400 text-sm mb-3 tracking-widest">
            Premium Care
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
            Elevate Your Drive with Our <br />
            Premium Detailing
          </h2>

          {/* BUTTON */}
          <button className="flex items-center gap-3 bg-blue-600 hover:bg-yellow-400 hover:text-black 
          text-white px-6 py-3 rounded-xl font-semibold transition duration-300">

            Get a free quote

            <span className="bg-black text-white p-2 rounded-md">
              <FaArrowUpRightFromSquare />
            </span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default CTA;