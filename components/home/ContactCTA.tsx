"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="bg-charcoal py-32 md:py-56 site-inset border-t border-line">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center">
        <span className="eyebrow mb-8 block">Start Something</span>
        <TextReveal
          as="h2"
          className="display-heading text-white text-[clamp(3rem,10vw,10rem)] leading-[0.9] max-w-[16ch]"
        >
          Build with us.
        </TextReveal>

        <p className="text-white/60 font-sans mt-10 max-w-xl text-base md:text-lg leading-relaxed">
          For founders and brand builders ready for a connected creative engine.
        </p>

        <Link href="/contact" className="mt-12">
          <Button variant="luxury" size="lg" className="px-10 py-6 text-sm">
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 ml-3" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
