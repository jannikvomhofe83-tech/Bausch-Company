import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function Layout504() {
  return (
    <section style={{
      background: "#fff",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: "70vh",
    }}>

      {/* Left half — text */}
      <div style={{
        padding: "clamp(48px, 8vw, 120px) clamp(32px, 5vw, 80px) clamp(48px, 8vw, 120px) clamp(32px, 7vw, 100px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <h2 style={{
          fontFamily: serif,
          fontWeight: 700,
          fontStyle: "italic",
          fontSize: "clamp(26px, 2.8vw, 44px)",
          lineHeight: 1.2,
          color: "#1a1817",
          margin: "0 0 clamp(24px, 4vh, 48px)",
          letterSpacing: "-0.01em",
        }}>
          Wie wir arbeiten
        </h2>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(14px, 1.1vw, 18px)",
          fontWeight: 400,
          lineHeight: 1.85,
          color: "#1a1817",
          margin: "0 0 1.5em",
        }}>
          Wir verstehen Maschinenbau nicht als Branche, sondern als Kultur.
          Unsere Kandidaten haben in dieser Welt gelebt und gearbeitet — als
          Ingenieure, als Werksleiter, als operative Führungskräfte. Das macht
          den Unterschied, wenn es darum geht, die richtige Person für eine
          spezifische Situation zu finden.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(14px, 1.1vw, 18px)",
          fontWeight: 400,
          lineHeight: 1.85,
          color: "#1a1817",
          margin: "0 0 1.5em",
        }}>
          Unsere Arbeit beginnt nicht mit dem Lebenslauf, sondern mit dem
          Verständnis der Situation. Was hat das Unternehmen hinter sich?
          Was kommt auf es zu? Welche Führungskultur passt — und welche
          würde scheitern? Erst wenn wir das verstehen, beginnen wir zu suchen.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(14px, 1.1vw, 18px)",
          fontWeight: 400,
          lineHeight: 1.85,
          color: "#1a1817",
          margin: 0,
        }}>
          Das Ergebnis: Führungskräfte, die nicht nur fachlich passen, sondern
          die das Unternehmen in seiner nächsten Phase tragen können.
        </p>
      </div>

      {/* Right half — giant "Ansatz" */}
      <div style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}>
        <div style={{ position: "relative", marginLeft: "-0.2em" }}>
          <span style={{
            position: "absolute",
            fontFamily: serif,
            fontSize: "clamp(11px, 1vw, 15px)",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#1a1817",
            whiteSpace: "nowrap",
            top: "18%",
            left: "11.5vw",
          }}>
            Unser
          </span>
          <span style={{
            fontFamily: serif,
            fontWeight: 700,
            fontSize: "clamp(100px, 16vw, 240px)",
            lineHeight: 1,
            color: "#1a1817",
            whiteSpace: "nowrap",
            userSelect: "none",
            letterSpacing: "-0.03em",
            paddingRight: "clamp(24px, 3vw, 48px)",
            display: "block",
          }}>
            Ansatz
          </span>
        </div>
      </div>

    </section>
  );
}
