"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import FloralAccent from "./FloralAccent";

const reasons = [
  "The way your smile makes everything feel lighter",
  "Your soft heart and the way you care so deeply",
  "Your cute little anger that I secretly adore",
  "The comfort I feel whenever I talk to you",
  "Your laugh, because it instantly becomes my favorite sound",
  "The way you make ordinary days feel special",
  "Your honesty, even when your words are tiny and simple",
  "Your innocence and the sweetness you carry without trying",
  "The peace you bring into my messy days",
  "The way you support me and make me feel understood",
  "Your loyalty, your warmth, and your beautiful soul",
  "Because you are Anushka, and that alone is enough",
];

const HeartCard = ({ reason, index }: { reason: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((current) => !current);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative w-full aspect-square"
    >
      <button
        type="button"
        className="w-full h-full relative cursor-pointer group perspective-1000 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200 rounded-2xl"
        onClick={toggleOpen}
        aria-pressed={isOpen}
      >
        <motion.div 
          className="w-full h-full absolute inset-0 preserve-3d"
          animate={{ rotateY: isOpen ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Front of card (Heart) */}
          <div className="absolute inset-0 backface-hidden bg-rose-50 rounded-2xl shadow-md border border-rose-100 flex flex-col items-center justify-center p-4 group-hover:shadow-xl transition-shadow duration-300">
            <Heart className="w-16 h-16 text-rose-400 fill-rose-200 group-hover:scale-110 transition-transform duration-300 group-hover:fill-rose-300" />
            <p className="mt-4 font-cormorant text-rose-900 font-medium text-lg">Reason #{index + 1}</p>
            <p className="text-xs text-rose-400 mt-2 opacity-60">{isOpen ? "Click to close" : "Click to open"}</p>
          </div>

          {/* Back of card (Reason) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl shadow-lg border border-rose-200 flex flex-col items-center justify-center p-6 text-center">
            <div className="absolute top-2 right-2 text-rose-200"><Heart className="w-4 h-4 fill-current" /></div>
            <div className="absolute bottom-2 left-2 text-rose-200"><Heart className="w-4 h-4 fill-current" /></div>
            <p className="font-cyrano text-xl md:text-2xl text-rose-900 font-semibold leading-snug">
              {reason}
            </p>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
};

export default function ReasonsToLove() {
  return (
    <section className="py-24 bg-rose-50/30 relative overflow-hidden">
      <FloralAccent variant="whiteBouquet" className="left-6 top-28 w-32 rotate-[-12deg]" />
      <FloralAccent variant="whiteLilies" className="right-4 bottom-12 w-36 rotate-[8deg]" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cyrano text-4xl md:text-6xl text-rose-900 font-bold mb-4">12 Reasons Why I Love You</h2>
          <p className="font-cormorant text-xl text-rose-700 italic">Though there are millions more...</p>
          <p className="font-cormorant text-lg md:text-xl text-rose-800/75 mt-3">
            And yes, you are absolutely blessed to have a boyfriend like me.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {reasons.map((reason, index) => (
            <HeartCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
