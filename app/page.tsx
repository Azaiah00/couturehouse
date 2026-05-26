import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { PhotoGallery } from "@/components/home/PhotoGallery";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FullbleedBrandMoment } from "@/components/home/FullbleedBrandMoment";
import { BrandPartners } from "@/components/home/BrandPartners";
import { HomeReels } from "@/components/home/HomeReels";
import { DifferenceSection } from "@/components/home/DifferenceSection";
import { EpisodeWall } from "@/components/home/EpisodeWall";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Testimonials } from "@/components/home/Testimonials";
import { MusicTeaser } from "@/components/home/MusicTeaser";
import { IndustriesMarquee } from "@/components/home/IndustriesMarquee";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal">
      <Hero />
      <Manifesto />
      <BrandShowcase />
      <PhotoGallery />
      <ServicesGrid />
      <FullbleedBrandMoment />
      <BrandPartners />
      <HomeReels />
      <DifferenceSection />
      <EpisodeWall />
      <ExpertiseGrid />
      <FeaturedWork />
      <Testimonials />
      <MusicTeaser />
      <IndustriesMarquee />
      <ContactCTA />
    </div>
  );
}
