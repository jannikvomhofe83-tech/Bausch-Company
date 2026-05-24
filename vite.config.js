import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Alle App-Routen — damit Vite bei diesen Pfaden immer index.html zurückgibt
// statt die gleichnamigen Ordner als JS-Module zu servieren
const APP_ROUTES = [
  "/nachfolge", "/fuehrung", "/transformation", "/branchen",
  "/maschinenbau", "/handel", "/bau", "/gesundheit", "/tech",
  "/konsumgueter", "/logistik", "/dienstleistung",
  "/insights", "/ueber-uns", "/kontakt", "/lead-magnet",
  "/kandidaten", "/initiativbewerbung",
];

function spaFallback() {
  return {
    name: "spa-fallback",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = (req.url ?? "/").split("?")[0].split("#")[0];
        // Nur umleiten wenn KEIN Datei-Extension vorhanden (verhindert, dass
        // Vite-Modul-Requests wie /insights/components/Navbar2.jsx blockiert werden)
        const hasExtension = /\.[a-zA-Z0-9]+$/.test(pathname);
        const isAppRoute = !hasExtension && APP_ROUTES.some(
          (r) => pathname === r || pathname.startsWith(r + "/")
        );
        if (isAppRoute) {
          req.url = "/index.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), spaFallback()],
});
