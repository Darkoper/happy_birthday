"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import DecorativeRoseImage from "./DecorativeRoseImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LoveLetter() {
  const letterRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = letterRef.current;
    if (el) {
      gsap.fromTo(el, 
        { rotationX: 45, opacity: 0, y: 100 },
        { 
          rotationX: 0, 
          opacity: 1, 
          y: 0, 
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <section id="love-letter" className="min-h-screen py-24 flex items-center justify-center px-4 relative perspective-1000">
      {/* Background elegant pattern */}
      <div className="absolute inset-0 bg-rose-50/50" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div 
        ref={letterRef}
        className="relative max-w-3xl w-full mx-auto p-8 md:p-16 paper-texture rounded-sm transform-gpu transition-shadow duration-500 hover:shadow-2xl z-10"
      >
        {/* Wax Seal */}
        <div className="absolute -top-6 -right-6 md:top-4 md:right-8 w-16 h-16 bg-rose-800 rounded-full shadow-[inset_0_-4px_8px_rgba(0,0,0,0.5),0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center transform rotate-12 z-20">
          <div className="w-12 h-12 border-2 border-rose-900/50 rounded-full flex items-center justify-center overflow-hidden">
            <span className="font-great-vibes text-3xl text-rose-300 drop-shadow-md">L</span>
          </div>
          {/* Wax drips */}
          <div className="absolute -bottom-2 right-2 w-4 h-6 bg-rose-800 rounded-full" />
          <div className="absolute -bottom-3 left-4 w-3 h-5 bg-rose-800 rounded-full" />
        </div>

        <div className="absolute inset-0 border-[1px] border-amber-900/10 m-2 md:m-4 pointer-events-none" />
        
        <div ref={textRef} className="font-great-vibes text-2xl md:text-4xl text-slate-800 leading-[1.8] tracking-wide relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, staggerChildren: 0.5 }}
          >
            <p className="mb-8 text-3xl md:text-5xl text-rose-900">My Dearest Anushka,</p>
            
            <p className="mb-6">If I had to describe what you mean to me, I don&apos;t think words would ever be enough.</p>
            
            <p className="mb-6 pl-4 md:pl-8 border-l-2 border-rose-200/50">
              You are the calm in my chaos.<br/>
              The smile behind my happiest moments.<br/>
              The comfort I look for after every difficult day.
            </p>
            
            <p className="mb-6">
              You have the kindest heart I have ever known.<br/>
              The purest soul I have ever met.<br/>
              And the most beautiful smile I have ever seen.
            </p>
            
            <p className="mb-6">
              Every day with you feels like a blessing.<br/>
              Every conversation becomes a memory.<br/>
              Every moment becomes special because you&apos;re in it.
            </p>
            
            <p className="mb-6 text-center text-rose-800">
              You don&apos;t just make my life happier.<br/>
              You make it meaningful.
            </p>
            
            <p className="mb-6">
              You are not only the most beautiful girl in my life.<br/>
              You are my favorite person.<br/>
              My safe place.<br/>
              My happiness.<br/>
              My peace.
            </p>
            
            <p className="mb-8 text-center text-3xl md:text-4xl mt-12">
              And no matter how many years pass,<br/>
              I will always choose you,<br/>
              love you,<br/>
              respect you,<br/>
              and cherish you.
            </p>
            
            <p className="mb-4 text-center text-rose-900 text-4xl md:text-5xl font-bold mt-12">Happy Birthday, my sweet Anu.</p>
            
            <p className="text-right mt-12 text-3xl md:text-4xl">
              Forever yours,<br />
              Piyush <span className="text-rose-600">(your Piyuuu)</span> <span className="text-rose-600">❤️</span>
            </p>
            
            {/* Pressed Flower Decoration */}
            <div className="absolute -bottom-8 -left-8 md:-bottom-30 md:-left-26 pointer-events-none z-20 opacity-90 rotate-270">
              <DecorativeRoseImage variant="floralCornerSpray" className="w-48 md:w-64" />
            </div>
            <div className="absolute -top-8 -right-8 md:-top-30 md:-right-26 pointer-events-none z-20 opacity-80 rotate-90">
              <DecorativeRoseImage variant="floralCornerSpray" className="w-40 md:w-56" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
