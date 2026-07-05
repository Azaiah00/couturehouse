import { Monogram } from "@/components/ui/Monogram";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-7 text-center">
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="silk" />
        <div className="grain" />
      </div>
      <div className="relative z-2">
        <Monogram size={64} className="mx-auto mb-8" />
        <div className="eyebrow block">404</div>
        <h1 className="my-4 text-[clamp(36px,6vw,64px)] text-white">This chair&apos;s empty.</h1>
        <p className="mx-auto mb-8 max-w-[440px] font-display text-[19px] italic text-chrome">
          The page you&apos;re looking for isn&apos;t here — but your next salon site could be.
        </p>
        <Button href="/">Back to home →</Button>
      </div>
    </section>
  );
}
