import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, DollarSign, Globe, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PricingCard } from "@/components/ui/PricingCard";

export const metadata: Metadata = {
  title: "For Brands | Couture House Co",
  description: "Scale your fashion brand with elite influencer marketing and virtual staging technology.",
};

const benefits = [
  { title: "No Physical Samples", desc: "Keep your inventory. We digitize everything.", icon: Layers },
  { title: "10x Faster", desc: "From concept to campaign in days, not weeks.", icon: Clock },
  { title: "Cost Effective", desc: "Fraction of traditional photoshoot costs.", icon: DollarSign },
  { title: "Global Reach", desc: "Access models across all major markets.", icon: Globe },
  { title: "Professional Quality", desc: "Magazine-grade lighting and composition.", icon: CheckCircle2 },
  { title: "Scalable", desc: "From single items to entire collections.", icon: Zap },
];

const pricingTiers = [
  {
    title: "Boutique Launch",
    price: "$997",
    description: "Perfect for emerging brands launching their first collection.",
    features: [
      "10 styled product images/month",
      "1 model selection",
      "Standard turnaround (5-7 days)",
      "Social media optimization",
      "Basic usage rights"
    ]
  },
  {
    title: "Collection Campaign",
    price: "$2,497",
    description: "Ideal for growing brands needing consistent content.",
    isPopular: true,
    features: [
      "30 styled product images/month",
      "3 model selections",
      "Priority turnaround (3-5 days)",
      "Social media + website optimization",
      "Model story posts included",
      "Commercial usage rights"
    ]
  },
  {
    title: "Luxury Partnership",
    price: "$5,997",
    description: "Full-scale campaign management for established houses.",
    features: [
      "60+ styled product images/month",
      "Unlimited model selections",
      "Express turnaround (24-48h)",
      "Full campaign package",
      "Dedicated account manager",
      "Influencer promotion guaranteed"
    ]
  }
];

export default function ForBrandsPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6">
          Elevate Your Brand <br />
          <span className="text-gold italic">With Elite Influence</span>
        </h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto mb-10">
          Skip the logistics of traditional photoshoots. We deliver high-fashion campaign content at the speed of digital.
        </p>
        <Link href="#pricing">
          <Button variant="luxury" size="lg">View Pricing Plans</Button>
        </Link>
      </section>

      {/* Benefits Grid */}
      <section className="bg-cream py-24 mb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-gold mb-6 shadow-sm">
                  <benefit.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm uppercase tracking-[0.2em] mb-4">Investment</h2>
          <h3 className="text-4xl font-serif font-bold text-charcoal">Membership Packages</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.title} {...tier} />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-neutral-500 mb-4">Need a custom enterprise solution?</p>
          <Link href="/contact">
            <Button variant="link">Contact our sales team</Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-charcoal text-white rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to Transform Your Content?</h2>
            <p className="text-neutral-300 text-lg mb-10 max-w-2xl mx-auto">
              Join the hundreds of brands using Couture House Co to scale their visual presence.
            </p>
            <Link href="/contact">
              <Button variant="gold" size="lg" className="min-w-[200px]">
                Start Partnership
              </Button>
            </Link>
          </div>
          {/* Decorative BG */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2673&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        </div>
      </section>
    </div>
  );
}

