"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import FloralAccent from "./FloralAccent";

const memories = [
  { id: 1, src: "/photos/anu-beautiful-smile.jpg", caption: "Her beautiful smile", rotation: -6 },
  { id: 2, src: "/photos/anu-favorite-person.jpg", caption: "My favorite person", rotation: 4 },
  { id: 3, src: "/photos/anu-prettiest-soul.jpg", caption: "The prettiest soul", rotation: -3 },
  { id: 4, src: "/photos/anu-comfort-place.jpg", caption: "My comfort place", rotation: 5 },
  { id: 5, src: "/photos/anu-forever-special.jpg", caption: "Forever special", rotation: -5 },
  { id: 6, src: "/photos/always-my-jaanu.png", caption: "Always my jaanu", rotation: 7 },
];

type Memory = (typeof memories)[number];

function MemoryPhoto({ memory, index }: { memory: Memory; index: number }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="overflow-hidden bg-rose-50 aspect-[4/5] relative mb-4">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-white to-pink-100 animate-pulse" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={memory.src}
        alt={memory.caption}
        loading={index < 2 ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover filter sepia-[0.2] contrast-[1.1] transition-all duration-700 ease-out group-hover:scale-110 group-hover:sepia-0 group-hover:contrast-100 ${
          isLoaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-xl"
        }`}
      />
      <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none mix-blend-overlay" />
    </div>
  );
}

export default function MemoryGallery() {
  return (
    <section className="py-24 bg-[#fffafa] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-100/50 via-transparent to-transparent pointer-events-none" />
      <FloralAccent variant="blueLily" className="left-4 bottom-10 w-32 rotate-[-8deg]" />
      <FloralAccent variant="redWrappedBouquet" className="right-8 top-16 w-36 rotate-[10deg]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="font-cyrano text-5xl md:text-6xl text-center text-rose-900 mb-20 font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Your Importance In My Life
        </motion.h2>

        <p className="mx-auto -mt-12 mb-16 max-w-3xl text-center font-cormorant text-xl leading-relaxed text-rose-800/75 md:text-2xl">
          A little gallery for the girl who matters to me more than words can ever say.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12 place-items-center">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.8, y: 50, rotate: memory.rotation * 2 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: memory.rotation }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                y: -10,
                zIndex: 40,
                transition: { duration: 0.3 },
              }}
              className="bg-white p-4 pb-6 shadow-xl rounded-sm border border-gray-100 max-w-[320px] w-full group relative cursor-pointer"
            >
              <MemoryPhoto memory={memory} index={index} />
              <p className="font-great-vibes text-2xl text-center text-gray-800 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                {memory.caption}
              </p>

              {/* Tape effect */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm border border-white/30 rotate-2 shadow-sm"
                style={{ clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0 100%)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
