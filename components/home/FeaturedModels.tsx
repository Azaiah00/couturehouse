"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ModelCard } from "@/components/ui/ModelCard";
import { useLanguage } from "@/lib/i18n/context";

const featuredModels = [
  {
    name: "Kendal",
    image: "/kendal-profile.PNG",
    followers: "In-House Model",
    tags: ["Editorial", "Luxury"]
  },
  {
    name: "Valentina",
    image: "/new-valentina-profile.png",
    followers: "14.7K",
    tags: ["Fashion", "Lifestyle"]
  }
];

export function FeaturedModels() {
  const { t } = useLanguage();
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-rose-gold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4">{t("featuredModels.subtitle")}</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">{t("featuredModels.title")}</h3>
          </div>
          <Link href="/models" className="w-full md:w-auto">
            <Button variant="outline" className="hidden md:flex w-full md:w-auto">{t("featuredModels.viewFull")}</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-4xl mx-auto">
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

