"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import FloralAccent from "./FloralAccent";

const events = [
  { year: "10 Feb", title: "The Day We Met", description: "The day my life quietly became softer, brighter, and a little more magical." },
  { year: "28 March", title: "The Day I Said I Love You", description: "Three words, one heartbeat, and the most honest feeling I have ever known." },
  { year: "Today", title: "Your Birthday Wish", description: "A tiny corner of the internet, made only to celebrate you." },
  { year: "Always", title: "Still Choosing You", description: "In every version of tomorrow, my answer is still you." },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <FloralAccent variant="orangeLily" className="left-8 top-14 w-36 rotate-[8deg]" />
      <FloralAccent variant="pinkLilyBouquet" className="right-8 bottom-16 w-40 rotate-[-8deg]" />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="font-cyrano text-5xl md:text-6xl text-center text-rose-900 mb-20 font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Journey
        </motion.h2>

        <div className="relative border-l-2 border-rose-200 ml-4 md:ml-1/2 md:left-1/2 md:-translate-x-1/2 space-y-16 py-8">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-4 border-white shadow-md z-10" />
                
                {/* Content Box */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative group">
                    <Heart className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'} w-5 h-5 text-rose-200 fill-rose-100 group-hover:scale-110 group-hover:fill-rose-300 transition-all`} />
                    <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-sm font-semibold rounded-full mb-3">
                      {event.year}
                    </span>
                    <h3 className="font-cyrano text-2xl text-rose-900 font-bold mb-2">{event.title}</h3>
                    <p className="font-cormorant text-lg text-gray-700">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
