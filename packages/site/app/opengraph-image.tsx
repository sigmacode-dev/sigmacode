import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "sigmacode — Claude Code without permission prompts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#00FF88",
            }}
          >
            Σ
          </span>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 600,
              color: "#FAFAFA",
            }}
          >
            sigmacode
          </span>
        </div>

        {/* Terminal */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            padding: "20px 32px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              color: "#888888",
              fontFamily: "monospace",
            }}
          >
            $
          </span>
          <span
            style={{
              fontSize: "24px",
              color: "#00FF88",
              fontFamily: "monospace",
            }}
          >
            npx sigmacode
          </span>
        </div>

        {/* Tagline */}
        <span
          style={{
            fontSize: "24px",
            color: "#888888",
          }}
        >
          Claude Code, without the interruptions
        </span>
      </div>
    ),
    { ...size }
  );
}
