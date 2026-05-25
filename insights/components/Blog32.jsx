"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const serif = "'EB Garamond', Georgia, serif";

const ALL_ARTICLES = [
  {
    category: "Nachfolge",
    date: "Mai 2025",
    readTime: "9 Min.",
    title: "Wie gelingt Unternehmensnachfolge im Mittelstand?",
    description: "Eine gut vorbereitete Übergabe stärkt das Unternehmen für Jahrzehnte — doch die wenigsten Eigentümer bereiten sie früh genug vor.",
    link: "/insights/unternehmensnachfolge-mittelstand",
    image: "/insight-1.png",
  },
  {
    category: "Führung",
    date: "Mai 2025",
    readTime: "7 Min.",
    title: "Die 5 größten Fehler bei der Besetzung von Geschäftsführern",
    description: "Wie Familienunternehmen bei der Führungsnachfolge typische Fallen vermeiden und die richtige Person finden.",
    link: "/insights/fehler-besetzung-geschaeftsfuehrer",
    image: "/insight-2.png",
  },
  {
    category: "Transformation",
    date: "Mai 2025",
    readTime: "8 Min.",
    title: "Warum externe Manager in Familienunternehmen scheitern",
    description: "Kulturfit entscheidet mehr als Qualifikation — Einblicke aus der Praxis des deutschen Mittelstands.",
    link: "/insights/externe-manager-familienunternehmen",
    image: "/insight-3.png",
  },
  {
    category: "Nachfolge",
    date: "April 2025",
    readTime: "6 Min.",
    title: "Wann ist der richtige Zeitpunkt für die Unternehmensnachfolge?",
    description: "Die meisten Eigentümer warten zu lange — und bezahlen den Preis mit einem schlechten Übergang.",
    link: "/insights/zeitpunkt-unternehmensnachfolge",
    image: "/insight-1.png",
  },
  {
    category: "Führung",
    date: "April 2025",
    readTime: "10 Min.",
    title: "Externe Führungskräfte in Familienunternehmen",
    description: "Wie Profis von außen erfolgreich in etablierte Strukturen und gewachsene Kulturen integriert werden.",
    link: "/insights/externe-fuehrungskraefte-familienunternehmen",
    image: "/insight-2.png",
  },
  {
    category: "Transformation",
    date: "März 2025",
    readTime: "8 Min.",
    title: "Restrukturierung ohne Kulturbruch",
    description: "Wie Mittelständler ihre Werte bewahren und gleichzeitig tiefgreifende Veränderungen erfolgreich gestalten.",
    link: "/insights/restrukturierung-ohne-kulturbruch",
    image: "/insight-3.png",
  },
  {
    category: "Nachfolge",
    date: "März 2025",
    readTime: "7 Min.",
    title: "Familienunternehmen ohne Familiennachfolger",
    description: "Wenn kein Kind die Führung übernimmt: Welche Optionen Eigentümer haben und wie sie die richtige wählen.",
    link: "/insights/familienunternehmen-ohne-nachfolger",
    image: "/insight-1.png",
  },
  {
    category: "Führung",
    date: "Februar 2025",
    readTime: "9 Min.",
    title: "Führungswechsel: Wie man ihn richtig kommuniziert",
    description: "Die Ankündigung eines Führungswechsels entscheidet oft über Vertrauen oder Unsicherheit im Team.",
    link: "/insights/fuehrungswechsel-kommunikation",
    image: "/insight-2.png",
  },
  {
    category: "Transformation",
    date: "Februar 2025",
    readTime: "6 Min.",
    title: "Digitalisierung im Mittelstand: Führung als Erfolgsfaktor",
    description: "Technologie allein verändert kein Unternehmen — die Führungskultur entscheidet über Erfolg oder Scheitern.",
    link: "/insights/digitalisierung-mittelstand-fuehrung",
    image: "/insight-3.png",
  },
];

const CATEGORIES = ["Alle Beiträge", "Nachfolge", "Führung", "Transformation"];
const PAGE_SIZE = 3;

