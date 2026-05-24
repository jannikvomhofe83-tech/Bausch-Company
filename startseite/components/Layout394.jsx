import React, { useState } from "react";
import { Link } from "react-router-dom";

const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";

function CrossIcon({ color = "#00693C" }) {
  return (
    <div style={{ position: "relative", width: 18, height: 18, flexShrink: 0 }}>
      <div style={{
        position: "absolute", top: "50%", left: 0, right: 0,
        height: 1.5, background: color, transform: "translateY(-50%)",
      }} />
      <div style={{
        position: "absolute", left: "50%", top: 0, bottom: 0,
        width: 1.5, background: color, transform: "translateX(-50%)",
      }} />
    </div>
  );
}

function CtaButton({ to, label, color = "#00693C", hoverColor = "#005530" }) {
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
        background: hover ? hoverColor : color,
        padding: "15px 28px",
        borderRadius: 4,
        display: "inline-block",
        transition: "background 0.2s ease",
      }}
    >
      {label}
    </Link>
  );
}

export function SituationSection({ label, headline, leftBody, rightBody, rightBodyBold, link, sectionTitle, color = "#00693C", hoverColor = "#005530" }) {
  return (
    <section style={{
      padding: "clamp(72px, 10vw, 140px) clamp(40px, 7%, 120px)",
    }}>

      {sectionTitle && (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(24px, 4vw, 60px)",
          paddingBottom: "clamp(40px, 5vw, 64px)",
          marginBottom: "clamp(40px, 5vw, 64px)",
          borderBottom: "1px solid rgba(26,24,23,0.1)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <CrossIcon color="#FF5800" />
            <p style={{
              fontFamily: sans, fontSize: 11, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#FF5800", margin: 0,
            }}>
              Leistungsbereiche
            </p>
          </div>
          <h2 style={{
            fontFamily: sans, fontWeight: 900,
            fontSize: "clamp(20px, 2.8vw, 42px)",
            lineHeight: 1.05, letterSpacing: "-0.03em",
            color: "#1a1817", margin: 0, textAlign: "right",
          }}>
            {sectionTitle}
          </h2>
        </div>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "44% 56%",
        gap: "clamp(40px, 6vw, 100px)",
        alignItems: "start",
      }}>

        {/* LEFT COLUMN */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(24px, 3vw, 40px)" }}>
            <CrossIcon color={color} />
            <p style={{
              fontFamily: sans, fontSize: 11, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color, margin: 0,
            }}>
              {label}
            </p>
          </div>

          <h2 style={{
            fontFamily: sans, fontWeight: 900,
            fontSize: "clamp(28px, 3.5vw, 52px)",
            lineHeight: 1.05, letterSpacing: "-0.03em",
            color: "#1a1817", marginBottom: "clamp(20px, 2.5vw, 32px)",
          }}>
            {headline}
          </h2>

          <p style={{
            fontFamily: sans, fontSize: "clamp(13px, 1vw, 15px)",
            fontWeight: 400, color: "rgba(26,24,23,0.62)",
            lineHeight: 1.75,
          }}>
            {leftBody}
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ paddingTop: "clamp(52px, 6.5vw, 88px)" }}>
          {rightBody.split("\n\n").map((para, i) => (
            <p key={i} style={{
              fontFamily: sans, fontSize: "clamp(13px, 1vw, 15px)",
              fontWeight: 400, color: "rgba(26,24,23,0.62)",
              lineHeight: 1.75, marginBottom: "clamp(20px, 2.5vw, 32px)",
            }}>
              {para}
            </p>
          ))}

          <p style={{
            fontFamily: sans, fontSize: "clamp(15px, 1.3vw, 19px)",
            fontWeight: 700, color: "#1a1817",
            lineHeight: 1.55, marginBottom: "clamp(32px, 4vw, 56px)",
          }}>
            {rightBodyBold}
          </p>

          <CtaButton to={link} label="Gespräch anfragen" color={color} hoverColor={hoverColor} />
        </div>

      </div>
    </section>
  );
}

