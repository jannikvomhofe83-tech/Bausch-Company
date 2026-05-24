"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";

function Highlight({ children, on }) {
  return (
    <span style={{
      backgroundImage: "linear-gradient(rgba(255,220,0,0.5), rgba(255,220,0,0.5))",
      backgroundSize: on ? "100% 88%" : "0% 88%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left 55%",
      transition: "background-size 0.35s ease",
    }}>
      {children}
    </span>
  );
}

export function Layout362() {
  const [ownerOn, setOwnerOn]         = useState(false);
  const [candidateOn, setCandidateOn] = useState(false);

  return (
    <section style={{
      padding: "clamp(72px, 10vw, 140px) clamp(40px, 7%, 120px)",
    }}>

      {/* Section-Header */}
      <div style={{ marginBottom: "clamp(48px, 6vw, 80px)", textAlign: "center" }}>
        <h2 style={{
          fontFamily: sans, fontWeight: 900,
          fontSize: "clamp(28px, 4vw, 58px)",
          lineHeight: 1.05, letterSpacing: "-0.03em",
          color: "#1a1817", marginBottom: 20,
        }}>
          Wir arbeiten für beide Seiten.
        </h2>
        <p style={{
          fontFamily: sans, fontSize: "clamp(14px, 1.1vw, 17px)",
          fontWeight: 400, color: "rgba(26,24,23,0.6)",
          lineHeight: 1.65, maxWidth: 680, margin: "0 auto",
        }}>
          Bausch & Company besetzt Schlüsselpositionen in Familienunternehmen im
          DACH-Raum — in Nachfolge-, Wachstums- und Transformationssituationen.
        </p>
      </div>

      {/* Zwei Zielgruppen */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px, 3vw, 40px)" }}>

        {/* Eigentümer */}
        <div style={{
          background: "#fff",
          borderTop: "3px solid #00693C",
          padding: "clamp(32px, 4vw, 56px)",
        }}>
          <p style={{
            fontFamily: sans, fontSize: 10, fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#00693C", marginBottom: 20,
          }}>
            Eigentümer & Geschäftsführung
          </p>
          <h3 style={{
            fontFamily: sans, fontWeight: 900,
            fontSize: "clamp(20px, 2.2vw, 34px)",
            lineHeight: 1.05, letterSpacing: "-0.03em",
            color: "#1a1817", marginBottom: 20,
          }}>
            Sie suchen<br />die richtige Führung.
          </h3>
          <p
            onMouseEnter={() => setOwnerOn(true)}
            onMouseLeave={() => setOwnerOn(false)}
            style={{
              fontFamily: sans, fontSize: "clamp(13px, 1vw, 15px)",
              fontWeight: 400, color: "rgba(26,24,23,0.62)",
              lineHeight: 1.7, marginBottom: 32, cursor: "default",
            }}
          >
            Die meisten Fehlbesetzungen entstehen{" "}
            <Highlight on={ownerOn}>nicht in der Auswahl —
            sondern in der unklaren Definition der Rolle.</Highlight>{" "}
            Wir sind{" "}
            <Highlight on={ownerOn}>kein klassischer Headhunter</Highlight>:
            Wir klären zuerst, in welcher Situation Ihr Unternehmen steht —
            dann suchen wir.{" "}
            <Highlight on={ownerOn}>Diskret, präzise und mit tiefem Verständnis
            für Eigentümerlogik.</Highlight>
          </p>
          <Link to="/nachfolge" style={{
            fontFamily: sans, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#00693C", textDecoration: "none",
            borderBottom: "1.5px solid rgba(0,105,60,0.4)",
            paddingBottom: 3, display: "inline-block",
          }}>
            Mehr erfahren →
          </Link>
        </div>

        {/* Kandidaten */}
        <div style={{
          background: "#fff",
          borderTop: "3px solid #FF5800",
          padding: "clamp(32px, 4vw, 56px)",
        }}>
          <p style={{
            fontFamily: sans, fontSize: 10, fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#FF5800", marginBottom: 20,
          }}>
            Kandidaten & Führungskräfte
          </p>
          <h3 style={{
            fontFamily: sans, fontWeight: 900,
            fontSize: "clamp(20px, 2.2vw, 34px)",
            lineHeight: 1.05, letterSpacing: "-0.03em",
            color: "#1a1817", marginBottom: 20,
          }}>
            Sie wollen<br />Familienunternehmen führen.
          </h3>
          <p
            onMouseEnter={() => setCandidateOn(true)}
            onMouseLeave={() => setCandidateOn(false)}
            style={{
              fontFamily: sans, fontSize: "clamp(13px, 1vw, 15px)",
              fontWeight: 400, color: "rgba(26,24,23,0.62)",
              lineHeight: 1.7, marginBottom: 32, cursor: "default",
            }}
          >
            Familienunternehmen sind kein Konzern — sie brauchen
            Führungskräfte, die{" "}
            <Highlight on={candidateOn}>Eigentümerlogik nicht nur verstehen,
            sondern leben.</Highlight>{" "}
            Wir vermitteln keine Profile, sondern klären zuerst:{" "}
            <Highlight on={candidateOn}>Welche Rolle passt wirklich
            zu Ihrer Erfahrung und Persönlichkeit?</Highlight>{" "}
            Dann verbinden wir gezielt —{" "}
            <Highlight on={candidateOn}>mit Unternehmen, die wirklich
            zu Ihnen passen.</Highlight>
          </p>
          <Link to="/kandidaten" style={{
            fontFamily: sans, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#FF5800", textDecoration: "none",
            borderBottom: "1.5px solid rgba(255,88,0,0.4)",
            paddingBottom: 3, display: "inline-block",
          }}>
            Mehr erfahren →
          </Link>
        </div>

      </div>
    </section>
  );
}
