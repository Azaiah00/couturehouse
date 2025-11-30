"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ModelCard } from "@/components/ui/ModelCard";
import { useLanguage } from "@/lib/i18n/context";

const featuredModels = [
  {
    name: "Elena V.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
    followers: "125K",
    tags: ["Editorial", "Luxury"]
  },
  {
    name: "Marcus J.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
    followers: "85K",
    tags: ["Streetwear", "Lifestyle"]
  },
  {
    name: "Sophia L.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2787&auto=format&fit=crop",
    followers: "250K",
    tags: ["Beauty", "Commercial"]
  }
];

export function FeaturedModels() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-rose-gold text-sm uppercase tracking-[0.2em] mb-4">{t("featuredModels.subtitle")}</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal">{t("featuredModels.title")}</h3>
          </div>
          <Link href="/models">
            <Button variant="outline" className="hidden md:flex">{t("featuredModels.viewFull")}</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredModels.map((model) => (
            <ModelCard key={model.name} {...model} />
          ))}
        </div>

        <div className="text-center md:hidden">
          <Link href="/models">
            <Button variant="outline" className="w-full">{t("featuredModels.viewFull")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

