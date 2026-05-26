import React from "react";

const serif = "'EB Garamond', Georgia, serif";

const inputStyle = {
  fontFamily: serif,
  fontSize: "clamp(14px, 1.1vw, 16px)",
  fontWeight: 400,
  color: "#1a1817",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(26,24,23,0.25)",
  outline: "none",
  padding: "10px 0",
  width: "100%",
  display: "block",
};

export function Cta32() {
  return (
    <section id="download" style={{
      background: "#fff",
      padding: "clamp(80px, 10vw, 140px) clamp(40px, 7%, 120px)",
      borderTop: "1px solid rgba(26,24,23,0.12)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(48px, 8vw, 120px)",
        alignItems: "start",
      }}>

        {/* Left — headline + description */}
        <div>
          <p style={{
            fontFamily: serif,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#FF5800",
            margin: 0,
            marginBottom: "clamp(16px, 2vw, 24px)",
          }}>
            Download
          </p>
          <h2 style={{
            fontFamily: serif,
            fontWeight: 900,
            fontSize: "clamp(28px, 3.5vw, 52px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#1a1817",
            margin: 0,
            marginBottom: "clamp(20px, 2.5vw, 32px)",
          }}>
            Ihre Daten.<br />Ihr Download.
          </h2>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 16px)",
            fontWeight: 400,
            lineHeight: 1.85,
            color: "rgba(26,24,23,0.6)",
            margin: 0,
          }}>
            Füllen Sie das Formular aus und erhalten Sie die Checkliste sofort per E-Mail.
            Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
          </p>
        </div>

        {/* Right — form */}
        <form style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2vw, 22px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(16px, 2vw, 24px)" }}>
            <input type="text" placeholder="Vorname" style={inputStyle} />
            <input type="text" placeholder="Nachname" style={inputStyle} />
          </div>
          <input type="email" placeholder="E-Mail-Adresse" style={inputStyle} />
          <input type="text" placeholder="Unternehmen (optional)" style={inputStyle} />
          <div style={{ paddingTop: "clamp(8px, 1vw, 16px)" }}>
            <button type="submit" style={{
              fontFamily: serif,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "#FF5800",
              color: "#fff",
              border: "none",
              padding: "16px 44px",
              borderRadius: "100px",
              cursor: "pointer",
              display: "inline-block",
            }}>
              Checkliste herunterladen
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
