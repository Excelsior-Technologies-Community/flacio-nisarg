import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LOGO + DESC */}
        <div>
          <h2 className="text-xl font-bold mb-4">ELUXEN</h2>
          <p className="text-gray-400 text-sm mb-4">
            We specialize in premium detailing services for drivers who demand perfection.
          </p>

          <div className="flex gap-4">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        {/* NAV */}
        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Services</li>
            <li>Faq</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <p className="text-gray-400 text-sm">+61 3 8376 6284</p>
          <p className="text-gray-400 text-sm">info@eluxen.com</p>
          <p className="text-gray-400 text-sm">
            551 Swanston Street, Melbourne
          </p>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter Signup</h3>

          <div className="flex">
            <input
              placeholder="Enter Your Email"
              className="w-full p-3 rounded-l-lg text-black"
            />
            <button className="bg-yellow-400 px-4 rounded-r-lg text-black">
              <FaPaperPlane />
            </button>
          </div>

          <div className="mt-3 text-sm text-gray-400">
            <input type="checkbox" className="mr-2" />
            I agree to the Privacy Policy
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 mt-10 text-sm border-t border-gray-800 pt-6">
        Copyright © 2025 Eluxen. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;