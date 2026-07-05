import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { TwoPaths } from "@/components/home/TwoPaths";
import { Compare } from "@/components/home/Compare";
import { BookingDemo } from "@/components/home/BookingDemo";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Process } from "@/components/home/Process";
import { Stats } from "@/components/home/Stats";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <TwoPaths />
      <Compare />
      <BookingDemo />
      <CaseStudies />
      <Process />
      <Stats />
      <ClosingCTA />
      <StickyMobileCTA />
    </>
  );
}
