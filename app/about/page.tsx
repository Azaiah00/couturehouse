import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Couture House Co",
  description: "We are the bridge between high-fashion brands and the world's most influential digital talent.",
};

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
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-8">
          Redefining <br />
          <span className="text-gold italic">The Industry Standard</span>
        </h1>
        <p className="text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed">
          Couture House Co was born from a simple observation: the traditional fashion content model is broken. 
          Slow, expensive, and logistically nightmare-ish. We built the solution.
        </p>
      </section>

      {/* Image Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-7 relative h-[400px] md:h-full rounded-sm overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2673&auto=format&fit=crop" 
              alt="Fashion editorial" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="md:col-span-5 flex flex-col gap-6 h-full">
            <div className="relative flex-1 h-[250px] md:h-auto rounded-sm overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop" 
                alt="Model pose" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="bg-charcoal text-white p-8 flex-1 flex flex-col justify-center rounded-sm">
              <h3 className="text-3xl font-serif mb-4 text-gold">Our Mission</h3>
              <p className="text-neutral-300 font-light leading-relaxed">
                To democratize access to high-end fashion imagery for brands while empowering models to monetize their likeness at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream py-24 mb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <h4 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-2">500+</h4>
              <p className="text-neutral-500 uppercase tracking-wider text-sm">Partner Brands</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-2">2.5M+</h4>
              <p className="text-neutral-500 uppercase tracking-wider text-sm">Reach Generated</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-2">10x</h4>
              <p className="text-neutral-500 uppercase tracking-wider text-sm">Faster Delivery</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-2">$4M+</h4>
              <p className="text-neutral-500 uppercase tracking-wider text-sm">Model Earnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm uppercase tracking-[0.2em] mb-4">Social Proof</h2>
          <h3 className="text-4xl font-serif font-bold text-charcoal">What People Are Saying</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white p-8 border border-neutral-100 hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-md group">
              <div className="mb-6 text-gold opacity-50 group-hover:opacity-100 transition-opacity">
                <Quote size={40} />
              </div>
              <p className="text-neutral-600 mb-8 leading-relaxed min-h-[100px]">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image src={item.image} alt={item.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-charcoal">{item.author}</p>
                  <p className="text-xs text-neutral-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

