import React from "react";
import { Link } from "react-router-dom";

const sans = "'EB Garamond', Georgia, serif";

const articles = [
  {
    category: "Nachfolge",
    categoryColor: "#00693C",
    date: "Mai 2025",
    title: "Wie gelingt Unternehmensnachfolge im Mittelstand?",
    link: "/insights/unternehmensnachfolge-mittelstand",
    image: "/insight-1.png",
    featured: true,
  },
  {
    category: "Führung",
    categoryColor: "#00693C",
    date: "Mai 2025",
    title: "Die 5 größten Fehler bei der Besetzung von Geschäftsführern",
    link: "/insights/fehler-besetzung-geschaeftsfuehrer",
    image: "/insight-2.png",
    featured: false,
  },
  {
    category: "Transformation",
    categoryColor: "#FF5800",
    date: "Mai 2025",
    title: "Warum externe Manager in Familienunternehmen scheitern",
    link: "/insights/externe-manager-familienunternehmen",
    image: "/insight-3.png",
    featured: false,
  },
];

function ReadMore({ to }) {
  return (
    <Link
      to={to}
      style={{
        fontFamily: sans, fontSize: 11, fontWeight: 700,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: "#1a1817", textDecoration: "none",
        display: "inline-flex", alignItems: "center", gap: 14,
        marginTop: 20,
      }}
    >
      Lesen
      <span style={{ display: "block", height: 1, width: 52, background: "#1a1817", flexShrink: 0 }} />
    </Link>
  );
}

function CategoryLabel({ label, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      <div style={{
        width: 9, height: 9, borderRadius: "50%",
        border: `1.5px solid ${color}`,
        flexShrink: 0,
      }} />
      <span style={{
        fontFamily: sans, fontSize: 11, fontWeight: 700,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: color,
      }}>
        {label}
      </span>
    </div>
  );
}

export function Blog36() {
  const [featured, ...rest] = articles;

  return (
    <section style={{
      padding: "clamp(48px, 7vw, 96px) clamp(40px, 7%, 120px) clamp(72px, 10vw, 140px)",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Giant section title */}
      <h2 style={{
        fontFamily: sans,
        fontWeight: 900,
        fontSize: "clamp(80px, 13vw, 180px)",
        lineHeight: 0.88,
        letterSpacing: "-0.04em",
        color: "#1a1817",
        margin: 0,
        marginBottom: "clamp(32px, 5vw, 64px)",
        position: "relative",
        zIndex: 2,
      }}>
        Insights.
      </h2>

      {/* Decorative hollow circle — right background */}
      <div style={{
        position: "absolute",
        right: "8%",
        top: "28%",
        width: "clamp(180px, 24vw, 340px)",
        height: "clamp(180px, 24vw, 340px)",
        borderRadius: "50%",
        border: "1px solid rgba(26,24,23,0.1)",
        pointerEvents: "none",
        zIndex: 1,
      }} />

      {/* Main grid: featured left, 2 smaller right */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "58% 42%",
        gap: "clamp(40px, 6vw, 80px)",
        alignItems: "start",
        position: "relative",
        zIndex: 2,
      }}>

        {/* Featured article */}
        <div style={{ display: "flex", flexDirection: "column", alignSelf: "stretch" }}>
          <Link to={featured.link} style={{ display: "block", textDecoration: "none" }}>
            <img
              src={featured.image}
              alt={featured.title}
              style={{
                width: "100%",
                aspectRatio: "3 / 2",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Link>

          <div style={{ paddingTop: "clamp(20px, 2.5vw, 32px)" }}>
            <CategoryLabel label={featured.category} color={featured.categoryColor} />
            <Link to={featured.link} style={{ textDecoration: "none" }}>
              <h3 style={{
                fontFamily: sans, fontWeight: 700,
                fontSize: "clamp(18px, 1.8vw, 26px)",
                lineHeight: 1.2, letterSpacing: "-0.02em",
                color: "#1a1817", margin: 0,
              }}>
                {featured.title}
              </h3>
            </Link>
            <p style={{
              fontFamily: sans, fontSize: 12, fontWeight: 400,
              color: "rgba(26,24,23,0.4)", marginTop: 10, marginBottom: 0,
            }}>
              {featured.date}
            </p>
            <ReadMore to={featured.link} />
          </div>

          {/* Editorial text centered in remaining white space */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "clamp(60px, 8vw, 100px)" }}>
            <p style={{
              fontFamily: sans,
              fontSize: "clamp(12px, 0.9vw, 14px)",
              fontWeight: 400,
              color: "rgba(26,24,23,0.7)",
              lineHeight: 1.85,
              maxWidth: 260,
              margin: 0,
              letterSpacing: "0.01em",
              textAlign: "left",
            }}>
              Wir schreiben über die Themen, die Familienunternehmen im Mittelstand wirklich bewegen — Nachfolge, Führungswechsel, Transformation. Keine Ratgeber. Keine Checklisten. Nur ehrliche Einschätzungen aus der Praxis.
            </p>
          </div>
        </div>

        {/* Two smaller articles stacked */}
        <div style={{
          paddingTop: "clamp(40px, 8vw, 120px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(36px, 5vw, 60px)",
        }}>
          {rest.map((article) => (
            <div key={article.title}>
              <Link to={article.link} style={{ display: "block", textDecoration: "none", marginBottom: "clamp(14px, 1.8vw, 22px)" }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: "100%",
                    aspectRatio: "3 / 2",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Link>
              <CategoryLabel label={article.category} color={article.categoryColor} />
              <Link to={article.link} style={{ textDecoration: "none" }}>
                <h3 style={{
                  fontFamily: sans, fontWeight: 700,
                  fontSize: "clamp(15px, 1.4vw, 20px)",
                  lineHeight: 1.25, letterSpacing: "-0.02em",
                  color: "#1a1817", margin: 0,
                }}>
                  {article.title}
                </h3>
              </Link>
              <p style={{
                fontFamily: sans, fontSize: 12, fontWeight: 400,
                color: "rgba(26,24,23,0.4)", marginTop: 8, marginBottom: 0,
              }}>
                {article.date}
              </p>
              <ReadMore to={article.link} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: all insights link */}
      <div style={{ marginTop: "clamp(48px, 6vw, 80px)", borderTop: "1px solid rgba(26,24,23,0.1)", paddingTop: "clamp(24px, 3vw, 36px)", display: "flex", justifyContent: "flex-end" }}>
        <Link
          to="/insights"
          style={{
            fontFamily: sans, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#1a1817", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 14,
          }}
        >
          Alle Insights
          <span style={{ display: "block", height: 1, width: 44, background: "#1a1817", flexShrink: 0 }} />
        </Link>
      </div>
    </section>
  );
}
