import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-blue-600 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <p className="text-yellow-300 mb-2">Get in Touch</p>
          <h2 className="text-4xl font-bold mb-8">
            Let’s Connect Reach Out to Our Team
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Name" className="p-3 rounded-lg text-black bg-white" />
              <input placeholder="Email" className="p-3 rounded-lg text-black bg-white" />
              <input placeholder="Phone" className="p-3 rounded-lg text-black bg-white" />
              <select className="p-3 rounded-lg text-black bg-white">
                <option>Select Service</option>
              </select>
            </div>

            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-lg text-black h-32 bg-white"
            />

            <button className="w-full bg-yellow-400 text-black py-3 rounded-lg flex justify-center items-center gap-2 font-semibold hover:bg-white transition">
              Send Message
              <span className="bg-black text-white p-2 rounded-md">
                <FaArrowUpRightFromSquare />
              </span>
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src="./img/send-us-img.jpg"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Contact;