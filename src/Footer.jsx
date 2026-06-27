import React from 'react';

const C = {
  bg: "#08080f",
  bgAlt: "#0d0d18",
  surface: "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.18)",
  primary: "#7c3aed",
  primaryGlow: "rgba(124,58,237,0.25)",
  secondary: "#06b6d4",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.5)",
  textSubtle: "rgba(255,255,255,0.25)",
  heroSize: "clamp(60px, 9vw, 110px)",
  h2Size: "clamp(36px, 5vw, 64px)",
  heroWeight: 800,
  heroTracking: "-0.06em",
  heroLH: 0.92,
  font: "'Inter', system-ui, sans-serif",
  sectionPad: "140px 80px",
  maxW: "1280px",
  cardPad: "36px",
  gap: "20px",
  cardR: "20px",
  btnR: "100px",
  shadow: "0 2px 40px rgba(0,0,0,0.4)",
  glow: "0 0 60px rgba(124,58,237,0.25)",
  btnShadow: "0 8px 32px rgba(124,58,237,0.35)",
  ease: "0.25s ease",
  lift: "translateY(-4px)",
};

export default function Footer() {
  return (
    <footer
      style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: "80px 80px 40px",
        fontFamily: C.font,
        color: C.text,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "60px",
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: "240px" }}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
            }}
          >
            FlowAI
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: C.textSubtle,
              marginTop: "8px",
            }}
          >
            Automating workflows for freelance designers with cutting-edge AI.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "64px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Product
            </h3>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Features
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Pricing
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Documentation
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Integrations
            </a>
          </div>
          <div>
            <h3
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Company
            </h3>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              About Us
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Careers
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Blog
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Press
            </a>
          </div>
          <div>
            <h3
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Resources
            </h3>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Help Center
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Community
            </a>
            <a
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Tutorials
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${C.border}`,
          paddingTop: "32px",
          marginTop: "0",
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: C.textSubtle,
            margin: 0,
          }}
        >
          © 2026 FlowAI. All rights reserved.
        </p>
        <p
          style={{
            fontSize: "13px",
            color: C.textSubtle,
            margin: 0,
          }}
        >
          Built with AgentIQ
        </p>
      </div>
    </footer>
  );
}