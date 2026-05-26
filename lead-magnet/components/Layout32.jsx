import React from "react";

const serif = "'EB Garamond', Georgia, serif";

const POINTS = [
  {
    nr: "01",
    title: "Nachfolge ist Risiko",
    text: "Jede dritte Übergabe in Familienunternehmen scheitert. Oft nicht wegen fehlender Kandidaten, sondern wegen unklarer Planung und zu spätem Beginn.",
  },
  {
    nr: "02",
    title: "Zeit ist kostbar",
    text: "Eine strukturierte Nachfolge braucht Jahre, nicht Monate. Wer zu spät anfängt, verliert Optionen — und zahlt den Preis mit einem schlechten Übergang.",
  },
  {
    nr: "03",
    title: "Details entscheiden",
    text: "Rollenklarheit, Kompetenzprofil, Übergabetiming, Kulturfit. Jeder Punkt muss stimmen — ein einziger Fehler kann die gesamte Besetzung gefährden.",
  },
];

export function Layout32() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(64px, 8vw, 112px) clamp(40px, 7%, 120px)",
      borderTop: "1px solid rgba(26,24,23,0.12)",
    }}>

      {/* Headline */}
      <h2 style={{
        fontFamily: serif,
        fontWeight: 900,
        fontSize: "clamp(32px, 4.5vw, 64px)",
        lineHeight: 0.92,
        letterSpacing: "-0.03em",
        color: "#1a1817",
        margin: 0,
        marginBottom: "clamp(48px, 7vw, 96px)",
        textAlign: "right",
        marginLeft: "auto",
      }}>
        Warum diese Checkliste.
      </h2>

      {/* 3-column grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(24px, 4vw, 48px)",
        borderTop: "1px solid rgba(26,24,23,0.18)",
        paddingTop: "clamp(28px, 3.5vw, 48px)",
      }}>
        {POINTS.map((p) => (
          <div key={p.nr}>
            <h3 style={{
              fontFamily: serif,
              fontWeight: 700,
              fontSize: "clamp(15px, 1.3vw, 19px)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: "#1a1817",
              margin: 0,
              marginBottom: "clamp(10px, 1.2vw, 16px)",
            }}>
              {p.title}
            </h3>
            <p style={{
              fontFamily: serif,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF5800",
              margin: 0,
              marginBottom: "clamp(16px, 2vw, 24px)",
            }}>
              {p.nr}
            </p>
            <p style={{
              fontFamily: serif,
              fontSize: "clamp(13px, 1vw, 15px)",
              fontWeight: 400,
              lineHeight: 1.85,
              color: "rgba(26,24,23,0.65)",
              margin: 0,
            }}>
              {p.text}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
