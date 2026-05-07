import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Couture House Co. — A digital platform for the brands shaping what comes next.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            opacity: 0.55,
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span>Couture House</span>
          <span style={{ opacity: 0.4 }}>—</span>
          <span style={{ opacity: 0.4 }}>Est. 2024</span>
        </div>

        <div
          style={{
            fontSize: 132,
            lineHeight: 0.9,
            fontWeight: 500,
            letterSpacing: -3,
            textTransform: "uppercase",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>We create</span>
          <span>worlds.</span>
        </div>

        <div
          style={{
            fontSize: 22,
            opacity: 0.55,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span>A digital platform for ambitious brands.</span>
          <span style={{ letterSpacing: 4, textTransform: "uppercase", fontSize: 18 }}>couturehouse.co</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
