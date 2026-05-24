import React, { useState } from "react";
import { Link } from "react-router-dom";

const sans = "'EB Garamond', Georgia, serif";

function PillLink({ to, label, hover, onEnter, onLeave }) {
  return (
    <Link
      to={to}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        fontFamily: sans,
        fontSize: "clamp(12px, 0.9vw, 14px)",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        textDecoration: "none",
        color: hover ? "#1a1817" : "#fff",
        background: hover ? "#fff" : "transparent",
        padding: "clamp(18px, 1.8vw, 22px) clamp(32px, 3.2vw, 48px)",
        borderRadius: 100,
        display: "inline-block",
        transition: "background 0.2s ease, color 0.2s ease",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </Link>
  );
}

export function Cta33() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <section style={{
      padding: "clamp(100px, 14vw, 180px) clamp(40px, 7%, 120px)",
      textAlign: "center",
    }}>

      {/* Eyebrow label */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        marginBottom: "clamp(28px, 3.5vw, 44px)",
      }}>
        <div style={{ width: 36, height: 1, background: "#00693C" }} />
        <span style={{
          fontFamily: sans,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#00693C",
        }}>
          Erster Schritt
        </span>
        <div style={{ width: 36, height: 1, background: "#00693C" }} />
      </div>

      <h2 style={{
        fontFamily: sans,
        fontWeight: 900,
        lineHeight: 0.92,
        letterSpacing: "-0.04em",
        margin: "0 auto clamp(28px, 3.5vw, 44px)",
      }}>
        <span style={{ fontSize: "clamp(28px, 3.2vw, 44px)", color: "#FF5800" }}>
          Kostenlose{" "}
        </span>
        <span style={{ fontSize: "clamp(28px, 3.2vw, 44px)", color: "#00693C" }}>
          Checkliste.
        </span>
      </h2>

      {/* Ornament: small circle between headline and text */}
      <div style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        border: "1.5px solid #FF5800",
        margin: "0 auto clamp(28px, 3.5vw, 44px)",
      }} />

      <p style={{
        fontFamily: sans,
        fontSize: "clamp(20px, 2.2vw, 30px)",
        fontWeight: 400,
        color: "rgba(26,24,23,0.62)",
        lineHeight: 1.65,
        maxWidth: 760,
        margin: "0 auto clamp(52px, 7vw, 88px)",
      }}>
        Laden Sie unsere Checkliste herunter und gewinnen Sie eine erste Einschätzung Ihrer Situation — kostenlos und unverbindlich. Sie erhalten konkrete Fragen, die Sie stellen sollten, bevor Sie eine Führungsposition besetzen oder eine Nachfolge einleiten. Oder sprechen Sie direkt mit uns.
      </p>

      <div style={{
        display: "inline-flex",
        alignItems: "center",
        background: "#1a1817",
        borderRadius: 100,
        padding: 7,
        gap: 4,
      }}>
        <PillLink
          to="/lead-magnet"
          label="Checkliste herunterladen"
          hover={hover1}
          onEnter={() => setHover1(true)}
          onLeave={() => setHover1(false)}
        />
        <PillLink
          to="/kontakt"
          label="Termin buchen"
          hover={hover2}
          onEnter={() => setHover2(true)}
          onLeave={() => setHover2(false)}
        />
      </div>

    </section>
  );
}
