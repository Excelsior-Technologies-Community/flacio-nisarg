import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$49",
    desc: "Perfect for regular upkeep and light cleaning.",
    features: [
      "Exterior hand wash & dry",
      "Interior vacuuming",
      "Windows cleaned inside & out",
      "Light interior wipe-down",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$79",
    desc: "Ideal for deeper cleaning and added shine",
    features: [
      "Wax application",
      "Deep interior cleaning",
      "Upholstery & carpet shampoo",
      "Dashboard & console detailing",
    ],
  },
  {
    name: "Ultimate",
    price: "$199",
    desc: "Showroom-ready finish with complete care",
    features: [
      "Engine bay cleaning",
      "Leather conditioning",
      "Paint sealant protection",
      "Headlight restoration",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="relative py-24 px-6 text-white">
      
      {/* BACKGROUND */}
      <img
        src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2070"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* TITLE */}
        <p className="text-yellow-400 text-sm mb-2">Affordable Pricing</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Transparent Pricing Plans <br />
          Exceptional Service
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, i) => (
          <div
  key={i}
  className="rounded-2xl p-8 text-left bg-black/80 
  hover:bg-blue-600 hover:scale-105 
  transition-all duration-300 cursor-pointer"
>

  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
  <p className="text-gray-400 text-sm mb-6 group-hover:text-white">
    {plan.desc}
  </p>

  <h2 className="text-4xl font-bold mb-6">
    {plan.price}
    <span className="text-sm text-gray-400"> /visit</span>
  </h2>

  {/* FEATURES */}
  <ul className="space-y-3 mb-6">
    {plan.features.map((f, idx) => (
      <li key={idx} className="flex items-center gap-2 text-sm">
        <span className="text-yellow-400">✔</span>
        {f}
      </li>
    ))}
  </ul>

  {/* BUTTON */}
  <button
    className="w-full py-3 rounded-lg font-semibold flex justify-center items-center gap-2
    bg-blue-600 hover:bg-yellow-400 hover:text-black transition duration-300"
  >
    Get started ↗
  </button>

</div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Pricing;