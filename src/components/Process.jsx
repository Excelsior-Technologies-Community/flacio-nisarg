import React from "react";

const steps = [
  {
    id: "01",
    title: "Book Your Service",
    desc: "Choose your detailing package and schedule a time that works best for you — online or by phone.",
    color: "bg-yellow-400 text-black",
    icon: "📅",
  },
  {
    id: "02",
    title: "We Arrive or You Visit",
    desc: "Depending on your preference, bring your vehicle to us or let our mobile team come to your location.",
    color: "bg-blue-600 text-white",
    icon: "👨‍🔧",
  },
  {
    id: "03",
    title: "We Detail Your Car",
    desc: "Our trained professionals get to work — inside and out—using premium products and meticulous techniques.",
    color: "bg-yellow-400 text-black",
    icon: "🛞",
  },
  {
    id: "04",
    title: "Enjoy the Results",
    desc: "Drive away with a spotless, protected vehicle that looks and feels like new.",
    color: "bg-blue-600 text-white",
    icon: "😊",
  },
];

const Process = () => {
  return (
    <div className="bg-black text-white py-20 px-6">

      {/* TITLE */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <p className="text-yellow-400 text-sm mb-2">Our Process</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          How It Works – Simple, <br /> Transparent, Hassle-Free
        </h2>
      </div>

      {/* STEPS */}
     <div className="relative max-w-6xl mx-auto">

  {/* DOTTED LINE */}
 <div className="hidden md:block absolute top-[56px] left-0 right-0 
border-t-2 border-dashed border-gray-600 z-0"></div>

  {/* STEPS */}
  <div className="grid md:grid-cols-4 gap-10 text-center relative z-10">

    {steps.map((step, i) => (
      <div key={i} className="flex flex-col items-center">

        {/* CIRCLE */}
        <div className={`w-28 h-28 rounded-full flex items-center justify-center text-4xl ${step.color}`}>
          {step.icon}
        </div>

        {/* NUMBER */}
        <div className="bg-black text-white px-3 py-1 rounded-full mt-[-12px] text-sm">
          {step.id}
        </div>

        <h3 className="text-xl font-bold mt-4">{step.title}</h3>
        <p className="text-gray-400 text-sm mt-2 max-w-xs">
          {step.desc}
        </p>

      </div>
    ))}

  </div>
</div>

    </div>
  );
};

export default Process;