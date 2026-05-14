import { ImageResponse } from "next/og";

import { en } from "@/lib/i18n/dictionaries/en";
import { siteName } from "@/lib/site";

export const alt = en.meta.titleDefault;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#09090b",
          color: "#fafafa",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div style={{ fontSize: 26, fontWeight: 500, color: "#a1a1aa" }}>
          {siteName}
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 54,
            fontWeight: 600,
            letterSpacing: -1.5,
            lineHeight: 1.05,
          }}
        >
          {en.hero.titleAccent}
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 22,
            color: "#a1a1aa",
            maxWidth: 880,
            lineHeight: 1.45,
          }}
        >
          {en.hero.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
