import { Hero } from "@/components/home/Hero";
import { Showreel } from "@/components/home/Showreel";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { MusicTeaser } from "@/components/home/MusicTeaser";
import { IndustriesMarquee } from "@/components/home/IndustriesMarquee";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Showreel />
      <ServicesGrid />
      <FeaturedWork />
      <MusicTeaser />
      <IndustriesMarquee />
      <ContactCTA />
    </div>
  );
}
