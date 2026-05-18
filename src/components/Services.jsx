import React from "react";

const services = [
  {
    id: "01",
    title: "Exterior Detailing",
    desc: "Shine, protect, restore paint.",
    img: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2070",
  },
  {
    id: "02",
    title: "Interior Detailing",
    desc: "Deep Clean, Fresh feel",
    img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2070",
  },
  {
    id: "03",
    title: "Engine Bay Cleaning",
    desc: "Long-lasting, high-gloss protection.",
    img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2070",
  },
  {
    id: "04",
    title: "Paint Correction",
    desc: "Eliminate swirls, restore clarity.",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white py-10 px-4">

        <div className="  mt-16 flex p-9 flex-col md:flex-row justify-between items-start gap-6">

        <div>
          <p className="text-yellow-400 text-sm">Best Services</p>
          <h2 className="text-6xl font-bold mt-2">
            Our Best Car <br /> Detailing Services.
          </h2>
        </div>

        <div className="max-w-md text-gray-400 text-xl">
          Explore our complete range of detailing solutions designed to restore,
          protect, and enhance your vehicle's finish.
        </div>

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold 
        hover:bg-blue-600 hover:text-white transition-all duration-300">
          View all ↗
        </button>

      </div>

 
      

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {services.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
          >
            
            {/* IMAGE */}
            <img
              src={item.img}
              className="w-full h-[300px] object-cover 
              group-hover:scale-110 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* BLUE HOVER OVERLAY */}
            <div className="absolute inset-0 
            bg-gradient-to-t from-blue-700/90 via-blue-500/60 to-transparent 
            opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* NUMBER */}
            <div className="absolute top-5 left-5 text-white text-xl font-bold z-10">
              {item.id}
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>

              {/* BUTTON */}
              <div className="flex justify-end mt-4">
                <button
                  className="bg-black/60 p-2 rounded-md 
                  group-hover:bg-white group-hover:text-black 
                  transition duration-300"
                >
                  ↗
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;