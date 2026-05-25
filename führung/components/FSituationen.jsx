import React from "react";

const serif = "'EB Garamond', Georgia, serif";

const situations = [
  {
    number: "01",
    title: "Generationswechsel steht an",
    body: "Die nächste Generation ist noch nicht bereit oder hat sich bewusst gegen eine operative Rolle entschieden. Eine externe Führungskraft kann den Übergang gestalten, das Unternehmen stabilisieren und gleichzeitig die Eigentümerfamilie entlasten — ohne die Kontinuität zu gefährden.",
  },
  {
    number: "02",
    title: "Wachstum verlangt neue Strukturen",
    body: "Das Unternehmen ist gewachsen, aber die Führungsstruktur ist es nicht. Was in einer früheren Phase funktioniert hat, reicht jetzt nicht mehr aus. Neue Rollen müssen definiert und mit den richtigen Menschen besetzt werden — bevor das Wachstum zur Last wird.",
  },
  {
    number: "03",
    title: "Internationalisierung braucht Expertise",
    body: "Neue Märkte erfordern Führungskräfte, die internationale Erfahrung mitbringen und gleichzeitig die Werte eines Familienunternehmens verstehen und respektieren. Diese Kombination ist selten — und genau deshalb Kern unserer Sucharbeit.",
  },
  {
    number: "04",
    title: "Neuaufstellung nach Krise",
    body: "Nach einem Umbruch, einer Fehlbesetzung oder einer strategischen Fehlentscheidung braucht es Führungspersönlichkeiten, die Vertrauen aufbauen, Orientierung geben und eine neue Richtung glaubwürdig vertreten können. Wir finden sie.",
  },
];

export function FSituationen() {
  return (
    <section style={{
      padding: "clamp(40px, 5vw, 64px) clamp(40px, 7%, 120px) clamp(64px, 9vw, 100px)",
      background: "#fff",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(0px, 0px, 0px) clamp(48px, 8vw, 120px)",
      }}>
        {situations.map((s, i) => (
          <div
            key={s.number}
            style={{
              borderTop: "1px solid rgba(26,24,23,0.1)",
              padding: "clamp(28px, 3.5vw, 48px) 0",
              borderBottom: i >= situations.length - 2 ? "1px solid rgba(26,24,23,0.1)" : "none",
            }}
          >
            <p style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 56px)",
              lineHeight: 1,
              color: "#00693C",
              margin: "0 0 16px",
            }}>
              {s.number}.
            </p>
            <h3 style={{
              fontFamily: serif,
              fontWeight: 700,
              fontSize: "clamp(18px, 1.8vw, 26px)",
              lineHeight: 1.15,
              color: "#1a1817",
              margin: "0 0 14px",
            }}>
              {s.title}
            </h3>
            <p style={{
              fontFamily: serif,
              fontSize: "clamp(14px, 1.1vw, 16px)",
              fontWeight: 400,
              color: "rgba(26,24,23,0.65)",
              lineHeight: 1.8,
              margin: 0,
            }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
