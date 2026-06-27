import React from 'react';

const C = {
  bg:           "#08080f",
  bgAlt:        "#0d0d18",
  surface:      "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border:       "rgba(255,255,255,0.08)",
  borderHover:  "rgba(255,255,255,0.18)",
  primary:      "#7c3aed",
  primaryGlow:  "rgba(124,58,237,0.25)",
  secondary:    "#06b6d4",
  text:         "#ffffff",
  textMuted:    "rgba(255,255,255,0.5)",
  textSubtle:   "rgba(255,255,255,0.25)",
  heroSize:     "clamp(60px, 9vw, 110px)",
  h2Size:       "clamp(36px, 5vw, 64px)",
  heroWeight:   800,
  heroTracking: "-0.06em",
  heroLH:       0.92,
  font:         "'Inter', system-ui, sans-serif",
  sectionPad:   "140px 80px",
  maxW:         "1280px",
  cardPad:      "36px",
  gap:          "20px",
  cardR:        "20px",
  btnR:         "100px",
  shadow:       "0 2px 40px rgba(0,0,0,0.4)",
  glow:         "0 0 60px rgba(124,58,237,0.25)",
  btnShadow:    "0 8px 32px rgba(124,58,237,0.35)",
  ease:         "0.25s ease",
  lift:         "translateY(-4px)",
};

