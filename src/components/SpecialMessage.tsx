"use client";

import { motion } from "framer-motion";
import DecorativeRoseImage from "./DecorativeRoseImage";

const seededValue = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const precise = (value: number) => Number(value.toFixed(4));

const Sparkles = () => {
  const sparkles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: precise(seededValue(i + 1) * 100),
    top: precise(seededValue(i + 41) * 100),
    delay: precise(seededValue(i + 81) * 3),
    duration: precise(2 + seededValue(i + 121) * 2),
    size: precise(seededValue(i + 161) * 4 + 2),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          suppressHydrationWarning
          className="absolute rounded-full bg-gold-300 shadow-[0_0_10px_#fde047]"
          style={{ 
            left: `${sparkle.left}%`, 
            top: `${sparkle.top}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function SpecialMessage() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Dark magical background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent pointer-events-none" />
      <Sparkles />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="absolute -top-24 -left-20 opacity-60 pointer-events-none rotate-[-10deg] z-0">
          <DecorativeRoseImage variant="orangeLily" className="w-44 md:w-64" />
        </div>
        <div className="absolute -bottom-20 -right-10 opacity-55 pointer-events-none rotate-[10deg] z-0">
          <DecorativeRoseImage variant="redWrappedBouquet" className="w-36 md:w-56" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 1.5 }}
          className="font-great-vibes text-3xl md:text-5xl lg:text-6xl text-gold-400 leading-relaxed drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="mb-12"
          >
            &quot;Among billions of people,<br/>
            my heart somehow found its way to you.&quot;
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="mb-12"
          >
            &quot;And if I had the chance to choose again,<br/>
            I would still choose you.&quot;
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          >
            Every single time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
