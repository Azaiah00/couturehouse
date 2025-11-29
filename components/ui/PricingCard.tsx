"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
}

export function PricingCard({ title, price, description, features, isPopular, ctaText = "Get Started" }: PricingCardProps) {
  return (
    <div className={cn(
      "relative p-8 bg-white border transition-all duration-300 flex flex-col h-full",
      isPopular 
        ? "border-rose-gold shadow-xl scale-105 z-10" 
        : "border-neutral-200 hover:border-rose-gold/50"
    )}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-gold text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-serif font-bold text-charcoal mb-2">{title}</h3>
        <p className="text-neutral-500 text-sm mb-6 h-10">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-charcoal">{price}</span>
          {price !== "Custom" && <span className="text-neutral-400 text-sm">/month</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-neutral-600">
            <Check className="w-4 h-4 text-rose-gold mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={isPopular ? "gold" : "outline"} 
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
}

