import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Alina James",
    role: "Happy Client",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    carImg: "./img/testimonials-img.jpg",
    text: "I couldn’t believe the transformation. I brought in my SUV after a long road trip with kids, pets, and plenty of wear and tear. When I picked it up, it looked and smelled like it just came off the showroom floor.",
  },
  {
    name: "John Smith",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    carImg: "./img/testimonials-img.jpg",
    text: "Amazing service! My car looks brand new. The attention to detail is incredible and I highly recommend them.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // Prev Slide
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto Slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const data = testimonials[current];

  return (
    <div className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-yellow-400 text-sm mb-2">Testimonials</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients are <br /> Saying About Us.
          </h2>

          {/* QUOTE */}
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 p-3 rounded-full text-xl">“</div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {data.text}
            </p>
          </div>

          {/* USER */}
          <div className="flex items-center justify-between mt-6">

            <div className="flex items-center gap-3">
              <img
              
                src={data.image}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{data.name}</h4>
                <p className="text-gray-400 text-sm">{data.role}</p>

                {/* Stars */}
                <div className="text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>

            {/* ARROWS */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="border border-gray-600 p-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaArrowLeft />
              </button>

              <button
                onClick={nextSlide}
                className="border border-gray-600 p-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <FaArrowRight />
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={data.carImg}
            className="rounded-2xl w-full h-[400px] object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Testimonials;