import React from "react";

const serif = "'EB Garamond', Georgia, serif";

const REFERENCES = [
  {
    name: "Prof. Dr. F. Osterheider",
    role: "Geschäftsführer Personal, Führendes deutsches Unternehmen der Stahlindustrie",
    quote: `„Unser erstes gemeinsames Projekt wird nicht das letzte gewesen sein. Die angesprochenen Kandidaten ebenso wie der Auftraggeber waren beeindruckt von der Professionalität und Menschlichkeit, mit der die Arbeit vonstatten ging. Danke dafür und: Auf ein Neues!"`,
  },
  {
    name: "Lance Baldo",
    role: "Global Vice President Medical Science, The Medicines Company",
    quote: `„I have worked with all of the 'major' search firms and have been more impressed with Johannes' individual efforts. He is cordial, thoughtful and thorough. He is a pleasure to work with and I look forward to the next search with him. I recommend him highly."`,
  },
  {
    name: "Ute Leube",
    role: "Unternehmerin des Jahres 2012, Gründerin der Primavera Life GmbH",
    quote: `„Hohes persönliches Engagement, fachliche wie soziale Kompetenz, liebevolles Interesse an Menschen und zwischenmenschlichen Prozessen sowie viel Geduld – damit hat Johannes Bausch die Suche nach unseren Nachfolgern für den Generationenwechsel wohltuend begleitet."`,
  },
  {
    name: "Giuseppe Assogna",
    role: "Senior Director, Pharmaunternehmen, Italien",
    quote: `„Johannes is the excellence in the field: top professional, always reliable, consistent, punctual and fully committed to the goal. I consider him, according to personal experience, one of the very few best persons in the recruitment field."`,
  },
];

export function Layout31() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(64px, 8vw, 112px) clamp(40px, 7%, 120px)",
    }}>

      {/* Large headline */}
      <h2 style={{
        fontFamily: serif,
        fontWeight: 900,
        fontSize: "clamp(32px, 4.5vw, 64px)",
        lineHeight: 0.92,
        letterSpacing: "-0.03em",
        color: "#1a1817",
        margin: 0,
        marginBottom: "clamp(64px, 10vw, 140px)",
        textAlign: "right",
        marginLeft: "auto",
      }}>
        Was unsere Kunden sagen.
      </h2>

      {/* 4-column references */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "clamp(24px, 4vw, 48px)",
        borderTop: "1px solid rgba(26,24,23,0.18)",
        paddingTop: "clamp(28px, 3.5vw, 48px)",
      }}>
        {REFERENCES.map((ref) => (
          <div key={ref.name}>
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
              {ref.name}
            </h3>
            <p style={{
              fontFamily: serif,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#00693C",
              margin: 0,
              marginBottom: "clamp(16px, 2vw, 24px)",
            }}>
              {ref.role}
            </p>
            <p style={{
              fontFamily: serif,
              fontSize: "clamp(13px, 1vw, 15px)",
              fontWeight: 400,
              lineHeight: 1.85,
              color: "rgba(26,24,23,0.65)",
              margin: 0,
              fontStyle: "italic",
            }}>
              {ref.quote}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
