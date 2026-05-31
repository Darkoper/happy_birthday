"use client";

import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const songSrc = "/music/Tera Hone Laga Hoon Lyrical - Ajab Prem Ki Ghazab Kahani _ Atif Aslam _ Ranbir, Katrina K _ Pritam.mp3";
const songName = "Tera Hone Laga Hoon";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSongMissing, setIsSongMissing] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(songSrc);
    audioRef.current.loop = true;
    audioRef.current.addEventListener("error", () => setIsSongMissing(true));
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsSongMissing(false);
          setIsPlaying(true);
        } catch {
          setIsSongMissing(true);
          setIsPlaying(false);
        }
      }
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-4 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-rose-100 text-rose-500 hover:bg-rose-50 transition-all duration-300 group hover:scale-110"
      aria-label={`Toggle ${songName}`}
    >
      {isPlaying ? (
        <Music className="w-6 h-6 animate-pulse" />
      ) : (
        <VolumeX className="w-6 h-6" />
      )}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/80 px-3 py-1 rounded-full text-sm font-cormorant opacity-0 group-hover:opacity-100 transition-opacity">
        {isSongMissing ? "Song file missing" : isPlaying ? `Pause ${songName}` : `Play ${songName}`}
      </span>
    </motion.button>
  );
}
