import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "YoungMenu — Restaurant Management Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #1a1512 0%, #13110f 60%, #241813 100%)",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Amber glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 80% 20%, rgba(201,160,93,0.22), transparent 50%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 28,
            padding: "8px 20px",
            borderRadius: 999,
            border: "1px solid rgba(201,160,93,0.35)",
            background: "rgba(201,160,93,0.10)",
          }}
        >
          <span
            style={{
              fontSize: 14,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(201,160,93,0.90)",
            }}
          >
            Restaurant Management Platform
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}
        >
          YoungMenu
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.62)",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            maxWidth: 680,
            marginBottom: 48,
          }}
        >
          Counter POS · Waiter App · Kitchen Display · QR Menu
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Restaurants", "Cafes", "Home Bakers"].map((label) => (
            <div
              key={label}
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 15,
                color: "rgba(255,255,255,0.70)",
                letterSpacing: "0.06em",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Bottom-right domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 18,
            color: "rgba(201,160,93,0.65)",
            letterSpacing: "0.08em",
          }}
        >
          youngmenu.com
        </div>
      </div>
    ),
    size
  );
}
