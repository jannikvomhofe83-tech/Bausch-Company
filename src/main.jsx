import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

import Startseite from "../startseite/index.jsx";
import Nachfolge from "../nachfolge/index.jsx";
import Kontakt from "../kontakt/index.jsx";
import Insights from "../insights/index.jsx";
import InsightsArtikel from "../insights-artikel/index.jsx";
import UeberUns from "../über-uns/index.jsx";
import LeadMagnet from "../lead-magnet/index.jsx";
import Kandidaten from "../kandidaten/index.jsx";
import Initiativbewerbung from "../initiativbewerbung/index.jsx";
import Branchen from "../branchen/index.jsx";
import Maschinenbau from "../maschinenbau/index.jsx";
import Handel from "../handel/index.jsx";
import Bau from "../bau/index.jsx";
import Gesundheit from "../gesundheit/index.jsx";
import Tech from "../tech/index.jsx";
import Konsumgueter from "../konsumgüter/index.jsx";
import Logistik from "../logistik/index.jsx";
import Dienstleistung from "../dienstleistung/index.jsx";
import Fuehrung from "../führung/index.jsx";
import Transformation from "../transformation/index.jsx";

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      const attempt = (tries) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (tries > 0) {
          setTimeout(() => attempt(tries - 1), 100);
        }
      };
      setTimeout(() => attempt(10), 50);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [hash, pathname]);
  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/nachfolge" element={<Nachfolge />} />
        <Route path="/fuehrung" element={<Fuehrung />} />
        <Route path="/transformation" element={<Transformation />} />
        <Route path="/branchen" element={<Branchen />} />
        <Route path="/maschinenbau" element={<Maschinenbau />} />
        <Route path="/handel" element={<Handel />} />
        <Route path="/bau" element={<Bau />} />
        <Route path="/gesundheit" element={<Gesundheit />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/konsumgueter" element={<Konsumgueter />} />
        <Route path="/logistik" element={<Logistik />} />
        <Route path="/dienstleistung" element={<Dienstleistung />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/nachfolge-im-mittelstand" element={<InsightsArtikel />} />
        <Route path="/insights/fehler-bei-geschaeftsfuehrern" element={<InsightsArtikel />} />
        <Route path="/insights/externe-manager-scheitern" element={<InsightsArtikel />} />
        <Route path="/insights-artikel" element={<InsightsArtikel />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/lead-magnet" element={<LeadMagnet />} />
        <Route path="/kandidaten" element={<Kandidaten />} />
        <Route path="/initiativbewerbung" element={<Initiativbewerbung />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
