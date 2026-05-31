"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import FloralAccent from "./FloralAccent";

export default function MovieCorner() {
  return (
    <section className="relative overflow-hidden bg-[#fffafa] py-20 md:py-28">
      <FloralAccent variant="floralCornerSpray" className="left-0 top-8 w-44 rotate-[-2deg]" />
      <FloralAccent variant="redWrappedBouquet" className="right-4 bottom-10 w-36 rotate-[9deg]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[8px] border border-rose-100 bg-white/75 px-6 py-10 shadow-[0_18px_45px_rgba(225,29,72,0.10)] backdrop-blur-sm md:px-12 md:py-14"
        >
          <Heart className="mx-auto mb-6 h-12 w-12 fill-rose-200 text-rose-400" />

          <p className="mb-3 font-cormorant text-base font-semibold uppercase tracking-[0.28em] text-rose-500 md:text-lg">
            OK Jaanu note
          </p>
          <h2 className="font-cyrano text-4xl font-bold text-rose-900 md:text-6xl">
            You are always my Jaanu
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-6 font-cormorant text-xl leading-relaxed text-slate-700 md:text-2xl">
            <p>
              I love you the most, more than I can ever explain properly. You are my favorite person, my peace, and the sweetest part of my life.
            </p>
            <p className="font-semibold text-rose-800">
              Will you behave like a good GIRL?
            </p>
            <p className="font-great-vibes text-5xl leading-tight text-rose-700 md:text-7xl">
              You are always my jaanu.
            </p>
            <p className="font-cyrano text-3xl font-bold text-rose-900 md:text-5xl">
              OK JAANU?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
