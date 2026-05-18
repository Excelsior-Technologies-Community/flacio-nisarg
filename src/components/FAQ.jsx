import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "How long does a full detail take?",
    a: "A full detail typically takes 2–5 hours depending on vehicle condition.",
  },
  {
    q: "What’s the difference between a car wash & a detail?",
    a: "A wash cleans the surface, while detailing deep cleans, restores and protects.",
  },
  {
    q: "How often should I get my car detailed?",
    a: "Every 3–6 months is recommended for best maintenance.",
  },
  {
    q: "What’s included in a full car detail?",
    a: "Interior cleaning, exterior wash, polishing, waxing and protection.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative text-white py-20 px-6">

      {/* BACKGROUND IMAGE */}
      <img
        src="./img/faq-bg-img.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* EMPTY LEFT (for spacing like design) */}
        <div></div>

        {/* RIGHT FAQ */}
        <div>
          <p className="text-yellow-400 mb-2">Faq’s</p>

          <h2 className="text-4xl font-bold mb-6">
            Your Most Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`border rounded-xl p-5 transition ${
                  active === i
                    ? "border-yellow-400 bg-black/60"
                    : "border-gray-700 bg-black/40"
                }`}
              >
                <div
                  onClick={() => setActive(active === i ? null : i)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="font-semibold">{item.q}</h3>
                  {active === i ? <FaMinus /> : <FaPlus />}
                </div>

                {active === i && (
                  <p className="text-gray-300 mt-3 text-sm">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQ;