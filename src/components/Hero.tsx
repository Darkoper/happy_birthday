"use client";

import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import DecorativeRoseImage from "./DecorativeRoseImage";

const seededValue = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const precise = (value: number) => Number(value.toFixed(4));

const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: precise(seededValue(i + 1) * 100),
    delay: precise(seededValue(i + 21) * 5),
    duration: precise(3 + seededValue(i + 41) * 4),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          suppressHydrationWarning
          className="absolute bottom-[-10%]"
          initial={{ y: 0, x: 0, opacity: 0, scale: 0 }}
          animate={{
            y: -1200,
            x: Math.sin(heart.id) * 100,
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.8],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${heart.left}%` }}
        >
          <Heart className="text-white/30 fill-white/20 w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );
};

export default function Hero() {
  const [coupleLoaded, setCoupleLoaded] = useState(false);

  const scrollToLetter = () => {
    const element = document.getElementById("love-letter");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200">
      {/* Animated Background Overlay */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <FloatingHearts />
      
      {/* Decorative roses */}
      <motion.div 
        className="absolute left-[-2rem] top-16 md:left-8 md:top-12 z-20 pointer-events-none"
        initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
        animate={{ opacity: 0.95, scale: 1, rotate: -6 }}
        transition={{ duration: 1.5 }}
      >
        <DecorativeRoseImage
          variant="pinkBouquet"
          priority
          className="w-32 md:w-44 lg:w-52"
        />
      </motion.div>

      <motion.div 
        className="absolute right-[-1rem] top-20 md:right-10 md:top-14 z-20 pointer-events-none"
        initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
        animate={{ opacity: 0.74, scale: 1, rotate: 5 }}
        transition={{ duration: 1.5 }}
      >
        <DecorativeRoseImage
          variant="pinkLilyBouquet"
          priority
          className="w-28 md:w-40 lg:w-48"
        />
      </motion.div>

      <motion.div 
        className="absolute left-2 bottom-10 md:left-10 md:bottom-8 z-20 pointer-events-none"
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 0.9, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        {!coupleLoaded && (
          <div className="absolute inset-0 rounded-full bg-white/50 blur-2xl animate-pulse" />
        )}
        <Image
          src="/assets/couple-illustration.png"
          alt="Cute couple illustration"
          width={400}
          height={561}
          priority
          onLoad={() => setCoupleLoaded(true)}
          className={`relative z-10 w-24 drop-shadow-[0_22px_32px_rgba(136,19,55,0.16)] transition-all duration-700 ease-out sm:w-32 md:w-40 lg:w-48 ${
            coupleLoaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-xl"
          }`}
        />
      </motion.div>

      <motion.div 
        className="absolute right-[-1rem] bottom-16 md:right-14 md:bottom-10 z-20 pointer-events-none"
        initial={{ opacity: 0, scale: 0.9, rotate: 12 }}
        animate={{ opacity: 0.72, scale: 1, rotate: 8 }}
        transition={{ duration: 1.5 }}
      >
        <DecorativeRoseImage
          variant="redWrappedBouquet"
          priority
          className="w-28 md:w-40 lg:w-48"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-6">
        <motion.h1 
          className="font-great-vibes text-6xl md:text-8xl lg:text-9xl text-rose-600 text-glow leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Happy Birthday, <br className="md:hidden" /> Anushka <span className="inline-block animate-pulse">❤️</span>
        </motion.h1>

        <motion.p 
          className="font-cormorant text-xl md:text-3xl text-rose-950/75 leading-relaxed max-w-2xl font-medium tracking-wide"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        >
          A soft little celebration for the girl who makes every ordinary day feel beautifully rare.
        </motion.p>

        <motion.button
          onClick={scrollToLetter}
          className="group relative mt-8 px-8 py-4 bg-white/60 hover:bg-white/90 backdrop-blur-md rounded-full border border-white shadow-[0_0_20px_rgba(251,113,133,0.3)] transition-all duration-500 overflow-hidden"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6, ease: "backOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          <span className="relative flex items-center gap-3 font-cormorant text-rose-600 text-lg md:text-xl font-semibold tracking-wide">
            Open My Heart
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500 group-hover:scale-125 transition-transform duration-300" />
          </span>
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose-400 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
        onClick={scrollToLetter}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
