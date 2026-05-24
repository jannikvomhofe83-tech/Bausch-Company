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
        fontSize: "clamp(13px, 1vw, 15px)",
        fontWeight: 500,
        letterSpacing: "0.04em",
        textDecoration: "none",
        color: hover ? "#1a1817" : "#fff",
        background: hover ? "#fff" : "transparent",
        padding: "clamp(16px, 1.6vw, 22px) clamp(28px, 3vw, 48px)",
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

export function Header123() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <section style={{
      background: "#f7f4ef",
      padding: "clamp(140px, 18vw, 220px) clamp(40px, 7%, 120px) clamp(120px, 16vw, 180px)",
      textAlign: "center",
    }}>

      <h1 style={{
        fontFamily: sans,
        fontWeight: 700,
        fontSize: "clamp(64px, 10vw, 148px)",
        lineHeight: 1,
        letterSpacing: "0.01em",
        color: "#1a1817",
        margin: "0 auto clamp(48px, 6vw, 80px)",
      }}>
        Nachfolge.
      </h1>

      <p style={{
        fontFamily: sans,
        fontSize: "clamp(20px, 2.2vw, 30px)",
        fontWeight: 400,
        color: "#1a1817",
        lineHeight: 1.6,
        maxWidth: 860,
        margin: "0 auto clamp(60px, 8vw, 100px)",
      }}>
        Die Übergabe in der Unternehmensführung ist eine der weitreichendsten Entscheidungen, die ein Familienunternehmen treffen kann. Bausch & Company begleitet Eigentümer seit 2005 durch diesen Prozess — von der ersten Situationsanalyse über die diskrete Suche bis zur stabilen Übergabe.
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
          to="/kontakt"
          label="Gespräch vereinbaren"
          hover={hover1}
          onEnter={() => setHover1(true)}
          onLeave={() => setHover1(false)}
        />
        <PillLink
          to="/lead-magnet"
          label="Checkliste laden"
          hover={hover2}
          onEnter={() => setHover2(true)}
          onLeave={() => setHover2(false)}
        />
      </div>

    </section>
  );
}
