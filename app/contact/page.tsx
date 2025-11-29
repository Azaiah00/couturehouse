import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Couture House Co",
  description: "Get in touch with our team to discuss brand partnerships or modeling opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            Let's Create Something <br />
            <span className="text-gold italic">Beautiful</span>
          </h1>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Whether you're a brand looking to revolutionize your content or a model ready to monetize your influence, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10 lg:col-span-1">
            <div>
              <h3 className="text-xl font-serif font-bold mb-6 text-charcoal">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:hello@couturehouseco.com" className="text-lg font-medium hover:text-gold transition-colors">
                      hello@couturehouseco.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-gold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-lg font-medium">
                      123 Fashion Avenue, Suite 400<br />
                      New York, NY 10018
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-gold">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider mb-1">Office Hours</p>
                    <p className="text-lg font-medium">
                      Mon - Fri: 9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-charcoal text-white p-8 rounded-sm">
              <h4 className="text-lg font-serif mb-4">Newsletter</h4>
              <p className="text-neutral-400 text-sm mb-6">
                Subscribe for the latest industry insights and casting calls.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/10 border border-white/20 rounded-sm px-4 py-2 w-full text-sm focus:outline-none focus:border-gold"
                />
                <button className="bg-gold text-white px-4 py-2 rounded-sm hover:bg-gold-dark transition-colors font-medium text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
             <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

