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

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out FlowAI",
      features: ["3 real features", "2 more real features", "1 more"],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For serious builders",
      features: ["Everything in Starter", "4 more real features", "Priority support"],
      cta: "Start Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For teams and companies",
      features: ["Everything in Pro", "Custom features", "Dedicated support"],
      cta: "Talk to Sales",
      highlighted: false,
    },
  ];

  return (
    <section
      style={{
        padding: C.sectionPad,
        background: C.bg,
        fontFamily: C.font,
        color: C.text,
        textAlign: "center",
      }}
    >
      <header style={{ marginBottom: "80px" }}>
        <p style={{ color: C.primary, fontWeight: 600, fontSize: "14px", letterSpacing: "0.1em" }}>
          PRICING
        </p>
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
          }}
        >
          Simple, transparent pricing
        </h2>
      </header>
      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              background: plan.highlighted ? C.bgAlt : C.surface,
              border: plan.highlighted
                ? `1px solid ${C.primary}`
                : `1px solid ${C.border}`,
              boxShadow: plan.highlighted ? `0 0 40px ${C.primaryGlow}` : "none",
              position: "relative",
              borderRadius: C.cardR,
              padding: "40px 36px",
              flex: 1,
              maxWidth: "360px",
            }}
          >
            {plan.highlighted && (
              <div
                style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                  padding: "4px 16px",
                  borderRadius: "100px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Most Popular
              </div>
            )}
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              {plan.name}
            </h3>
            <p style={{ color: C.textMuted, marginBottom: "24px" }}>
              {plan.description}
            </p>
            <div
              style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: C.text,
                marginBottom: "16px",
              }}
            >
              {plan.price}
              <span
                style={{
                  fontSize: "16px",
                  color: C.textMuted,
                  marginLeft: "4px",
                }}
              >
                {plan.period}
              </span>
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "24px 0 32px",
              }}
            >
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: `${C.primary}20`,
                      color: C.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ✓
                  </div>
                  <span
                    style={{
                      fontSize: "14px",
                      color: C.textMuted,
                    }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: C.btnR,
                fontWeight: 600,
                cursor: "pointer",
                border: plan.highlighted
                  ? "none"
                  : `1px solid ${C.border}`,
                background: plan.highlighted
                  ? `linear-gradient(135deg, ${C.primary}, ${C.secondary})`
                  : "transparent",
                color: plan.highlighted ? "#fff" : C.text,
                boxShadow: plan.highlighted ? C.btnShadow : "none",
              }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}