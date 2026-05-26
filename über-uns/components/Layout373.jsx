import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function Layout373() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(80px, 10vw, 140px) clamp(40px, 7%, 120px)",
    }}>

      {/* Section label + headline — centered */}
      <div style={{ textAlign: "center", marginBottom: "clamp(48px, 7vw, 96px)" }}>
        <p style={{
          fontFamily: serif,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#00693C",
          margin: 0,
          marginBottom: "clamp(16px, 2vw, 24px)",
        }}>
          Warum wir
        </p>
        <h2 style={{
          fontFamily: serif,
          fontWeight: 900,
          fontSize: "clamp(24px, 3vw, 44px)",
          lineHeight: 1.15,
          letterSpacing: "-0.025em",
          color: "#1a1817",
          margin: 0,
        }}>
          Jedes gute Gespräch beginnt mit gutem Zuhören.
        </h2>
      </div>

      {/* Two-column body — separated by vertical line */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderTop: "1px solid rgba(26,24,23,0.15)",
        paddingTop: "clamp(32px, 4vw, 52px)",
      }}>

        {/* Left — lead paragraph, larger */}
        <div style={{ paddingRight: "clamp(32px, 5vw, 72px)" }}>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(17px, 1.7vw, 24px)",
            fontWeight: 400,
            lineHeight: 1.65,
            color: "#1a1817",
            margin: 0,
          }}>
            Die Referenzen unserer zufriedenen Kunden sind ein Spiegel unserer
            Expertise. Doch das Geheimnis unseres Erfolges steht am Anfang einer
            jeden neuen Suche: wir hören Ihnen zu.
          </p>
        </div>

        {/* Right — multiple paragraphs, smaller */}
        <div style={{
          paddingLeft: "clamp(32px, 5vw, 72px)",
          borderLeft: "1px solid rgba(26,24,23,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(20px, 2.5vw, 32px)",
        }}>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 16px)",
            fontWeight: 400,
            lineHeight: 1.85,
            color: "rgba(26,24,23,0.65)",
            margin: 0,
          }}>
            Mit dem klassischen Positionsprofil allein lassen sich, mit etwas
            Glück, passable Kandidaten finden. Wer jedoch das Vertrauen der
            besten Kandidaten im Markt gewinnen will, der muß bis ins Detail
            verstanden haben, welche Erwartungen der Kunde hegt und was genau
            das Unternehmen und dessen individuelle Kultur auszeichnet.
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 16px)",
            fontWeight: 400,
            lineHeight: 1.85,
            color: "rgba(26,24,23,0.65)",
            margin: 0,
          }}>
            Seit 2004 haben wir über 95% unserer Suchen erfolgreich
            abschliessen können.
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(14px, 1.1vw, 18px)",
            fontWeight: 700,
            lineHeight: 1.6,
            color: "#1a1817",
            margin: 0,
            fontStyle: "italic",
          }}>
            Weil wir zuhören. Und verstehen.
          </p>
        </div>
      </div>

    </section>
  );
}
