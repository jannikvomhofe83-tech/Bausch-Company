import React, { useState } from "react";

const serif = "'EB Garamond', Georgia, serif";

const labelStyle = {
  fontFamily: serif,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(26,24,23,0.5)",
  display: "block",
  marginBottom: 8,
};

const inputStyle = {
  fontFamily: serif,
  fontSize: "clamp(14px, 1.1vw, 16px)",
  fontWeight: 400,
  color: "#1a1817",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(26,24,23,0.2)",
  outline: "none",
  padding: "8px 0",
  width: "100%",
  display: "block",
};

export function Contact6() {
  const [role, setRole] = useState("");

  return (
    <section style={{
      background: "#fff",
      padding: "clamp(64px, 8vw, 100px) clamp(40px, 7%, 120px)",
      borderTop: "1px solid rgba(26,24,23,0.12)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        gap: "clamp(48px, 8vw, 120px)",
        alignItems: "start",
      }}>

        {/* Left: office addresses */}
        <div>
          <h2 style={{
            fontFamily: serif,
            fontWeight: 900,
            fontSize: "clamp(24px, 3vw, 44px)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "#1a1817",
            margin: 0,
            marginBottom: "clamp(40px, 5vw, 64px)",
          }}>
            Direkt sprechen.
          </h2>

          {/* München */}
          <div style={{ marginBottom: "clamp(32px, 4vw, 52px)" }}>
            <p style={{
              fontFamily: serif,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#00693C",
              margin: 0,
              marginBottom: "clamp(12px, 1.5vw, 18px)",
            }}>
              München
            </p>
            <p style={{
              fontFamily: serif,
              fontSize: "clamp(13px, 1vw, 16px)",
              fontWeight: 400,
              lineHeight: 1.85,
              color: "#1a1817",
              margin: 0,
            }}>
              Stollbergstr. 22<br />
              80539 München<br />
              Germany
            </p>
            <div style={{ marginTop: "clamp(10px, 1.2vw, 14px)" }}>
              <a href="tel:+498939292939" style={{
                fontFamily: serif,
                fontSize: "clamp(13px, 1vw, 16px)",
                color: "#1a1817",
                textDecoration: "none",
                display: "block",
              }}>
                +49 89 39 29 29 39
              </a>
              <a href="mailto:info@bauschandcompany.com" style={{
                fontFamily: serif,
                fontSize: "clamp(13px, 1vw, 16px)",
                color: "#00693C",
                textDecoration: "none",
                display: "block",
                marginTop: 4,
              }}>
                info@bauschandcompany.com
              </a>
            </div>
          </div>

          {/* Hamburg */}
          <div>
            <p style={{
              fontFamily: serif,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#00693C",
              margin: 0,
              marginBottom: "clamp(12px, 1.5vw, 18px)",
            }}>
              Hamburg
            </p>
            <p style={{
              fontFamily: serif,
              fontSize: "clamp(13px, 1vw, 16px)",
              fontWeight: 400,
              lineHeight: 1.85,
              color: "#1a1817",
              margin: 0,
            }}>
              Große Theaterstraße 14<br />
              20354 Hamburg
            </p>
            <div style={{ marginTop: "clamp(10px, 1.2vw, 14px)" }}>
              <a href="tel:+494075112112" style={{
                fontFamily: serif,
                fontSize: "clamp(13px, 1vw, 16px)",
                color: "#1a1817",
                textDecoration: "none",
                display: "block",
              }}>
                +49 40 75 112 112
              </a>
              <a href="mailto:info@bauschandcompany.com" style={{
                fontFamily: serif,
                fontSize: "clamp(13px, 1vw, 16px)",
                color: "#00693C",
                textDecoration: "none",
                display: "block",
                marginTop: 4,
              }}>
                info@bauschandcompany.com
              </a>
            </div>
          </div>
        </div>

        {/* Right: contact form */}
        <form style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 2.5vw, 28px)" }}>

          {/* Name row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(16px, 2vw, 24px)" }}>
            <div>
              <label style={labelStyle}>Vorname</label>
              <input type="text" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Nachname</label>
              <input type="text" style={inputStyle} />
            </div>
          </div>

          {/* Email + Phone */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(16px, 2vw, 24px)" }}>
            <div>
              <label style={labelStyle}>E-Mail</label>
              <input type="email" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Telefon</label>
              <input type="text" style={inputStyle} />
            </div>
          </div>

          {/* Role selector */}
          <div>
            <label style={labelStyle}>Wer sind Sie?</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
              {["Geschäftsführer", "Gesellschafter", "Kandidat", "Berater", "Sonstiges"].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  style={{
                    fontFamily: serif,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "6px 14px",
                    border: `1px solid ${role === r ? "#1a1817" : "rgba(26,24,23,0.2)"}`,
                    background: role === r ? "#1a1817" : "transparent",
                    color: role === r ? "#fff" : "#1a1817",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label style={labelStyle}>Ihre Nachricht</label>
            <textarea
              style={{ ...inputStyle, minHeight: 140, resize: "vertical", lineHeight: 1.65 }}
              placeholder="Worum geht es?"
            />
          </div>

          {/* Privacy */}
          <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
            <input type="checkbox" style={{ marginTop: 3, accentColor: "#1a1817" }} />
            <span style={{
              fontFamily: serif,
              fontSize: 12,
              color: "rgba(26,24,23,0.55)",
              lineHeight: 1.6,
            }}>
              Ich akzeptiere die Datenschutzerklärung
            </span>
          </label>

          {/* Submit */}
          <div>
            <button
              type="submit"
              style={{
                fontFamily: serif,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                background: "#1a1817",
                color: "#fff",
                border: "none",
                padding: "14px 40px",
                cursor: "pointer",
              }}
            >
              Absenden
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
