import { Hero } from "@/components/home/Hero";
import { ValueProposition } from "@/components/home/ValueProposition";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedModels } from "@/components/home/FeaturedModels";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <FeaturedModels />
    </>
  );
}
