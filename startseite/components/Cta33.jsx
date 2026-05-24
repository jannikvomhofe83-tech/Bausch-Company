import React, { useState } from "react";
import { Link } from "react-router-dom";

const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";

function PrimaryButton({ to, label }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: sans, fontSize: 13, fontWeight: 700,
        letterSpacing: "0.06em", textTransform: "uppercase",
        color: "#fff", textDecoration: "none",
        background: hover ? "#005530" : "#00693C",
        padding: "16px 36px", borderRadius: 4,
        display: "inline-block",
        transition: "background 0.2s ease",
      }}
    >
      {label}
    </Link>
  );
}

function SecondaryButton({ to, label }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: sans, fontSize: 13, fontWeight: 700,
        letterSpacing: "0.06em", textTransform: "uppercase",
        color: hover ? "#00693C" : "#1a1817", textDecoration: "none",
        background: "transparent",
        padding: "15px 36px", borderRadius: 4,
        display: "inline-block",
        border: `1.5px solid ${hover ? "#00693C" : "rgba(26,24,23,0.25)"}`,
        transition: "color 0.2s ease, border-color 0.2s ease",
      }}
    >
      {label}
    </Link>
  );
}

export function Cta33() {
  return (
    <section style={{
      padding: "clamp(72px, 10vw, 140px) clamp(40px, 7%, 120px)",
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: sans, fontSize: 11, fontWeight: 700,
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: "#00693C", marginBottom: 24,
      }}>
        Erstgespräch
      </p>

      <h2 style={{
        fontFamily: sans, fontWeight: 900,
        fontSize: "clamp(32px, 5vw, 72px)",
        lineHeight: 1.0, letterSpacing: "-0.03em",
        color: "#1a1817",
        marginBottom: "clamp(16px, 2vw, 24px)",
      }}>
        Lassen Sie uns sprechen.
      </h2>

      <p style={{
        fontFamily: sans, fontSize: "clamp(14px, 1.1vw, 17px)",
        fontWeight: 400, color: "rgba(26,24,23,0.55)",
        lineHeight: 1.65, maxWidth: 480,
        margin: "0 auto clamp(36px, 5vw, 56px)",
      }}>
        Ein Erstgespräch kostet Sie nichts und verpflichtet Sie zu nichts.
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <PrimaryButton to="/kontakt" label="Termin buchen" />
        <SecondaryButton to="/lead-magnet" label="Checkliste herunterladen" />
      </div>
    </section>
  );
}
