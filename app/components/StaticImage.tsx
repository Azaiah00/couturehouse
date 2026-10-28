import type { ImgHTMLAttributes } from "react";
import manifest from "./image-manifest.json";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & { src: string; alt: string; fill?: boolean; priority?: boolean; unoptimized?: boolean };
type ImageEntry = { width: number; height: number; variants: { src: string; width: number }[] };

// Native srcset works on the static host without a runtime image optimizer.
export default function StaticImage({ src, alt, fill, priority, unoptimized: _unoptimized, style, sizes, width, height, loading, ...rest }: Props) {
  const image = (manifest as Record<string, ImageEntry>)[src];
  const fallback = image?.variants.find(item => item.width >= 960) ?? image?.variants.at(-1);
  return <img {...rest} src={fallback?.src ?? src} alt={alt}
    srcSet={image?.variants.map(item => `${item.src} ${item.width}w`).join(", ")}
    sizes={sizes ?? (fill ? "100vw" : undefined)}
    width={fill ? undefined : width ?? image?.width} height={fill ? undefined : height ?? image?.height}
    loading={priority ? "eager" : loading ?? "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async"
    style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style } : style} />;
}
