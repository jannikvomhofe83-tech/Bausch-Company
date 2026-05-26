import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function Header62() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(100px, 13vw, 160px) clamp(40px, 7%, 120px) clamp(60px, 8vw, 100px)",
    }}>

      <div style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}>
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
          Kontakt
        </p>
        <h1 style={{
          fontFamily: serif,
          fontWeight: 900,
          fontSize: "clamp(36px, 5.5vw, 80px)",
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          color: "#1a1817",
          margin: 0,
        }}>
          <div>Sprechen Sie</div>
          <div>mit uns.</div>
        </h1>
        <div style={{
          width: "clamp(80px, 10vw, 140px)",
          height: 3,
          background: "#FF5800",
          marginTop: "clamp(20px, 2.5vw, 32px)",
        }} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 6vw, 80px)",
      }}>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 400,
          lineHeight: 1.85,
          color: "rgba(26,24,23,0.65)",
          margin: 0,
        }}>
          Ohne Verpflichtung. Vertraulich. Strukturiert. Lassen Sie uns sprechen — und gemeinsam herausfinden, wie wir Ihnen bei der nächsten wichtigen Besetzungsentscheidung helfen können.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 400,
          lineHeight: 1.85,
          color: "rgba(26,24,23,0.65)",
          margin: 0,
        }}>
          Wir sind an zwei Standorten für Sie erreichbar — in München und Hamburg. Rufen Sie an, schreiben Sie uns, oder füllen Sie das Formular aus.
        </p>
      </div>

    </section>
  );
}
