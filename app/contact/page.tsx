"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { TextReveal } from "@/components/animations/TextReveal";

export default function ContactPage() {
  return (
    <main className="bg-charcoal min-h-screen pt-32 md:pt-40 pb-20 site-inset">
      <div className="max-w-[1600px] mx-auto">
        <div className="max-w-4xl mb-20 md:mb-28">
          <span className="eyebrow mb-6 block">Start Something</span>
          <TextReveal
            as="h1"
            className="display-heading text-white text-[clamp(3rem,9vw,9rem)] leading-[0.92]"
          >
            Tell us about<br />your brand.
          </TextReveal>
          <p className="text-white/65 max-w-xl mt-8 font-sans text-base md:text-lg leading-relaxed">
            For founders and brand builders ready for a connected creative engine.
            Send the brief — we&rsquo;ll come back with a point of view.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <aside className="lg:col-span-4 flex flex-col gap-12 border-t border-line pt-10 lg:border-t-0 lg:pt-0 lg:border-r lg:pr-12 lg:border-line">
            <Block label="Email">
              <a
                href="mailto:hello@couturehouse.co"
                className="text-white text-lg md:text-xl hover:text-white/70 transition-colors break-all"
              >
                hello@couturehouse.co
              </a>
            </Block>
            <Block label="Studio">
              <ul className="text-white text-lg md:text-xl space-y-1">
                <li>New York</li>
                <li>Paris</li>
                <li>Milan</li>
                <li>London</li>
              </ul>
            </Block>
            <Block label="Follow">
              <ul className="text-white space-y-1 font-sans text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/couturehouse.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/70 transition-colors uppercase tracking-[0.18em]"
                  >
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white/70 transition-colors uppercase tracking-[0.18em]">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white/70 transition-colors uppercase tracking-[0.18em]">
                    Twitter ↗
                  </a>
                </li>
              </ul>
            </Block>
          </aside>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-4">{label}</p>
      {children}
    </div>
  );
}
