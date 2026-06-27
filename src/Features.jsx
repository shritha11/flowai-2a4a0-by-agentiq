import React from 'react';
import { Zap, Globe, Shield, TrendingUp, Layers, Code } from 'lucide-react';

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

export default function Features() {
  const [hovered, setHovered] = React.useState(null);

  const cards = [
    { icon: Zap, title: "Instant Automation", body: "Automate repetitive tasks with ease." },
    { icon: Globe, title: "Cloud Integration", body: "Sync seamlessly with your favorite tools." },
    { icon: Shield, title: "Data Security", body: "Your designs are safe with us." },
    { icon: TrendingUp, title: "Boost Productivity", body: "Focus on creativity, not admin." },
    { icon: Layers, title: "Smart Layering", body: "Organize your projects intelligently." },
    { icon: Code, title: "Custom Scripts", body: "Create custom workflows with code." },
  ];

  return (
    <section
      style={{
        padding: C.sectionPad,
        background: C.bgAlt,
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            textTransform: "uppercase",
            color: C.textSubtle,
            letterSpacing: "0.1em",
            marginBottom: "12px",
          }}
        >
          WHY FLOWAI
        </div>
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: C.text,
            lineHeight: 1.2,
          }}
        >
          Work smarter, not harder
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: C.gap,
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        {cards.map((card, index) => {
          const isHovered = hovered === index;
          const isHeroCard = index === 0;

          return (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: isHovered ? C.surfaceHover : C.surface,
                border: `1px solid ${isHovered ? C.borderHover : C.border}`,
                borderRadius: C.cardR,
                padding: isHeroCard ? "48px" : C.cardPad,
                gridColumn: isHeroCard ? "span 2" : "span 1",
                transition: C.ease,
                cursor: "pointer",
                transform: isHovered ? C.lift : "none",
                boxShadow: isHovered ? C.shadow : "none",
              }}
            >
              <card.icon
                size={32}
                color={C.primary}
                style={{
                  marginBottom: "20px",
                }}
              />
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: C.text,
                  marginBottom: "8px",
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: C.textMuted,
                  lineHeight: 1.75,
                }}
              >
                {card.body}
              </div>
              {isHeroCard && (
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: C.secondary,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  10x Faster
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}