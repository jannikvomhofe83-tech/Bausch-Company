import React from "react";
import { Link } from "react-router-dom";

const serif = "'EB Garamond', Georgia, serif";

const phases = [
  {
    number: "01",
    title: "Bedarfsklärung",
    body: "Wir verstehen zuerst, was die Rolle wirklich braucht — nicht was das Organigramm vorsieht. Welche Führung braucht dieses Unternehmen in seiner aktuellen Situation? Erst wenn diese Frage ehrlich beantwortet ist, beginnen wir.",
  },
  {
    number: "02",
    title: "Anforderungsprofil",
    body: "Gemeinsam definieren wir das Profil der Führungskraft, die zur Situation, zur Eigentümerlogik und zur Kultur des Unternehmens passt. Ein Profil beschreibt, was jemand mitbringen soll. Eine Rolle beschreibt, was jemand leisten muss. Diesen Unterschied machen wir.",
  },
  {
    number: "03",
    title: "Diskrete Suche und Gespräche",
    body: "Führungskräfte, die wirklich passen, suchen selten aktiv. Wir erreichen sie über unser Netzwerk — diskret und ohne dass ein laufendes Mandat nach außen dringt. Wir führen erste Gespräche, prüfen Passung und bereiten geeignete Kandidaten auf den weiteren Prozess vor.",
  },
  {
    number: "04",
    title: "Begleitung der Integration",
    body: "Die Entscheidung ist ein Anfang, kein Abschluss. Wir begleiten die ersten Monate aktiv, bleiben ansprechbar und sichern die Integration auch nach dem ersten Arbeitstag ab. Denn Besetzungen scheitern häufiger in der Einarbeitung als in der Auswahl.",
  },
];

export function FProzess() {
  return (
    <section style={{
      padding: "clamp(40px, 5vw, 64px) clamp(40px, 7%, 120px) clamp(64px, 9vw, 100px)",
      background: "#fff",
    }}>
      {phases.map((phase, i) => (
        <div
          key={phase.number}
          style={{
            borderTop: "1px solid rgba(26,24,23,0.1)",
            borderBottom: i === phases.length - 1 ? "1px solid rgba(26,24,23,0.1)" : "none",
            padding: "clamp(28px, 3.5vw, 48px) 0",
            display: "grid",
            gridTemplateColumns: "clamp(40px, 5vw, 64px) 1fr 1fr",
            gap: "clamp(24px, 4vw, 56px)",
            alignItems: "start",
          }}
        >
          <p style={{
            fontFamily: serif,
            fontWeight: 300,
            fontSize: "clamp(28px, 3.5vw, 52px)",
            lineHeight: 1,
            color: "#00693C",
            margin: 0,
            paddingTop: "0.05em",
          }}>
            {phase.number}.
          </p>
          <h3 style={{
            fontFamily: serif,
            fontWeight: 700,
            fontSize: "clamp(20px, 2vw, 28px)",
            lineHeight: 1.15,
            color: "#1a1817",
            margin: 0,
            paddingTop: "0.15em",
          }}>
            {phase.title}
          </h3>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.72)",
            lineHeight: 1.8,
            margin: 0,
          }}>
            {phase.body}
          </p>
        </div>
      ))}

      <div style={{ marginTop: "clamp(32px, 4vw, 52px)" }}>
        <Link
          to="/kontakt"
          style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 15px)",
            fontWeight: 500,
            color: "#1a1817",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          Gespräch vereinbaren
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <line x1="0" y1="8" x2="24" y2="8" stroke="#1a1817" strokeWidth="1.3" />
            <polyline points="17,2 24,8 17,14" fill="none" stroke="#1a1817" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