export function Blog32() {
  const [activeCategory, setActiveCategory] = useState("Alle Beiträge");
  const [page, setPage] = useState(1);

  const filtered = activeCategory === "Alle Beiträge"
    ? ALL_ARTICLES
    : ALL_ARTICLES.filter(a => a.category === activeCategory);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;
  const hasLess = page > 1;

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
    setPage(1);
  };

  return (
    <section style={{
      padding: "clamp(64px, 9vw, 120px) clamp(40px, 7%, 120px)",
      background: "#fff",
    }}>

      {/* Header */}
      <div style={{ marginBottom: "clamp(40px, 5vw, 64px)", textAlign: "center" }}>
        <p style={{
          fontFamily: serif,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#00693C",
          margin: 0,
          marginBottom: 18,
        }}>
          Artikel
        </p>
        <h2 style={{
          fontFamily: serif,
          fontWeight: 700,
          fontSize: "clamp(28px, 3.5vw, 52px)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "#1a1817",
          margin: 0,
          marginBottom: 14,
        }}>
          Nachfolge im Mittelstand
        </h2>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(14px, 1.1vw, 18px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.55)",
          margin: 0,
        }}>
          Wie Familienunternehmen ihre Zukunft sichern und Führung neu denken
        </p>
      </div>

      {/* Category filter */}
      <div style={{ marginBottom: "clamp(32px, 4vw, 52px)" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <select
            value={activeCategory}
            onChange={handleCategoryChange}
            style={{
              fontFamily: serif,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#1a1817",
              background: "transparent",
              border: "1.5px solid rgba(26,24,23,0.25)",
              padding: "10px 44px 10px 18px",
              cursor: "pointer",
              outline: "none",
              appearance: "none",
              WebkitAppearance: "none",
              borderRadius: 0,
            }}
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <span style={{
            position: "absolute",
            right: 14,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            fontSize: 10,
            color: "#1a1817",
          }}>▾</span>
        </div>
      </div>

      {/* Articles list */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{ display: "flex", flexDirection: "column", gap: "clamp(28px, 4vw, 48px)" }}
        >
          {visible.map((article) => (
            <ArticleRow key={article.link} article={article} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Weitere Artikel / Weniger anzeigen buttons */}
      {(hasMore || hasLess) && (
        <div style={{
          marginTop: "clamp(40px, 5vw, 64px)",
          borderTop: "1px solid rgba(26,24,23,0.1)",
          paddingTop: "clamp(28px, 3vw, 44px)",
          display: "flex",
          justifyContent: "center",
          gap: 16,
        }}>
          {hasMore && (
            <button
              onClick={() => setPage(p => p + 1)}
              style={{
                fontFamily: serif,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#fff",
                background: "#1a1817",
                border: "none",
                padding: "13px 40px",
                borderRadius: "100px",
                cursor: "pointer",
              }}
            >
              Weitere Artikel
            </button>
          )}
          {hasLess && (
            <button
              onClick={() => setPage(1)}
              style={{
                fontFamily: serif,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#1a1817",
                background: "transparent",
                border: "1.5px solid rgba(26,24,23,0.25)",
                padding: "13px 40px",
                borderRadius: "100px",
                cursor: "pointer",
              }}
            >
              Weniger anzeigen
            </button>
          )}
        </div>
      )}
    </section>
  );
}

function ArticleRow({ article }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "clamp(160px, 22vw, 280px) 1fr",
      gap: "clamp(20px, 3.5vw, 52px)",
      alignItems: "center",
      borderTop: "1px solid rgba(26,24,23,0.08)",
      paddingTop: "clamp(24px, 3vw, 40px)",
    }}>
      <Link to={article.link} style={{ display: "block", textDecoration: "none", flexShrink: 0 }}>
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

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              border: "1.5px solid #00693C", flexShrink: 0,
            }} />
            <span style={{
              fontFamily: serif, fontSize: 11, fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#00693C",
            }}>{article.category}</span>
          </div>
          <span style={{
            fontFamily: serif, fontSize: 12,
            color: "rgba(26,24,23,0.4)", fontWeight: 400,
          }}>{article.readTime}</span>
        </div>

        <Link to={article.link} style={{ textDecoration: "none" }}>
          <h3 style={{
            fontFamily: serif, fontWeight: 700,
            fontSize: "clamp(17px, 1.6vw, 24px)",
            lineHeight: 1.2, letterSpacing: "-0.02em",
            color: "#1a1817", margin: 0, marginBottom: 10,
          }}>
            {article.title}
          </h3>
        </Link>

        <p style={{
          fontFamily: serif,
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.6)",
          margin: 0,
          lineHeight: 1.75,
        }}>
          {article.description}
        </p>

        <Link
          to={article.link}
          style={{
            fontFamily: serif, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#1a1817", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 14,
            marginTop: 18,
          }}
        >
          Lesen
          <span style={{ display: "block", height: 1, width: 52, background: "#1a1817", flexShrink: 0 }} />
        </Link>
      </div>
    </div>
  );
}
