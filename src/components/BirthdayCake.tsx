"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import FloralAccent from "./FloralAccent";

const candles = Array.from({ length: 22 }).map((_, index) => ({
  id: index,
  delay: (index % 6) * 0.08,
}));

export default function BirthdayCake() {
  const [candlesBlown, setCandlesBlown] = useState(false);

  return (
    <section id="birthday-cake" className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50 py-20 md:py-28">
      <FloralAccent variant="pinkWrappedBouquet" className="left-4 top-16 w-36 rotate-[-8deg]" />
      <FloralAccent variant="whiteLilies" className="right-4 bottom-12 w-36 rotate-[8deg]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-cyrano text-4xl font-bold text-rose-900 md:text-6xl">
            Make a Birthday Wish
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-cormorant text-xl text-rose-800/75 md:text-2xl">
            Twenty two little candles for one very special girl.
          </p>
        </motion.div>

        <div className="relative w-full max-w-[680px]">
          <div className="mx-auto grid w-[min(92vw,620px)] grid-cols-11 gap-x-1 gap-y-3 px-4 sm:gap-x-2">
            {candles.map((candle) => (
              <div key={candle.id} className="flex h-20 items-end justify-center sm:h-24">
                <div className="relative h-14 w-3 rounded-t-full bg-gradient-to-b from-rose-100 via-white to-rose-200 shadow-sm sm:h-16 sm:w-4">
                  <span className="absolute inset-x-1 top-1 h-10 rounded-full bg-rose-300/45" />
                  {!candlesBlown ? (
                    <motion.span
                      className="absolute -top-6 left-1/2 h-7 w-4 -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-200 via-amber-400 to-rose-500 blur-[0.2px]"
                      animate={{ scale: [1, 1.16, 0.95, 1], opacity: [0.9, 1, 0.85, 0.95] }}
                      transition={{ duration: 0.8, delay: candle.delay, repeat: Infinity }}
                      style={{ borderRadius: "60% 60% 45% 45%" }}
                    />
                  ) : (
                    <motion.span
                      className="absolute -top-7 left-1/2 h-8 w-1 -translate-x-1/2 rounded-full bg-slate-300/60"
                      initial={{ opacity: 0.8, y: 0, scale: 1 }}
                      animate={{ opacity: 0, y: -22, scale: 1.8 }}
                      transition={{ duration: 1.4, delay: candle.delay }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-[-2px] w-[min(90vw,600px)]">
            <div className="h-16 rounded-t-[42px] border border-white/70 bg-gradient-to-b from-rose-100 to-pink-200 shadow-[0_18px_40px_rgba(244,63,94,0.16)] sm:h-20" />
            <div className="mx-auto h-20 w-[88%] rounded-b-[42px] border-x border-b border-rose-100 bg-gradient-to-b from-pink-200 to-rose-300 shadow-[0_20px_40px_rgba(225,29,72,0.18)] sm:h-24">
              <div className="flex h-full items-center justify-center gap-3">
                <span className="h-4 w-4 rounded-full bg-white/70" />
                <span className="font-great-vibes text-4xl text-rose-700 sm:text-5xl">22</span>
                <span className="h-4 w-4 rounded-full bg-white/70" />
              </div>
            </div>
            <div className="mx-auto h-5 w-[96%] rounded-full bg-rose-900/10 blur-sm" />
          </div>
        </div>

        <motion.button
          type="button"
          onClick={() => setCandlesBlown(true)}
          disabled={candlesBlown}
          whileHover={!candlesBlown ? { scale: 1.04 } : undefined}
          whileTap={!candlesBlown ? { scale: 0.96 } : undefined}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-white bg-white/80 px-7 py-4 font-cormorant text-lg font-semibold text-rose-700 shadow-[0_12px_30px_rgba(225,29,72,0.16)] transition hover:bg-white disabled:cursor-default disabled:text-rose-400 md:text-xl"
        >
          <Sparkles className="h-5 w-5" />
          {candlesBlown ? "Wish sent" : "Make a wish"}
        </motion.button>
      </div>
    </section>
  );
}
