"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

const testimonials = [
  {
    quote: "Couture House Co transformed our content strategy. We launched a full campaign in 3 days that would have taken 3 months traditionally.",
    author: "Sarah Jenkins",
    role: "Marketing Director, Aurum Label",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2671&auto=format&fit=crop"
  },
  {
    quote: "As a model, this platform gave me freedom. I earn consistent revenue from brand deals while traveling the world.",
    author: "Michael Chen",
    role: "Model Partner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
  },
  {
    quote: "The quality of the virtual staging is indistinguishable from a high-end editorial shoot. Absolutely revolutionary.",
    author: "Elena Rodriguez",
    role: "Creative Director, Vogue Digital",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
  }
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-8">
          {t("about.title")} <br />
          <span className="text-rose-gold italic">{t("about.titleAccent")}</span>
        </h1>
        <p className="text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed">
          {t("about.description")}
        </p>
      </section>

      {/* Image Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-7 relative h-[400px] md:h-full rounded-sm overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
              alt="Fashion Studio"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-6">
            <div className="relative h-[200px] md:h-[290px] rounded-sm overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop"
                alt="Model"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] md:h-[290px] rounded-sm overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop"
                alt="Fashion"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] md:h-[290px] col-span-2 rounded-sm overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2673&auto=format&fit=crop"
                alt="Campaign"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-24 mb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">{t("about.mission")}</h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              {t("about.missionDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-serif font-bold text-rose-gold mb-2">200+</div>
            <p className="text-neutral-500">{t("about.stats.brands")}</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif font-bold text-rose-gold mb-2">50M+</div>
            <p className="text-neutral-500">{t("about.stats.reach")}</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif font-bold text-rose-gold mb-2">10x</div>
            <p className="text-neutral-500">{t("about.stats.faster")}</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif font-bold text-rose-gold mb-2">$2M+</div>
            <p className="text-neutral-500">{t("about.stats.earnings")}</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-charcoal text-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-rose-gold text-sm uppercase tracking-[0.2em] mb-4">{t("about.socialProof")}</h2>
            <h3 className="text-4xl font-serif font-bold mb-8">{t("about.testimonials")}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-sm border border-white/10">
                <Quote className="text-rose-gold mb-4" size={32} />
                <p className="text-neutral-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-neutral-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
