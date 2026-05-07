import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sound & Score | Couture House Co.",
  description:
    "Original soundtracks and scoring built for ads, content, and brand films. License-free for our clients.",
  alternates: { canonical: "/music" },
  openGraph: {
    title: "Sound & Score | Couture House Co.",
    description: "Original soundtracks and scoring for ads and brand films. License-free.",
    url: "/music",
  },
};

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
