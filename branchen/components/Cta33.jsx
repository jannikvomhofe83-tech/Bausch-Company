import React, { useState } from "react";

const serif = "'EB Garamond', Georgia, serif";

const inputStyle = {
  fontFamily: serif,
  fontSize: "clamp(14px, 1.1vw, 16px)",
  fontWeight: 400,
  color: "#1a1817",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(26,24,23,0.25)",
  borderRadius: 0,
  padding: "clamp(10px, 1.2vw, 14px) 0",
  width: "100%",
  outline: "none",
  appearance: "none",
  WebkitAppearance: "none",
};

const labelStyle = {
  fontFamily: serif,
  fontSize: "clamp(9px, 0.75vw, 11px)",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(26,24,23,0.45)",
  display: "block",
  marginBottom: 4,
};

export function Cta33() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", unternehmen: "", email: "", telefon: "", branche: "", anliegen: "",
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section style={{
      background: "#fff",
      padding: "clamp(64px, 9vw, 120px) clamp(40px, 7%, 120px)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(48px, 8vw, 120px)",
        alignItems: "start",
      }}>

        {/* Left: text */}
        <div>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(9px, 0.75vw, 11px)",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#00693C",
            margin: "0 0 clamp(14px, 1.8vw, 22px)",
          }}>
            Kontakt
          </p>
          <h2 style={{
            fontFamily: serif,
            fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 52px)",
            lineHeight: 1.05,
            letterSpacing: "0.01em",
            color: "#1a1817",
            margin: "0 0 clamp(20px, 2.5vw, 32px)",
          }}>
            Sprechen wir über Ihre Branche.
          </h2>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(14px, 1.1vw, 17px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.65)",
            lineHeight: 1.75,
            margin: "0 0 clamp(16px, 2vw, 24px)",
          }}>
            Wir kennen die Strukturen und Entscheidungswege in Ihrem Sektor. Schildern Sie uns Ihr Anliegen — wir melden uns innerhalb von 24 Stunden.
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(14px, 1.1vw, 17px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.65)",
            lineHeight: 1.75,
            margin: 0,
          }}>
            Das Erstgespräch ist unverbindlich und kostenlos.
          </p>
        </div>

        {/* Right: form */}
        <div>
          {submitted ? (
            <div style={{ paddingTop: "clamp(24px, 3vw, 40px)" }}>
              <p style={{
                fontFamily: serif,
                fontSize: "clamp(20px, 2vw, 28px)",
                fontWeight: 700,
                color: "#1a1817",
                margin: "0 0 16px",
              }}>
                Vielen Dank.
              </p>
              <p style={{
                fontFamily: serif,
                fontSize: "clamp(14px, 1.1vw, 17px)",
                color: "rgba(26,24,23,0.65)",
                lineHeight: 1.75,
                margin: 0,
              }}>
                Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 2.5vw, 32px)" }}>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px, 2.5vw, 32px)" }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Ihr Name"
                    value={form.name}
                    onChange={set("name")}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Unternehmen</label>
                  <input
                    type="text"
                    placeholder="Ihr Unternehmen"
                    value={form.unternehmen}
                    onChange={set("unternehmen")}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px, 2.5vw, 32px)" }}>
                <div>
                  <label style={labelStyle}>E-Mail</label>
                  <input
                    type="email"
                    required
                    placeholder="ihre@email.de"
                    value={form.email}
                    onChange={set("email")}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Telefon</label>
                  <input
                    type="tel"
                    placeholder="+49 ..."
                    value={form.telefon}
                    onChange={set("telefon")}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Branche</label>
                <select
                  required
                  value={form.branche}
                  onChange={set("branche")}
                  style={{ ...inputStyle, cursor: "pointer", color: form.branche ? "#1a1817" : "rgba(26,24,23,0.4)" }}
                >
                  <option value="" disabled>Bitte auswählen</option>
                  <option value="Maschinenbau">Maschinenbau</option>
                  <option value="Handel">Handel</option>
                  <option value="Bau">Bau</option>
                  <option value="Gesundheit">Gesundheit</option>
                  <option value="Tech">Tech</option>
                  <option value="Konsumgüter">Konsumgüter</option>
                  <option value="Logistik">Logistik</option>
                  <option value="Dienstleistung">Dienstleistung</option>
                  <option value="Sonstige">Sonstige</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Ihr Anliegen</label>
                <textarea
                  rows={4}
                  placeholder="Beschreiben Sie kurz Ihre Situation..."
                  value={form.anliegen}
                  onChange={set("anliegen")}
                  style={{
                    ...inputStyle,
                    borderBottom: "none",
                    border: "1px solid rgba(26,24,23,0.25)",
                    padding: "clamp(10px, 1.2vw, 14px)",
                    resize: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(13px, 1vw, 15px)",
                  fontWeight: 500,
                  color: "#fff",
                  background: "#1a1817",
                  border: "none",
                  padding: "clamp(14px, 1.5vw, 18px) clamp(28px, 3vw, 44px)",
                  borderRadius: 4,
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  letterSpacing: "0.02em",
                }}
              >
                Anfrage senden
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
