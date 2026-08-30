import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "The Operating System for Service Businesses";
  const eyebrow = searchParams.get("eyebrow") || "Bizosto";
  const logoUrl = new URL("/brand/bizosto-mark.png", req.url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #012167 0%, #1a3a8f 50%, #6692f9 100%)",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              backgroundImage: `url(${logoUrl})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.2em",
            }}
          >
            BIZOSTO
          </span>
        </div>

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 820 }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {eyebrow}
          </span>
          <p
            style={{
              fontSize: title.length > 60 ? 38 : 48,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#ffffff",
              margin: 0,
            }}
          >
            {title}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginTop: 8,
            }}
          >
            {["CRM", "Projects", "Finance", "HR", "AI Workforce"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                  padding: "4px 12px",
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #6692f9, #012167)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
