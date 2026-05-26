import React, { useState } from "react";

const sans = "'EB Garamond', Georgia, serif";

const columns = [
  {
    title: "Dienstleistungen",
    links: [
      { label: "Nachfolge",      href: "/nachfolge" },
      { label: "Führung",        href: "/fuehrung" },
      { label: "Transformation", href: "/transformation" },
      { label: "Branchen",       href: "/branchen" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Aktuelle Artikel", href: "/insights" },
      { label: "Nachfolge",        href: "/insights/nachfolge" },
      { label: "Führung",          href: "/insights/fuehrung" },
      { label: "Lead Magnet",      href: "/lead-magnet" },
    ],
  },
  {
    title: "Über uns",
    links: [
      { label: "Über Bausch & Company", href: "/ueber-uns" },
      { label: "Philosophie",           href: "/ueber-uns" },
      { label: "Netzwerk",              href: "/ueber-uns" },
      { label: "Erstgespräch",          href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum",             href: "/impressum" },
      { label: "Datenschutz",           href: "/datenschutz" },
      { label: "Nutzungsbedingungen",   href: "/nutzungsbedingungen" },
      { label: "Cookie-Einstellungen",  href: "#" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "Erstgespräch anfragen",     href: "/kontakt" },
      { label: "München: +49 89 39 29 29 39", href: "tel:+498939292939" },
      { label: "Hamburg: +49 40 75 112 112",  href: "tel:+4940751121120" },
      { label: "info@bauschandcompany.com",  href: "mailto:info@bauschandcompany.com" },
      { label: "LinkedIn",                  href: "#" },
    ],
  },
];

export function Footer6() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{
      padding: "clamp(56px, 8vw, 96px) clamp(40px, 7%, 120px) clamp(32px, 4vw, 48px)",
      borderTop: "1px solid rgba(26,24,23,0.1)",
    }}>

      {/* Newsletter row */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        flexWrap: "wrap", gap: 32,
        marginBottom: "clamp(44px, 6vw, 72px)",
      }}>
        <div>
          <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: 17, color: "#1a1817", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
            Newsletter
          </h2>
          <p style={{ fontFamily: sans, fontSize: 14, color: "rgba(26,24,23,0.5)", margin: 0 }}>
            Insights für Eigentümer von Familienunternehmen.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <input
            type="email"
            placeholder="E-Mail eingeben"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              fontFamily: sans, fontSize: 14, color: "#1a1817",
              border: "1px solid rgba(26,24,23,0.18)", borderRadius: 6,
              padding: "10px 16px", outline: "none",
              background: "#fff", minWidth: 220,
            }}
          />
          <button style={{
            fontFamily: sans, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#fff", background: "#1a1817",
            border: "none", borderRadius: 6, padding: "10px 22px",
            cursor: "pointer",
          }}>
            Abonnieren
          </button>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(26,24,23,0.08)", marginBottom: "clamp(40px, 5vw, 60px)" }} />

      {/* Link columns */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "clamp(20px, 3vw, 40px)",
        marginBottom: "clamp(48px, 6vw, 72px)",
      }}>
        {columns.map(col => (
          <div key={col.title}>
            <h3 style={{
              fontFamily: sans, fontWeight: 600, fontSize: 12,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "#1a1817", margin: "0 0 18px",
            }}>
              {col.title}
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {col.links.map(link => (
                <li key={link.label} style={{ marginBottom: 10 }}>
                  <a
                    href={link.href}
                    style={{ fontFamily: sans, fontSize: 13, color: "rgba(26,24,23,0.5)", textDecoration: "none" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#00693C"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(26,24,23,0.5)"}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(26,24,23,0.08)", marginBottom: 24 }} />

      {/* Bottom bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{
          fontFamily: sans, fontWeight: 800, fontSize: 15,
          color: "#1a1817", letterSpacing: "-0.02em",
        }}>
          Bausch & Company
        </span>
        <p style={{ fontFamily: sans, fontSize: 12, color: "rgba(26,24,23,0.35)", margin: 0 }}>
          © {new Date().getFullYear()} Bausch & Company. Alle Rechte vorbehalten.
        </p>
      </div>

    </footer>
  );
}
