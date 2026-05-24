import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const sans = "'EB Garamond', Georgia, serif";

// ── FAQ data per category ────────────────────────────────────────

const categoryData = {
  Nachfolge: {
    color: "#00693C",
    faqs: [
      { q: "Wann sollte man mit der Nachfolgeplanung beginnen?", a: "Idealerweise drei bis fünf Jahre vor dem geplanten Übergabezeitpunkt. Je früher, desto mehr Optionen bleiben offen — für interne wie externe Kandidaten." },
      { q: "Was sind die häufigsten Fehler bei der Nachfolge?", a: "Zu spätes Handeln, unklare Rollendefinition und der Versuch, intern zu besetzen ohne ehrliche Eignungsprüfung. Viele Eigentümer unterschätzen, wie lange eine sorgfältige Nachfolge dauert." },
      { q: "Wie begleiten Sie den Übergabeprozess?", a: "Wir begleiten nicht nur die Suche, sondern auch die ersten Monate nach der Entscheidung — bis die neue Führung stabil im Unternehmen angekommen ist." },
    ],
  },
  Führung: {
    color: "#00693C",
    faqs: [
      { q: "Wie lange dauert eine Besetzung?", a: "Für C-Level-Positionen rechnen wir mit drei bis sechs Monaten. Wir arbeiten nicht schneller, sondern gründlicher — weil Qualität sich nicht beschleunigen lässt." },
      { q: "Warum nicht einfach intern nachfolgen?", a: "Interne Kandidaten sind oft die beste Lösung, wenn sie die richtige Vorbereitung erhalten. Manchmal braucht es aber externe Perspektive. Wir helfen Ihnen, das ehrlich zu bewerten." },
      { q: "Wie vertraulich ist der Prozess?", a: "Vertraulichkeit ist nicht verhandelbar. Wir sprechen mit niemandem über Ihre Suche ohne ausdrückliche Zustimmung — in jeder Phase des Mandats." },
    ],
  },
  Transformation: {
    color: "#FF5800",
    faqs: [
      { q: "Warum scheitern externe Manager oft in Familienunternehmen?", a: "Weil Kultur und Strukturen unterschätzt werden. Externe Manager bringen Methoden mit, die in Konzernen funktionieren — aber in gewachsenen Familienunternehmen auf Widerstand stoßen." },
      { q: "Wie begleiten Sie Transformationsprozesse?", a: "Wir definieren gemeinsam, welche Führung ein Unternehmen in seiner Transformationsphase wirklich braucht — und suchen dann gezielt nach genau dieser Person." },
      { q: "Ab welchem Umsatz lohnt sich externe Beratung?", a: "Wir begleiten Unternehmen ab einem Umsatz von ca. 20 Mio. Euro. Darunter fehlt oft die organisatorische Basis für eine externe Führungskraft auf C-Level." },
    ],
  },
  Branchen: {
    color: "#1a1817",
    faqs: [
      { q: "Welche Branchen kennen Sie am besten?", a: "Wir haben tiefe Erfahrung in Maschinenbau, Handel, Bau, Gesundheit, Tech und Logistik. Unsere Stärke liegt im produzierenden Mittelstand." },
      { q: "Arbeiten Sie auch mit kleineren Unternehmen?", a: "Ja, wir begleiten Unternehmen ab ca. 20 Mio. Euro Umsatz. Entscheidend ist nicht die Größe, sondern die strategische Bedeutung der zu besetzenden Position." },
      { q: "Haben Sie Referenzen aus meiner Branche?", a: "Sprechen Sie uns an — wir können im Erstgespräch konkrete Referenzprojekte nennen, die zu Ihrer Branche und Situation passen." },
    ],
  },
  "Über uns": {
    color: "#1a1817",
    faqs: [
      { q: "Was unterscheidet Sie von anderen Beratern?", a: "Wir beginnen jedes Mandat mit einer ehrlichen Situationsanalyse — bevor wir zu suchen beginnen. Über 95 % aller Mandate wurden erfolgreich abgeschlossen. Das ist kein Zufall, sondern das Ergebnis eines Prozesses, der Qualität vor Geschwindigkeit stellt." },
      { q: "Wie viele Mandate haben Sie bislang abgeschlossen?", a: "Seit der Gründung 2005 haben wir mehr als 120 Mandate erfolgreich abgeschlossen — europaweit, mit Schwerpunkt im DACH-Raum. Unsere durchschnittliche Suchdauer beträgt 9 Wochen." },
      { q: "Wo sind Sie tätig?", a: "Wir sind mit Büros in München (Stollbergstr. 22) und Hamburg (Große Theaterstraße 14) vertreten und arbeiten europaweit. Unser Schwerpunkt liegt im deutschsprachigen Mittelstand." },
    ],
  },
  Kontakt: {
    color: "#00693C",
    faqs: [
      { q: "Wie läuft ein Erstgespräch ab?", a: "Ein Erstgespräch dauert ca. 45 Minuten und ist kostenlos. Wir hören zu, stellen die richtigen Fragen und geben Ihnen eine erste ehrliche Einschätzung — ohne Verpflichtung." },
      { q: "Was kostet eine Suche?", a: "Unsere Gebührenmodelle sind transparent und an Erfolg gebunden. Im Erstgespräch nennen wir Ihnen konkrete Zahlen. Keine versteckten Kosten." },
      { q: "Können Kandidaten sich initiativ bewerben?", a: "Ja. Ihre Bewerbung bleibt vertraulich und wird nur bei passender Position geteilt — nie ohne Ihre ausdrückliche Zustimmung." },
    ],
  },
};

