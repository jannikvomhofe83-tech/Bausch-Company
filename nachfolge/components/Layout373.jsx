import React from "react";
import { Link } from "react-router-dom";

const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";

const challenges = [
  {
    number: "01",
    title: "Die richtige Person finden",
    body: "Ob interner Kandidat oder externe Führungskraft — die Entscheidung hängt nicht an Präferenzen, sondern an der konkreten Situation des Unternehmens. Wir helfen, diese Frage ehrlich zu beantworten, bevor die Suche beginnt.",
    large: true,
  },
  {
    number: "02",
    title: "Übergabe ohne Bruch",
    body: "Kontinuität zu wahren, während Neues entsteht, ist eine der anspruchsvollsten Aufgaben. Wir begleiten die Übergabe auch nach der Entscheidung.",
    large: false,
  },
  {
    number: "03",
    title: "Timing der Entscheidung",
    body: "Zu früh entschieden, zu spät begonnen — beides hat Konsequenzen. Wir helfen, den richtigen Moment zu erkennen und den Prozess rechtzeitig anzustoßen.",
    large: false,
  },
];

function ArrowLink({ to, label }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: sans,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: hover ? "#00693C" : "#1a1817",
        textDecoration: "none",
        transition: "color 0.2s ease",
      }}
    >
      {label}
      <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
        <line x1="0" y1="10" x2="24" y2="10" stroke="currentColor" strokeWidth="1.4" />
        <polyline points="17,3 24,10 17,17" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export function Layout373() {
  return (
    <section style={{
      padding: "clamp(72px, 10vw, 120px) clamp(40px, 7%, 120px)",
      background: "#fff",
    }}>
      {/* Header */}
      <div style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
        <p style={{
          fontFamily: sans,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#00693C",
          margin: "0 0 16px",
        }}>
          Herausforderungen
        </p>
        <h2 style={{
          fontFamily: sans,
          fontWeight: 900,
          fontSize: "clamp(32px, 4.5vw, 60px)",
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
          color: "#1a1817",
          margin: 0,
          maxWidth: 640,
        }}>
          Was Eigentümer wirklich bewegt.
        </h2>
      </div>

      {/* Card grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "clamp(16px, 2vw, 24px)",
        alignItems: "start",
      }}>
        {challenges.map(({ number, title, body, large }) => (
          <div
            key={number}
            style={{
              border: "1px solid rgba(26,24,23,0.1)",
              borderRadius: 4,
              padding: large
                ? "clamp(36px, 4vw, 56px)"
                : "clamp(28px, 3vw, 40px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: large ? 320 : 280,
            }}
          >
            <div>
              <p style={{
                fontFamily: sans,
                fontWeight: 300,
                fontSize: large ? "clamp(44px, 5vw, 68px)" : "clamp(36px, 4vw, 52px)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                color: "#00693C",
                margin: "0 0 clamp(20px, 2.5vw, 32px)",
              }}>
                {number}.
              </p>

              <h3 style={{
                fontFamily: sans,
                fontWeight: 900,
                fontSize: large
                  ? "clamp(24px, 2.8vw, 40px)"
                  : "clamp(18px, 1.8vw, 26px)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#1a1817",
                margin: "0 0 clamp(12px, 1.5vw, 20px)",
              }}>
                {title}
              </h3>

              <p style={{
                fontFamily: sans,
                fontSize: "clamp(13px, 1vw, 15px)",
                fontWeight: 400,
                color: "rgba(26,24,23,0.6)",
                lineHeight: 1.75,
                margin: 0,
              }}>
                {body}
              </p>
            </div>

            <div style={{ marginTop: "clamp(24px, 3vw, 40px)" }}>
              <ArrowLink to="/kontakt" label="Mehr erfahren" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
