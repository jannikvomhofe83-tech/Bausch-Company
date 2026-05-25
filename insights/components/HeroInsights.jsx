import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function HeroInsights() {
  return (
    <section style={{
      background: "#fff",
      minHeight: "125vh",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Small text — above "Insights", centered over it */}
      <div style={{
        position: "absolute",
        top: "36%",
        left: "57.5vw",
        zIndex: 3,
      }}>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(11px, 0.85vw, 14px)",
          fontWeight: 700,
          lineHeight: 1.75,
          color: "#1a1817",
          margin: 0,
        }}>
          Wie entscheiden Unternehmen in kritischen Momenten?<br />
          Über Nachfolge, Führung und Transformation —<br />
          geschrieben für Eigentümer und Geschäftsführer,<br />
          die handeln wollen. Präzise, ohne Umwege —<br />
          nah an der Realität des Mittelstands.
        </p>
      </div>

      {/* "Insights" — black, positioned right */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "48vw",
        zIndex: 3,
      }}>
        <span style={{
          fontFamily: serif,
          fontWeight: 700,
          fontSize: "clamp(70px, 11vw, 155px)",
          color: "#1a1817",
          lineHeight: 1,
          letterSpacing: "-0.03em",
          display: "block",
          whiteSpace: "nowrap",
        }}>
          Insights
        </span>
      </div>

      {/* "zur Führung" — green, positioned left */}
      <div style={{
        position: "absolute",
        top: "60%",
        left: "clamp(20px, 8vw, 100px)",
        zIndex: 3,
      }}>
        <span style={{
          fontFamily: serif,
          fontWeight: 700,
          fontSize: "clamp(62px, 9.5vw, 135px)",
          lineHeight: 1,
          letterSpacing: "-0.03em",
          display: "block",
          whiteSpace: "nowrap",
        }}>
          <span style={{ color: "#00693C" }}>zur Führung</span>
        </span>
      </div>

      {/* Small text — centered below "zur Führung" */}
      <div style={{
        position: "absolute",
        bottom: "18vh",
        left: "22.5vw",
        zIndex: 3,
      }}>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(11px, 0.85vw, 14px)",
          fontWeight: 700,
          lineHeight: 1.75,
          color: "#1a1817",
          margin: 0,
        }}>
          Neue Perspektiven erscheinen regelmäßig.<br />
          Alle Inhalte sind kostenlos — kein Newsletter,<br />
          nur Substanz. Wir schreiben für Eigentümer<br />
          und Geschäftsführer, die wissen, dass Führung<br />
          über Erfolg oder Scheitern entscheidet.
        </p>
      </div>

    </section>
  );
}
