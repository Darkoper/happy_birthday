"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const seededValue = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const precise = (value: number) => Number(value.toFixed(4));

const GlowingHearts = () => {
  const hearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: precise(seededValue(i + 1) * 100),
    delay: precise(seededValue(i + 21) * 5),
    duration: precise(4 + seededValue(i + 41) * 4),
    size: precise(seededValue(i + 61) * 20 + 10),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          suppressHydrationWarning
          className="absolute bottom-[-10%]"
          initial={{ y: 0, x: 0, opacity: 0, scale: 0 }}
          animate={{
            y: -1000,
            x: Math.sin(heart.id) * 50,
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${heart.left}%` }}
        >
          <Heart 
            className="text-rose-400/50 fill-rose-300/40 drop-shadow-[0_0_10px_rgba(251,113,133,0.8)]" 
            style={{ width: heart.size, height: heart.size }} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default function FinalProposal() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden bg-gradient-to-b from-rose-50 to-pink-100">
      <GlowingHearts />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="space-y-12"
        >
          <h2 className="font-cyrano text-4xl md:text-6xl lg:text-7xl text-rose-900 font-bold leading-tight">
            You are the most beautiful <br/> chapter of my life.
          </h2>
          
          <div className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-rose-800 leading-relaxed font-medium">
            <p className="mb-4">I don&apos;t know what the future holds.</p>
            <p>But if life gives me a choice,<br/>I want every tomorrow to have you in it.</p>
          </div>
        </motion.div>

        {/* Finale Screen Triggered later in scroll */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 2, delay: 0.5 }}
          className="pt-32"
        >
          <h1 className="font-great-vibes text-6xl md:text-8xl lg:text-9xl text-rose-600 text-glow mb-8">
            Happy Birthday, <br className="md:hidden" /> Anushka <span className="inline-block animate-pulse">❤️</span>
          </h1>
          
          <p className="font-cyrano text-2xl md:text-4xl text-rose-900/80 font-bold tracking-widest uppercase mt-12">
            Thank you for existing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
