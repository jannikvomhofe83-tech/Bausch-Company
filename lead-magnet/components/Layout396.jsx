import React from "react";

const serif = "'EB Garamond', Georgia, serif";

const POINTS = [
  { nr: "01", title: "Rollenklarheit vor Besetzung", text: "Wer macht was, und warum. Ohne Klarheit keine gute Wahl." },
  { nr: "02", title: "Kompetenzprofil definieren", text: "Welche Fähigkeiten braucht der Nachfolger wirklich?" },
  { nr: "03", title: "Übergabetiming planen", text: "Zu schnell ist riskant. Zu langsam kostet Optionen." },
  { nr: "04", title: "Kandidatensuche strukturieren", text: "Der richtige Suchansatz entscheidet über die Qualität der Kandidaten." },
  { nr: "05", title: "Kulturfit prüfen", text: "Fachliche Qualifikation allein genügt nicht — der Mensch muss ins Unternehmen passen." },
  { nr: "06", title: "Einarbeitung planen", text: "Ein guter Start entscheidet über den langfristigen Erfolg der gesamten Übergabe." },
];

export function Layout396() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(64px, 8vw, 112px) clamp(40px, 7%, 120px)",
    }}>

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
        Inhalt
      </p>

      <h2 style={{
        fontFamily: serif,
        fontWeight: 900,
        fontSize: "clamp(32px, 4.5vw, 64px)",
        lineHeight: 0.92,
        letterSpacing: "-0.03em",
        color: "#1a1817",
        margin: 0,
        marginBottom: "clamp(48px, 7vw, 96px)",
      }}>
        Sechs Punkte, die zählen.
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(32px, 4vw, 56px) clamp(32px, 5vw, 64px)",
        borderTop: "1px solid rgba(26,24,23,0.18)",
        paddingTop: "clamp(28px, 3.5vw, 48px)",
      }}>
        {POINTS.map((p) => (
          <div key={p.nr}>
            <span style={{
              fontFamily: serif,
              fontSize: "clamp(11px, 0.9vw, 13px)",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#FF5800",
              display: "block",
              marginBottom: "clamp(10px, 1.2vw, 16px)",
            }}>
              {p.nr}
            </span>
            <h3 style={{
              fontFamily: serif,
              fontWeight: 700,
              fontSize: "clamp(16px, 1.4vw, 22px)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#1a1817",
              margin: 0,
              marginBottom: "clamp(10px, 1.2vw, 16px)",
            }}>
              {p.title}
            </h3>
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
