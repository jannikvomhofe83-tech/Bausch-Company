import React from "react";

const serif = "'EB Garamond', Georgia, serif";

const challenges = [
  {
    number: "01",
    title: "Die falsche Person im falschen Moment",
    body: "Ob eine Führungskraft passt, hängt nicht nur von ihrer Qualifikation ab — sondern davon, was das Unternehmen gerade braucht. Eine Führungskraft, die in einer Wachstumsphase überzeugt, kann in einer Konsolidierungsphase scheitern. Wir klären zuerst die Situation, bevor wir die Person suchen.",
  },
  {
    number: "02",
    title: "Kultur und Eigentümerlogik ignoriert",
    body: "Externe Führungskräfte scheitern in Familienunternehmen selten an fachlicher Inkompetenz — häufig daran, dass die gewachsene Eigentümerlogik nicht verstanden oder respektiert wird. Kulturelle Passung ist kein Bonus. Sie ist Voraussetzung.",
  },
  {
    number: "03",
    title: "Zu schnell entschieden, zu spät korrigiert",
    body: "Besetzungsentscheidungen werden oft unter Druck getroffen — und zu lange aufrechterhalten, wenn sich Zweifel zeigen. Wir begleiten nicht nur die Entscheidung, sondern auch die ersten Monate nach der Besetzung, um frühzeitig gegenzusteuern, wenn es nötig ist.",
  },
];

function Card({ number, title, body }) {
  return (
    <div>
      <p style={{
        fontFamily: serif,
        fontWeight: 300,
        fontSize: "clamp(44px, 5.5vw, 80px)",
        lineHeight: 1,
        letterSpacing: "-0.02em",
        color: "#00693C",
        margin: "0 0 16px",
      }}>
        {number}.
      </p>
      <h3 style={{
        fontFamily: serif,
        fontWeight: 700,
        fontSize: "clamp(20px, 2vw, 28px)",
        lineHeight: 1.15,
        color: "#1a1817",
        margin: "0 0 14px",
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: serif,
        fontSize: "clamp(14px, 1.1vw, 16px)",
        fontWeight: 400,
        color: "rgba(26,24,23,0.58)",
        lineHeight: 1.75,
        margin: 0,
      }}>
        {body}
      </p>
    </div>
  );
}

export function FHerausforderungen() {
  return (
    <section style={{
      padding: "clamp(40px, 5vw, 64px) clamp(40px, 7%, 120px) clamp(64px, 9vw, 100px)",
      background: "#fff",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(32px, 5vw, 80px)",
        alignItems: "start",
      }}>
        {challenges.map((c) => (
          <Card key={c.number} {...c} />
        ))}
      </div>
    </section>
  );
}
