"use client";

import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  priceNote?: string;
  examplePrice?: string;
  exampleCount?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  savings?: string | null;
}

export function PricingCard({ 
  title, 
  price, 
  priceNote,
  examplePrice,
  exampleCount,
  description, 
  features, 
  isPopular, 
  ctaText = "Get Started",
  savings
}: PricingCardProps) {
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
        <p className="text-neutral-500 text-sm mb-6 min-h-[2.5rem]">{description}</p>
        
        {/* Main Price Display */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-bold text-charcoal">{price}</span>
            {priceNote && (
              <span className="text-sm text-neutral-500 font-medium">{priceNote}</span>
            )}
          </div>
          {savings && (
            <div className="flex items-center gap-2 mt-2 text-sm text-rose-gold font-medium">
              <Sparkles className="w-4 h-4" />
              <span>{savings}</span>
            </div>
          )}
        </div>

        {/* Example Calculation */}
        {examplePrice && exampleCount && examplePrice !== "Contact us" && (
          <div className="bg-rose-gold/5 border border-rose-gold/20 rounded-lg p-4 mb-4">
            <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Example</p>
            <p className="text-lg font-bold text-charcoal">{exampleCount}</p>
            <p className="text-2xl font-serif text-rose-gold font-bold">{examplePrice}</p>
          </div>
        )}
        {examplePrice === "Contact us" && (
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 mb-4 text-center">
            <p className="text-sm text-neutral-600 font-medium">{examplePrice}</p>
          </div>
        )}
      </div>

      <ul className="space-y-4 mb-6 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-neutral-600">
            <Check className="w-4 h-4 text-rose-gold mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Included Features Note */}
      <div className="mb-6 p-4 bg-rose-gold/5 border border-rose-gold/20 rounded-lg">
        <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2 font-medium">Plus Included:</p>
        <p className="text-xs text-neutral-600 leading-relaxed">
          Real person model • Model social promotion • Couture House post • Interactive website sales
        </p>
      </div>

      <Button 
        variant={isPopular ? "gold" : "outline"} 
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
}

