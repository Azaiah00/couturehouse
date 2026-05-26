import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getWork, getWorkSlugs, works } from "@/lib/work";

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "Not Found | Couture House Co." };
  return {
    title: `${work.title} | Couture House Co.`,
    description: work.brief,
    alternates: { canonical: `/work/${work.slug}` },
    openGraph: {
      title: `${work.title} | Couture House Co.`,
      description: work.brief,
      url: `/work/${work.slug}`,
      images: [{ url: work.cover, width: 1200, height: 1500, alt: work.title }],
    },
  };
}

export default async function WorkDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const others = works.filter((w) => w.slug !== work.slug).slice(0, 3);

  return (
    <main className="bg-charcoal min-h-screen pt-32 md:pt-40 pb-20">
      <div className="max-w-[1600px] mx-auto site-inset">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-white/55 hover:text-white text-xs uppercase tracking-[0.22em] font-sans transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          All work
        </Link>

        <div className="max-w-4xl mb-16 md:mb-24">
          <span className="eyebrow mb-6 block">
            {work.category} &middot; {work.year}
          </span>
          <h1 className="display-heading text-white text-[clamp(3rem,9vw,9rem)] leading-[0.92]">
            {work.title}
          </h1>
          <p className="text-white/65 max-w-2xl mt-8 font-sans text-base md:text-lg leading-relaxed">
            {work.brief}
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-[16/10] md:aspect-[21/9] max-w-[1800px] mx-auto bg-surface mb-16 md:mb-24 overflow-hidden">
        <Image
          src={work.cover}
          alt={work.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="max-w-[1600px] mx-auto site-inset">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-24 md:mb-32">
          <div className="md:col-span-4">
            <span className="eyebrow mb-6 block">Capabilities</span>
            <ul className="space-y-2 text-white/85 font-sans text-base">
              {work.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6 text-white/75 font-sans text-base md:text-lg leading-relaxed">
            {work.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {work.videos && work.videos.length > 0 && (
          <div className="mb-24 md:mb-32">
            <span className="eyebrow mb-8 md:mb-10 block">Brand Reels</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {work.videos.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[9/16] bg-surface overflow-hidden"
                >
                  <video
                    src={src}
                    controls
                    playsInline
                    muted
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 text-white/60 text-[10px] uppercase tracking-[0.22em] font-sans bg-black/40 backdrop-blur px-2 py-1">
                    Reel {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {work.gallery && work.gallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-24 md:mb-32">
            {work.gallery.map((src, i) => (
              <div key={i} className="relative aspect-[4/5] bg-surface overflow-hidden">
                <Image
                  src={src}
                  alt={`${work.title} — image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-line pt-16">
          <div className="flex items-end justify-between mb-12 gap-8">
            <h2 className="display-heading text-white text-[clamp(2rem,4vw,4rem)] leading-[0.95]">
              More work
            </h2>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-3 text-white/70 hover:text-white text-xs uppercase tracking-[0.22em] font-sans transition-colors"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {others.map((w) => (
              <Link key={w.slug} href={`/work/${w.slug}`} className="group block">
                <div className="relative aspect-[4/5] bg-surface overflow-hidden mb-5">
                  <Image
                    src={w.cover}
                    alt={w.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-white/55 font-sans text-xs uppercase tracking-[0.22em] mb-2">
                  {w.category}
                </p>
                <h3 className="text-white text-lg md:text-xl uppercase tracking-tight">
                  {w.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
