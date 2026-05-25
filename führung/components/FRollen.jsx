import React from "react";

const serif = "'EB Garamond', Georgia, serif";

const roles = [
  {
    title: "Geschäftsführer",
    body: "Verantwortung für Strategie, Kultur und langfristiges Wachstum. Im Familienunternehmen verbindet diese Position Geschäftssinn mit Verständnis für Werte und Kontinuität. Wer hier passt, führt nicht gegen die DNA des Unternehmens — sondern aus ihr heraus.",
  },
  {
    title: "Chief Financial Officer",
    body: "Finanzielle Stabilität und Transparenz sind das Fundament jedes Generationswechsels. Der CFO schafft Klarheit über Zahlen, Risiken und Strukturen — und wird zum unverzichtbaren Sparringspartner, wenn Eigentümer Entscheidungen von Tragweite treffen.",
  },
  {
    title: "Chief Operating Officer",
    body: "Operative Exzellenz und Prozessklarheit. Der COO übersetzt Strategie in konkretes Handeln und schafft die Strukturen, die nachhaltiges Wachstum erst ermöglichen. Besonders wertvoll in Phasen, in denen das Unternehmen schneller wächst als seine Organisation.",
  },
  {
    title: "Beiratsmitglieder",
    body: "Externe Perspektive und Governance ohne operative Tagesverantwortung. Beiräte bringen Erfahrung ein, stellen die richtigen Fragen und fungieren gleichzeitig als Kontrollinstanz. In Familienunternehmen sind sie oft der fehlende kritische Gegenüber zur Eigentümerperspektive.",
  },
];

export function FRollen() {
  return (
    <section style={{
      padding: "clamp(40px, 5vw, 64px) clamp(40px, 7%, 120px) clamp(64px, 9vw, 100px)",
      background: "#fff",
    }}>
      {roles.map((role, i) => (
        <div
          key={role.title}
          style={{
            borderTop: "1px solid rgba(26,24,23,0.1)",
            borderBottom: i === roles.length - 1 ? "1px solid rgba(26,24,23,0.1)" : "none",
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
            fontSize: "clamp(22px, 2.2vw, 32px)",
            lineHeight: 1.1,
            color: "#1a1817",
            margin: 0,
          }}>
            {role.title}
          </h3>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.72)",
            lineHeight: 1.8,
            margin: 0,
          }}>
            {role.body}
          </p>
        </div>
      ))}
    </section>
  );
}
