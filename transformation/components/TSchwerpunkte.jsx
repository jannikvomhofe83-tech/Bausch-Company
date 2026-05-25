import React from "react";

const serif = "'EB Garamond', Georgia, serif";

const topics = [
  {
    number: "01",
    title: "Restrukturierung und Neuausrichtung",
    body: "Organisationen wachsen aus ihrer Form heraus. Strukturen, die in einer früheren Phase funktioniert haben, bremsen das Unternehmen in einer neuen. Wir helfen, neue Formen zu finden — und besetzen die Führungskräfte, die diese Formen mit Leben füllen können, ohne das Wesen des Unternehmens zu verlieren.",
  },
  {
    number: "02",
    title: "Digitalisierung und Modernisierung",
    body: "Technologie ist kein Selbstzweck. Sie muss zur Kultur des Unternehmens passen, echte Probleme lösen und von Führungskräften getragen werden, die den Wandel verstehen und gestalten können. Wir finden diese Menschen — auch dann, wenn sie nicht aktiv suchen.",
  },
  {
    number: "03",
    title: "Post-M&A Integration",
    body: "Übernahmen und Fusionen scheitern selten an Zahlen — sie scheitern an Menschen. Die Integration zweier Kulturen, Strukturen und Führungslogiken ist die eigentliche Herausforderung nach einem Zusammenschluss. Wir besetzen die Führungskräfte, die Kulturen zusammenbringen und echten Wert schaffen.",
  },
];

export function TSchwerpunkte() {
  return (
    <section style={{
      padding: "clamp(40px, 5vw, 64px) clamp(40px, 7%, 120px) clamp(64px, 9vw, 100px)",
      background: "#fff",
    }}>
      {topics.map((t, i) => (
        <div
          key={t.number}
          style={{
            borderTop: "1px solid rgba(26,24,23,0.1)",
            borderBottom: i === topics.length - 1 ? "1px solid rgba(26,24,23,0.1)" : "none",
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
            color: "#FF5800",
            margin: 0,
            paddingTop: "0.05em",
          }}>
            {t.number}.
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
            {t.title}
          </h3>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.72)",
            lineHeight: 1.8,
            margin: 0,
          }}>
            {t.body}
          </p>
        </div>
      ))}
    </section>
  );
}
