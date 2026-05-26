import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function Header123() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(100px, 13vw, 160px) clamp(40px, 7%, 120px) clamp(80px, 10vw, 120px)",
    }}>

      {/* Label + stacked headline */}
      <div style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}>
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
          Kostenlos herunterladen
        </p>

        <h1 style={{
          fontFamily: serif,
          fontWeight: 900,
          fontSize: "clamp(36px, 5.5vw, 80px)",
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          color: "#1a1817",
          margin: 0,
        }}>
          <div>Checkliste:</div>
          <div style={{ fontStyle: "italic" }}>Erfolgreiche</div>
          <div style={{ fontStyle: "italic" }}>Nachfolge.</div>
        </h1>

        {/* Orange underline */}
        <div style={{
          width: "clamp(80px, 10vw, 140px)",
          height: 3,
          background: "#FF5800",
          marginTop: "clamp(20px, 2.5vw, 32px)",
        }} />
      </div>

      {/* Two-column body */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 6vw, 80px)",
        marginBottom: "clamp(40px, 5vw, 64px)",
      }}>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 400,
          lineHeight: 1.85,
          color: "rgba(26,24,23,0.65)",
          margin: 0,
        }}>
          Die 10 entscheidenden Fragen, die Eigentümer vor einer Führungsbesetzung
          klären müssen — strukturiert, direkt, ohne Umwege.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 400,
          lineHeight: 1.85,
          color: "rgba(26,24,23,0.65)",
          margin: 0,
        }}>
          Jede dritte Übergabe in Familienunternehmen scheitert. Nicht wegen
          fehlender Kandidaten — sondern wegen unklarer Planung. Diese Checkliste
          gibt Ihnen die Struktur, die Sie brauchen.
        </p>
      </div>

      {/* CTA button */}
      <a href="#download" style={{
        fontFamily: serif,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        textDecoration: "none",
        background: "#1a1817",
        color: "#fff",
        padding: "14px 44px",
        borderRadius: "100px",
        display: "inline-block",
      }}>
        Jetzt herunterladen
      </a>

    </section>
  );
}
