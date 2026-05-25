import React from "react";

const serif = "'EB Garamond', Georgia, serif";

const points = [
  {
    title: "Wir verstehen Familienunternehmen",
    body: "Nicht jede Führungskraft passt in ein Familienunternehmen. Die Anforderungen gehen weit über das Fachliche hinaus — Eigentümerlogik, gewachsene Kultur, langfristiges Denken statt Quartalsrendite. Wir kennen diesen Unterschied und suchen entsprechend.",
  },
  {
    title: "Strategischer Sparringspartner, nicht Dienstleister",
    body: "Wir helfen nicht nur zu besetzen, sondern zuerst zu klären. Was braucht die Rolle wirklich? Welche Anforderungen sind realistisch? Welche Persönlichkeit passt zur Situation? Diese Fragen stellen wir, bevor wir suchen.",
  },
  {
    title: "Vertraulichkeit ist nicht verhandelbar",
    body: "Sensible Besetzungsprozesse erfordern absolute Diskretion. Niemand erfährt von einer laufenden Suche, bevor es notwendig ist. Das gilt gegenüber dem Markt, gegenüber Kandidaten und innerhalb des Mandats.",
  },
  {
    title: "Nachhaltige Besetzungen statt schnelle Platzierungen",
    body: "Wir messen den Erfolg eines Mandats nicht an der Geschwindigkeit der Platzierung, sondern daran, ob die Führungskraft bleibt, wirkt und wächst. Dafür begleiten wir über den ersten Arbeitstag hinaus.",
  },
];

export function FUnterschied() {
  return (
    <section style={{
      padding: "clamp(40px, 5vw, 64px) clamp(40px, 7%, 120px) clamp(64px, 9vw, 100px)",
      background: "#fff",
    }}>
      {points.map((p, i) => (
        <div
          key={p.title}
          style={{
            borderTop: "1px solid rgba(26,24,23,0.1)",
            borderBottom: i === points.length - 1 ? "1px solid rgba(26,24,23,0.1)" : "none",
            padding: "clamp(28px, 3.5vw, 48px) 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 6vw, 96px)",
            alignItems: "start",
          }}
        >
          <h3 style={{
            fontFamily: serif,
            fontWeight: 700,
            fontSize: "clamp(20px, 2vw, 28px)",
            lineHeight: 1.15,
            color: "#1a1817",
            margin: 0,
          }}>
            {p.title}
          </h3>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.72)",
            lineHeight: 1.8,
            margin: 0,
          }}>
            {p.body}
          </p>
        </div>
      ))}
    </section>
  );
}
