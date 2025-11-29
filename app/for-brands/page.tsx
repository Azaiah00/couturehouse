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
    title: "Starter Collection",
    price: "$50",
    priceNote: "per image (1-15 images)",
    examplePrice: "$500",
    exampleCount: "10 images",
    description: "Perfect for testing the waters or launching a small capsule collection.",
    features: [
      "1-15 images per order",
      "Standard turnaround (5-7 days)",
      "Professional retouching",
      "Basic usage rights"
    ],
    savings: null
  },
  {
    title: "Volume Campaign",
    price: "$45",
    priceNote: "per image (15+ images)",
    examplePrice: "$1,350",
    exampleCount: "30 images",
    description: "Ideal for full collections, seasonal campaigns, and high-volume content needs.",
    isPopular: true,
    features: [
      "15+ images per order",
      "Priority turnaround (3-5 days)",
      "Multiple model selections",
      "Commercial usage rights",
      "Bulk discount applied"
    ],
    savings: "Save $5 per image"
  },
  {
    title: "Enterprise Solution",
    price: "Custom Pricing",
    priceNote: "Volume discounts available",
    examplePrice: "Contact us",
    exampleCount: "50+ images",
    description: "Full-scale campaign management for established fashion houses and agencies.",
    features: [
      "50+ images per order",
      "Express turnaround (24-48h)",
      "Unlimited model selections",
      "Dedicated account manager",
      "Extended usage rights",
      "White-glove service"
    ],
    savings: null
  }
];

export default function ForBrandsPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6">
          Elevate Your Brand <br />
          <span className="text-rose-gold italic">With Elite Influence</span>
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
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-rose-gold mb-6 shadow-sm">
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
          <h2 className="text-rose-gold text-sm uppercase tracking-[0.2em] mb-4">Investment</h2>
          <h3 className="text-4xl font-serif font-bold text-charcoal mb-6">Flexible Pricing Packages</h3>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Pay per image with volume discounts. No monthly commitments—order exactly what you need, when you need it.
          </p>
        </div>

        {/* What's Included - All Packages */}
        <div className="max-w-5xl mx-auto mb-16 bg-gradient-to-br from-rose-gold/5 via-rose-gold/10 to-rose-gold/5 rounded-2xl p-8 md:p-12 border-2 border-rose-gold/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif font-bold text-charcoal mb-3">What's Included in Every Package</h3>
            <p className="text-neutral-600">Every image order includes these premium features at no extra cost</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-rose-gold/20 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-charcoal mb-2">Real Person Model</h4>
              <p className="text-sm text-neutral-600">Authentic models from our exclusive roster, not AI-generated</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-rose-gold/20 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h4 className="font-bold text-charcoal mb-2">Model Social Promotion</h4>
              <p className="text-sm text-neutral-600">Your model promotes your brand on their social media channels</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-rose-gold/20 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-charcoal mb-2">Couture House Post</h4>
              <p className="text-sm text-neutral-600">Featured on our official social media accounts for maximum reach</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-rose-gold/20 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h4 className="font-bold text-charcoal mb-2">Interactive Sales</h4>
              <p className="text-sm text-neutral-600">Your clothing featured on our website with direct sales integration</p>
            </div>
          </div>
        </div>

        {/* Pricing Structure Visual */}
        <div className="max-w-4xl mx-auto mb-16 bg-cream rounded-2xl p-8 md:p-12 border border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-serif font-bold text-charcoal mb-4">How It Works</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold font-bold text-lg shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal mb-1">Small Orders (1-15 images)</h5>
                    <p className="text-neutral-600 text-sm">$50 per styled image. Perfect for testing or small collections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold font-bold text-lg shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal mb-1">Volume Orders (15+ images)</h5>
                    <p className="text-neutral-600 text-sm">$45 per styled image. Save $5 per image on larger campaigns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold font-bold text-lg shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal mb-1">Enterprise (50+ images)</h5>
                    <p className="text-neutral-600 text-sm">Custom pricing with dedicated support. Contact us for a quote.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h5 className="font-bold text-charcoal mb-4 text-center">Quick Calculation</h5>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                  <span className="text-neutral-600">5 images</span>
                  <span className="font-bold text-charcoal">$250</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                  <span className="text-neutral-600">15 images</span>
                  <span className="font-bold text-charcoal">$750</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-rose-gold/30">
                  <span className="text-neutral-600">20 images</span>
                  <span className="font-bold text-rose-gold">$900</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">50 images</span>
                  <span className="font-bold text-rose-gold">$2,250</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-rose-gold/30 mt-2">
                  <span className="text-neutral-600 font-medium">100 images</span>
                  <span className="font-bold text-rose-gold text-lg">$4,500</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 mt-4 text-center italic">Volume pricing automatically applied</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {pricingTiers.map((tier) => (
            <PricingCard 
              key={tier.title} 
              title={tier.title}
              price={tier.price}
              priceNote={tier.priceNote}
              examplePrice={tier.examplePrice}
              exampleCount={tier.exampleCount}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
              savings={tier.savings}
            />
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

