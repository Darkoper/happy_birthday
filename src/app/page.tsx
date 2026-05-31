import Hero from "@/components/Hero";
import LoveLetter from "@/components/LoveLetter";
import MemoryGallery from "@/components/MemoryGallery";
import ReasonsToLove from "@/components/ReasonsToLove";
import Timeline from "@/components/Timeline";
import BirthdayCake from "@/components/BirthdayCake";
import MovieCorner from "@/components/MovieCorner";
import SpecialMessage from "@/components/SpecialMessage";
import FinalProposal from "@/components/FinalProposal";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-rose-200 selection:text-rose-900 font-sans relative">
      <MusicPlayer />
      <Hero />
      <LoveLetter />
      <MemoryGallery />
      <ReasonsToLove />
      <Timeline />
      <MovieCorner />
      <BirthdayCake />
      <SpecialMessage />
      <FinalProposal />
    </main>
  );
}