export default function SocialProof() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Freelance Designer",
      image: "https://images.unsplash.com/photo-1597239451147-f163967b8581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHxDcmVhdGUlMjBhJTIwZnV0dXJpc3RpYyUyMEFJJTIwU2FhUyUyMHdlYnNpdGUlMjBmb3IlMjBhJTIwc3RhcnR1cCUyMGhlbHBpbmclMjBmcmVlbGFuY2UlMjBkZXNpZ25lcnMlMjBhdXRvbWF0ZSUyMHdvcmtmbG93cy4lMEQlMEElMEQlMEFTdHlsZSUzQSUwRCUwQS0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwVUklMEQlMEEtJTIwZmxvYXRpbmclMjBnbGFzc21vcnBoaXNtJTBEJTBBLSUyMGltbWVyc2l2ZSUyMGRhc2hib2FyZCUyMHByZXZpZXdzJTBEJTBBLSUyMHByZW1pdW0lMjBzdGFydHVwJTIwYnJhbmRpbmclMEQlMEEtJTIwYW5pbWF0ZWQlMjBncmFkaWVudHMlMEQlMEEtJTIwYmVsaWV2YWJsZSUyMHByb2R1Y3QlMjBVSSUwRCUwQS0lMjBsYXllcmVkJTIwc2VjdGlvbnMlMEQlMEEtJTIwYmVudG8lMjBsYXlvdXRzJTBEJTBBJTBEJTBBSW5zcGlyZWQlMjBieSUzQSUwRCUwQS0lMjBMaW5lYXIlMEQlMEEtJTIwUmF5Y2FzdCUwRCUwQS0lMjBTdHJpcGUlMEQlMEEtJTIwVmVyY2VsfGVufDB8fHx8MTc4MjQwNjQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "FlowAI has completely transformed how I manage my projects. The automation tools are a game changer!",
    },
    {
      name: "Samantha Lee",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1630514969818-94aefc42ec47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHxDcmVhdGUlMjBhJTIwZnV0dXJpc3RpYyUyMEFJJTIwU2FhUyUyMHdlYnNpdGUlMjBmb3IlMjBhJTIwc3RhcnR1cCUyMGhlbHBpbmclMjBmcmVlbGFuY2UlMjBkZXNpZ25lcnMlMjBhdXRvbWF0ZSUyMHdvcmtmbG93cy4lMEQlMEElMEQlMEFTdHlsZSUzQSUwRCUwQS0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwVUklMEQlMEEtJTIwZmxvYXRpbmclMjBnbGFzc21vcnBoaXNtJTBEJTBBLSUyMGltbWVyc2l2ZSUyMGRhc2hib2FyZCUyMHByZXZpZXdzJTBEJTBBLSUyMHByZW1pdW0lMjBzdGFydHVwJTIwYnJhbmRpbmclMEQlMEEtJTIwYW5pbWF0ZWQlMjBncmFkaWVudHMlMEQlMEEtJTIwYmVsaWV2YWJsZSUyMHByb2R1Y3QlMjBVSSUwRCUwQS0lMjBsYXllcmVkJTIwc2VjdGlvbnMlMEQlMEEtJTIwYmVudG8lMjBsYXlvdXRzJTBEJTBBJTBEJTBBSW5zcGlyZWQlMjBieSUzQSUwRCUwQS0lMjBMaW5lYXIlMEQlMEEtJTIwUmF5Y2FzdCUwRCUwQS0lMjBTdHJpcGUlMEQlMEEtJTIwVmVyY2VsfGVufDB8fHx8MTc4MjQwNjQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "I can now focus on the creative aspects of my work while FlowAI handles the repetitive tasks seamlessly.",
    },
    {
      name: "Michael Rivera",
      role: "UI/UX Consultant",
      image: "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHxDcmVhdGUlMjBhJTIwZnV0dXJpc3RpYyUyMEFJJTIwU2FhUyUyMHdlYnNpdGUlMjBmb3IlMjBhJTIwc3RhcnR1cCUyMGhlbHBpbmclMjBmcmVlbGFuY2UlMjBkZXNpZ25lcnMlMjBhdXRvbWF0ZSUyMHdvcmtmbG93cy4lMEQlMEElMEQlMEFTdHlsZSUzQSUwRCUwQS0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwVUklMEQlMEEtJTIwZmxvYXRpbmclMjBnbGFzc21vcnBoaXNtJTBEJTBBLSUyMGltbWVyc2l2ZSUyMGRhc2hib2FyZCUyMHByZXZpZXdzJTBEJTBBLSUyMHByZW1pdW0lMjBzdGFydHVwJTIwYnJhbmRpbmclMEQlMEEtJTIwYW5pbWF0ZWQlMjBncmFkaWVudHMlMEQlMEEtJTIwYmVsaWV2YWJsZSUyMHByb2R1Y3QlMjBVSSUwRCUwQS0lMjBsYXllcmVkJTIwc2VjdGlvbnMlMEQlMEEtJTIwYmVudG8lMjBsYXlvdXRzJTBEJTBBJTBEJTBBSW5zcGlyZWQlMjBieSUzQSUwRCUwQS0lMjBMaW5lYXIlMEQlMEEtJTIwUmF5Y2FzdCUwRCUwQS0lMjBTdHJpcGUlMEQlMEEtJTIwVmVyY2VsfGVufDB8fHx8MTc4MjQwNjQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "The intuitive dashboard and automation features have saved me countless hours every week.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: C.bgAlt,
        padding: C.sectionPad,
        textAlign: "center",
        color: C.text,
      }}
    >
      <h2
        style={{
          fontSize: C.h2Size,
          fontWeight: C.heroWeight,
          marginBottom: C.gap,
        }}
      >
        Trusted by Designers Worldwide
      </h2>
      <p
        style={{
          color: C.textMuted,
          marginBottom: C.gap,
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Hear what industry-leading designers have to say about how FlowAI has
        revolutionized their workflows.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: C.gap,
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              backgroundColor: C.surface,
              borderRadius: C.cardR,
              padding: C.cardPad,
              boxShadow: C.shadow,
              transition: C.ease,
            }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                marginBottom: C.gap,
                objectFit: "cover",
              }}
            />
            <p
              style={{
                color: C.textMuted,
                fontStyle: "italic",
                marginBottom: C.gap,
              }}
            >
              "{testimonial.quote}"
            </p>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "4px",
              }}
            >
              {testimonial.name}
            </h3>
            <p style={{ color: C.textSubtle, fontSize: "14px" }}>
              {testimonial.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}