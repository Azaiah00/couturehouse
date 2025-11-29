import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "For Models | Couture House Co",
  description: "Join our exclusive roster of elite digital models and earn from partnerships effortlessly.",
};

export default function ForModelsPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6">
          Build Your Empire <br />
          <span className="text-rose-gold italic">Your Way</span>
        </h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto mb-10">
          Monetize your likeness 24/7. We secure premium brand partnerships while you focus on building your influence.
        </p>
        <Link href="#apply">
          <Button variant="default" size="lg">Apply to Join</Button>
        </Link>
      </section>

      {/* Image Break */}
      <section className="w-full h-[60vh] relative mb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-gold text-sm uppercase tracking-[0.2em] mb-4">Benefits</h2>
            <h3 className="text-4xl font-serif font-bold text-charcoal mb-8">Why Top Models Choose Us</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold shrink-0">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Passive Revenue</h4>
                  <p className="text-neutral-600">Earn 30-40% commission on every partnership. Our top models earn $5k+/month in passive income.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold shrink-0">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Premium Brands</h4>
                  <p className="text-neutral-600">Work with established fashion houses and emerging luxury labels without casting calls.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Portfolio Growth</h4>
                  <p className="text-neutral-600">Get professional, high-fashion content added to your portfolio regularly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream p-10 rounded-2xl border border-neutral-200">
            <h3 className="text-2xl font-serif font-bold mb-6">Requirements</h3>
            <ul className="space-y-4">
              {[
                "10k+ Authentic Social Following",
                "High-Quality Portfolio Images",
                "Consistent Engagement Rate (>2%)",
                "Professional Conduct",
                "Exclusive Rights Availability"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-neutral-700">
                  <Check className="text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-white rounded-xl border border-neutral-100">
              <p className="text-sm text-neutral-500 italic">
                "Joining Couture House Co changed my career. I tripled my monthly income without adding any extra work hours."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
                   {/* Placeholder avatar */}
                   <div className="w-full h-full bg-neutral-300" />
                </div>
                <div>
                  <p className="font-bold text-sm">Sarah M.</p>
                  <p className="text-xs text-neutral-400">Model since 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply" className="bg-charcoal text-white py-24">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Join the Elite?</h2>
            <p className="text-neutral-400 mb-10">Applications are reviewed on a rolling basis.</p>
            <Link href="/contact?type=model">
              <Button variant="gold" size="lg">Submit Application</Button>
            </Link>
         </div>
      </section>
    </div>
  );
}