const allFaqs = Object.entries(categoryData).flatMap(([category, { faqs, color }]) =>
  faqs.map(faq => ({ ...faq, category, color }))
);

// ── SVG Icons ────────────────────────────────────────────────────

function IconNachfolge({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="13" r="6" stroke="#1a1817" strokeWidth="1.5"/>
      <path d="M4 32c0-6 3.8-10 9-10h2" stroke="#1a1817" strokeWidth="1.5"/>
      <circle cx="27" cy="17" r="5" stroke="#00693C" strokeWidth="1.5"/>
      <path d="M22 32c0-5 2.8-9 7-9" stroke="#00693C" strokeWidth="1.5"/>
      <line x1="19" y1="13" x2="24" y2="13" stroke="#1a1817" strokeWidth="1.5" strokeDasharray="2 2"/>
      <polyline points="21,10 24,13 21,16" stroke="#1a1817" strokeWidth="1.5"/>
    </svg>
  );
}

function IconFuehrung({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="19" cy="11" r="6" stroke="#1a1817" strokeWidth="1.5"/>
      <path d="M8 34c0-7 4.9-12 11-12h0c6.1 0 11 5 11 12" stroke="#1a1817" strokeWidth="1.5"/>
      <line x1="19" y1="22" x2="19" y2="15" stroke="#00693C" strokeWidth="1.5"/>
      <polyline points="15,19 19,15 23,19" stroke="#00693C" strokeWidth="1.5"/>
    </svg>
  );
}

function IconTransformation({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 19 A11 11 0 0 1 30 13" stroke="#1a1817" strokeWidth="1.5"/>
      <polyline points="26,9 30,13 26,17" stroke="#1a1817" strokeWidth="1.5"/>
      <path d="M30 19 A11 11 0 0 1 8 25" stroke="#FF5800" strokeWidth="1.5"/>
      <polyline points="12,29 8,25 12,21" stroke="#FF5800" strokeWidth="1.5"/>
    </svg>
  );
}

function IconBranchen({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="18" width="10" height="14" stroke="#1a1817" strokeWidth="1.5"/>
      <rect x="14" y="10" width="10" height="22" stroke="#1a1817" strokeWidth="1.5"/>
      <rect x="22" y="14" width="10" height="18" stroke="#FF5800" strokeWidth="1.5"/>
      <line x1="6" y1="32" x2="32" y2="32" stroke="#1a1817" strokeWidth="1.5"/>
    </svg>
  );
}

function IconUeberUns({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="13" r="5" stroke="#1a1817" strokeWidth="1.5"/>
      <circle cx="25" cy="13" r="5" stroke="#1a1817" strokeWidth="1.5"/>
      <path d="M4 32c0-6 3.8-10 9-10h12c5.2 0 9 4 9 10" stroke="#1a1817" strokeWidth="1.5"/>
      <line x1="19" y1="8" x2="19" y2="18" stroke="#00693C" strokeWidth="1.2"/>
    </svg>
  );
}

