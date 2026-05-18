import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white px-6 py-16">

      {/* ===== STATS ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center mb-16">
        
        {[
          { num: "350+", label: "Hours of Works" },
          { num: "80+", label: "Happy Customers" },
          { num: "50+", label: "Experienced Workers" },
          { num: "30+", label: "Years of Experience" },
          { num: "100%", label: "Satisfaction Rate" },
        ].map((item, i) => (
          <div key={i} className="relative">
            <h2 className="text-4xl font-bold">
              {item.num}
              <span className="text-yellow-400">+</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">{item.label}</p>

            {/* Divider */}
            {i !== 4 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-gray-700"></div>
            )}
          </div>
        ))}

      </div>

      {/* ===== ABOUT BOX ===== */}
      <div className="max-w-8xl mx-auto bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            
            <img
              src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2070"
              className="rounded-2xl h-full object-cover row-span-2"
            />

            <img
              src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2070"
              className="rounded-2xl object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070"
              className="rounded-2xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-yellow-300 text-2xl mb-2">About Us</p>

            <h2 className="text-3xl md:text-6xl font-bold leading-snug">
              Driven by Detail, <br />
              Powered by Passion
            </h2>

            <p className="text-blue-100 mt-4 text-2xl leading-relaxed">
              We believe your vehicle deserves more than just a wash — it deserves care, precision, and attention to detail. 
              With years of experience in professional auto detailing, we specialize in bringing out the best in every vehicle.
            </p>

            {/* POINTS */}
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-white">✔</span>
                Exceptional Quality with Industry-Leading Products.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white">✔</span>
                Tailored Detailing Services for Every Vehicle & Lifestyle.
              </li>
            </ul>

            {/* BUTTON */}
            <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold 
            hover:bg-black hover:text-white transition duration-300 flex items-center gap-2">
              Read more <span>↗</span>
            </button>

          </div>

        </div>

        {/* DECOR CAR (optional) */}
        <div className="absolute bottom-0 right-0 opacity-20 text-[120px]">
          🚗
        </div>

      </div>

    </div>
  );
};

export default About;