export const situations = [
  {
    id: "nachfolge",
    bg: "#fff",
    label: "Nachfolge",
    sectionTitle: "Drei Situationen. Eine Lösung.",
    headline: "Die Übergabe richtig besetzen.",
    leftBody: "Die Nachfolge in der Unternehmensführung ist kein Routinevorgang — sie ist eine der weitreichendsten Entscheidungen, die ein Familienunternehmen treffen kann. Wer hier die falsche Person besetzt, riskiert nicht nur Verluste: Er riskiert Jahrzehnte aufgebauter Kultur, Kundenbeziehungen und Mitarbeiterloyalität. Deshalb beginnt unsere Arbeit nicht mit der Suche, sondern mit der Frage: In welcher Situation befindet sich das Unternehmen wirklich — und welche Führung braucht es jetzt?",
    rightBody: "Externe und interne Nachfolge erfordern grundlegend unterschiedliche Ansätze. Bei interner Nachfolge geht es oft darum, eine Führungspersönlichkeit zu finden, die in der Organisation bereits respektiert wird — und trotzdem den nötigen Wandel anstoßen kann. Bei externer Nachfolge ist Vertrauensaufbau das zentrale Thema: Wer kommt von außen in ein gewachsenes Familienunternehmen und wird akzeptiert?\n\nWir entwickeln gemeinsam mit dem Eigentümer ein Anforderungsprofil, das nicht auf Wunschvorstellungen basiert, sondern auf einer ehrlichen Analyse der Unternehmensrealität. Erst dann beginnen wir zu suchen — diskret, mit Zugang zu einem Netzwerk, das nicht auf Jobbörsen unterwegs ist.",
    rightBodyBold: "Bausch & Company begleitet Familienunternehmen durch den gesamten Nachfolgeprozess — von der ersten Situationsanalyse über die Kandidatenauswahl bis zur stabilen Übergabe.",
    link: "/nachfolge",
  },
  {
    id: "wachstum",
    bg: "#f7f4ef",
    color: "#FF5800",
    hoverColor: "#cc4600",
    label: "Wachstum",
    headline: "Die nächste Stufe gestalten.",
    leftBody: "Wachstum klingt positiv — und ist es auch. Aber Wachstum bedeutet Veränderung: neue Märkte, neue Strukturen, neue Anforderungen an die Führung. Was in der Gründungsphase funktioniert hat, trägt das Unternehmen nicht automatisch durch die nächste Stufe. Familienunternehmen, die skalieren wollen, brauchen Führungskräfte mit unternehmerischer Substanz — Menschen, die Prozesse professionalisieren, ohne die Kultur zu zerstören.",
    rightBody: "Ob erster externer Geschäftsführer, neuer Vertriebsleiter für einen internationalen Markt oder eine Führungskraft für eine frisch akquirierte Tochtergesellschaft: Der Kontext ist immer ein anderer. Was bleibt, ist die Anforderung, die wir bei Bausch & Company in jedem Mandat stellen — die Person muss zur Situation passen, nicht nur zum Stellenprofil.\n\nWachstum ist der Moment, in dem Fehlbesetzungen den größten Schaden anrichten. Eine falsche Entscheidung auf C-Level kann Monate Momentum kosten und die Organisation nachhaltig destabilisieren. Wir sorgen dafür, dass dieser Moment nicht zur Zäsur wird.",
    rightBodyBold: "Wir besetzen Führungspositionen, die Ihr Unternehmen in die nächste Phase tragen — mit Persönlichkeiten, die Familienlogik nicht nur verstehen, sondern aktiv gestalten.",
    link: "/wachstum",
  },
  {
    id: "transformation",
    bg: "#fff",
    label: "Transformation",
    headline: "Veränderung mit Substanz führen.",
    leftBody: "Transformationsphasen sind die härteste Probe für jede Organisation. Ob Restrukturierung, Digitalisierung oder die Integration nach einer Akquisition — in diesen Situationen entscheidet die Führungskraft darüber, ob Veränderung gelingt oder scheitert. Familienunternehmen haben dabei eine besondere Herausforderung: Sie müssen Wandel gestalten, ohne die Identität zu verlieren, die sie stark gemacht hat.",
    rightBody: "Transformationsführer brauchen zwei Qualitäten gleichzeitig: die Entschlossenheit, schwierige Entscheidungen zu treffen, und die Fähigkeit, Menschen durch Unsicherheit zu führen. Wer das nur aus Konzernprojekten kennt, wird in einem Familienunternehmen oft scheitern — weil dort Hierarchien flacher sind, Entscheidungen persönlicher wirken und der Eigentümer im Raum ist.\n\nWir suchen deshalb gezielt nach Persönlichkeiten, die Transformation in familiengeprägten Strukturen bereits gelebt haben — und wissen, was es bedeutet, wenn der Name über der Tür der des Gründers ist.",
    rightBodyBold: "Bausch & Company vermittelt keine Profile — wir bringen Menschen in Situationen, die wirklich zu ihnen passen. Und zu Ihrem Unternehmen.",
    link: "/transformation",
  },
];