function IconKontakt({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="26" height="18" rx="3" stroke="#1a1817" strokeWidth="1.5"/>
      <path d="M6 11l13 9 13-9" stroke="#1a1817" strokeWidth="1.5"/>
      <line x1="14" y1="30" x2="14" y2="26" stroke="#00693C" strokeWidth="1.5"/>
      <line x1="24" y1="30" x2="24" y2="26" stroke="#00693C" strokeWidth="1.5"/>
      <line x1="12" y1="30" x2="26" y2="30" stroke="#00693C" strokeWidth="1.5"/>
    </svg>
  );
}

const categoryIcons = {
  Nachfolge:      IconNachfolge,
  Führung:        IconFuehrung,
  Transformation: IconTransformation,
  Branchen:       IconBranchen,
  "Über uns":     IconUeberUns,
  Kontakt:        IconKontakt,
};

// ── Modal ────────────────────────────────────────────────────────

function Modal({ category, onClose }) {
  const data = categoryData[category];
  const Icon = categoryIcons[category];
  const overlayRef = useRef(null);

  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) onClose(); }}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(26,24,23,0.45)",
        backdropFilter: "blur(4px)",
        zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        paddingTop: "calc(72px + 20px)",
      }}
    >
      <div style={{
        background: "#fff",
        borderRadius: 20,
        padding: "clamp(32px, 4vw, 52px)",
        maxWidth: 560,
        width: "100%",
        position: "relative",
        boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 20, right: 20,
            width: 32, height: 32, borderRadius: "50%",
            border: "none", background: "#f2f2f2",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            padding: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="1" y1="1" x2="11" y2="11" stroke="#1a1817" strokeWidth="1.6" strokeLinecap="round"/>
            <line x1="11" y1="1" x2="1" y2="11" stroke="#1a1817" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <Icon size={40} />
          <div>
            <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: data.color, margin: "0 0 4px" }}>
              Häufige Fragen
            </p>
            <h3 style={{ fontFamily: sans, fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", color: "#1a1817", margin: 0 }}>
              {category}
            </h3>
          </div>
        </div>

        {/* FAQs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {data.faqs.map((faq, i) => (
            <div key={i} style={{ borderTop: i === 0 ? "1px solid rgba(26,24,23,0.1)" : "1px solid rgba(26,24,23,0.1)", paddingTop: 20 }}>
              <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 15, color: "#1a1817", margin: "0 0 8px", lineHeight: 1.35 }}>
                {faq.q}
              </p>
              <p style={{ fontFamily: sans, fontWeight: 400, fontSize: 14, color: "rgba(26,24,23,0.6)", lineHeight: 1.75, margin: 0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(26,24,23,0.1)" }}>
          <Link
            to="/kontakt"
            onClick={onClose}
            style={{
              fontFamily: sans, fontSize: 12, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#fff", textDecoration: "none",
              background: data.color === "#1a1817" ? "#00693C" : data.color,
              padding: "13px 28px", borderRadius: 100,
              display: "inline-block",
            }}
          >
            Gespräch anfragen
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Category Item ────────────────────────────────────────────────

function CategoryItem({ label, onClick }) {
  const [hover, setHover] = useState(false);
  const Icon = categoryIcons[label];
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "none", border: "none", cursor: "pointer", padding: 0,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
      }}
    >
      <div style={{
        width: 80, height: 80,
        display: "flex", alignItems: "center", justifyContent: "center",
        transform: hover ? "translateY(-3px)" : "none",
        transition: "transform 0.2s ease",
      }}>
        <Icon size={44} />
      </div>
      <span style={{
        fontFamily: sans, fontSize: 13, fontWeight: 500,
        color: hover ? "#00693C" : "#1a1817",
        transition: "color 0.2s ease",
      }}>
        {label}
      </span>
    </button>
  );
}

// ── Main Component ───────────────────────────────────────────────

export function Faq2() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [query, setQuery] = useState("");

  const results = query.trim().length > 1
    ? allFaqs.filter(f =>
        f.q.toLowerCase().includes(query.toLowerCase()) ||
        f.a.toLowerCase().includes(query.toLowerCase()) ||
        f.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      {activeCategory && (
        <Modal category={activeCategory} onClose={() => setActiveCategory(null)} />
      )}

      {/* ── Section 1: Häufig gefragt ── */}
      <section style={{
        padding: "clamp(64px, 9vw, 120px) clamp(40px, 7%, 120px) clamp(56px, 8vw, 96px)",
        textAlign: "center",
      }}>
        <div style={{ position: "relative", display: "inline-block", marginBottom: "clamp(48px, 7vw, 80px)" }}>
          <img
            src="/bild-7.png"
            alt="Bausch & Company"
            style={{
              height: "clamp(120px, 16vw, 200px)",
              width: "auto",
              display: "block",
              objectFit: "contain",
              mixBlendMode: "multiply",
            }}
          />
          {/* Text over the feet */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            padding: "10px 20px 12px",
            whiteSpace: "nowrap",
          }}>
            <h2 style={{
              fontFamily: sans, fontWeight: 700,
              fontSize: "clamp(22px, 2.8vw, 38px)",
              letterSpacing: "-0.025em", color: "#1a1817",
              margin: "0 0 4px",
            }}>
              Häufig gefragt
            </h2>
            <p style={{
              fontFamily: sans, fontSize: "clamp(13px, 1vw, 15px)",
              color: "rgba(26,24,23,0.5)", margin: 0,
            }}>
              Wählen Sie ein Thema, um die häufigsten Fragen dazu zu sehen.
            </p>
          </div>
        </div>

        <div style={{
          display: "flex", justifyContent: "center", flexWrap: "wrap",
          gap: "clamp(28px, 5vw, 64px)",
        }}>
          {Object.keys(categoryData).map(label => (
            <CategoryItem
              key={label}
              label={label}
              onClick={() => setActiveCategory(label)}
            />
          ))}
        </div>
      </section>

      {/* ── Section 2: Suche ── */}
      <section style={{
        borderTop: "1px solid rgba(26,24,23,0.08)",
        padding: "clamp(56px, 8vw, 100px) clamp(40px, 7%, 120px) clamp(72px, 10vw, 130px)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: sans, fontWeight: 700,
          fontSize: "clamp(22px, 2.8vw, 38px)",
          letterSpacing: "-0.02em", color: "#1a1817",
          margin: "0 0 clamp(28px, 4vw, 44px)",
        }}>
          Nach weiteren Themen suchen
        </h2>

        {/* Search bar */}
        <div style={{
          maxWidth: 580, margin: "0 auto",
          position: "relative",
        }}>
          <div style={{
            display: "flex", alignItems: "center",
            background: "#f5f5f5",
            borderRadius: 14,
            padding: "0 20px",
            border: "1.5px solid transparent",
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginRight: 12 }}>
              <circle cx="7.5" cy="7.5" r="5.5" stroke="rgba(26,24,23,0.4)" strokeWidth="1.5"/>
              <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="rgba(26,24,23,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Suchen..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                fontFamily: sans, fontSize: 16, fontWeight: 400,
                color: "#1a1817", background: "transparent",
                border: "none", outline: "none",
                width: "100%", padding: "16px 0",
              }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "rgba(26,24,23,0.4)", fontSize: 16 }}
              >
                ×
              </button>
            )}
          </div>

          {/* Search results */}
          {results.length > 0 && (
            <div style={{
              marginTop: 8,
              background: "#fff",
              borderRadius: 14,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              overflow: "hidden",
              textAlign: "left",
            }}>
              {results.map((faq, i) => (
                <div
                  key={i}
                  onClick={() => { setActiveCategory(faq.category); setQuery(""); }}
                  style={{
                    padding: "16px 20px",
                    borderBottom: i < results.length - 1 ? "1px solid rgba(26,24,23,0.07)" : "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#f9f9f9"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: faq.color, margin: "0 0 4px" }}>
                    {faq.category}
                  </p>
                  <p style={{ fontFamily: sans, fontSize: 14, fontWeight: 500, color: "#1a1817", margin: 0 }}>
                    {faq.q}
                  </p>
                </div>
              ))}
            </div>
          )}

          {query.trim().length > 1 && results.length === 0 && (
            <p style={{ fontFamily: sans, fontSize: 14, color: "rgba(26,24,23,0.4)", marginTop: 16 }}>
              Keine Ergebnisse für „{query}" — schreiben Sie uns direkt.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
