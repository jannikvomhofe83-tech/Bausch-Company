import React from "react";

const serif = "'EB Garamond', Georgia, serif";

const AUDIENCES = [
  {
    label: "Geschäftsführer & Eigentümer",
    text: "Sie tragen die Verantwortung für die Zukunft des Unternehmens und müssen den Übergang strukturiert angehen.",
  },
  {
    label: "Nachfolger & designierte Führungskräfte",
    text: "Sie müssen wissen, worauf es ankommt und wie ein gelungener Übergang von Anfang an aussieht.",
  },
  {
    label: "Gesellschafter & Beiräte",
    text: "Sie begleiten den Prozess und brauchen einen klaren Überblick über die kritischen Entscheidungen.",
  },
];

export function Layout373() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(64px, 8vw, 112px) clamp(40px, 7%, 120px)",
      borderTop: "1px solid rgba(26,24,23,0.12)",
    }}>

      <div style={{ textAlign: "center", marginBottom: "clamp(48px, 7vw, 96px)" }}>
        <p style={{
          fontFamily: serif,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FF5800",
          margin: 0,
          marginBottom: "clamp(16px, 2vw, 24px)",
        }}>
          Für wen
        </p>
        <h2 style={{
          fontFamily: serif,
          fontWeight: 900,
          fontSize: "clamp(24px, 3vw, 44px)",
          lineHeight: 1.15,
          letterSpacing: "-0.025em",
          color: "#1a1817",
          margin: 0,
        }}>
          Wer sollte diese Checkliste nutzen?
        </h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(24px, 4vw, 48px)",
        borderTop: "1px solid rgba(26,24,23,0.15)",
        paddingTop: "clamp(28px, 3.5vw, 48px)",
      }}>
        {AUDIENCES.map((a) => (
          <div key={a.label}>
            <h3 style={{
              fontFamily: serif,
              fontWeight: 700,
              fontSize: "clamp(16px, 1.4vw, 22px)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: "#1a1817",
              margin: 0,
              marginBottom: "clamp(12px, 1.5vw, 20px)",
            }}>
              {a.label}
            </h3>
            <p style={{
              fontFamily: serif,
              fontSize: "clamp(13px, 1vw, 15px)",
              fontWeight: 400,
              lineHeight: 1.85,
              color: "rgba(26,24,23,0.65)",
              margin: 0,
            }}>
              {a.text}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
