"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { RxChevronDown } from "react-icons/rx";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  {
    label: "Home",
    to: "/",
    children: [
      { label: "Zielgruppen", to: "/#zielgruppen" },
      { label: "Nachfolge", to: "/#nachfolge" },
      { label: "Wachstum", to: "/#wachstum" },
      { label: "Transformation", to: "/#transformation" },
      { label: "Unser Ansatz", to: "/#ansatz" },
      { label: "Vorgehen", to: "/#prozess" },
      { label: "FAQ", to: "/#faq" },
    ],
  },
  {
    label: "Nachfolge",
    to: "/nachfolge",
    children: [
      { label: "Herausforderungen", to: "/nachfolge#herausforderungen" },
      { label: "Methodik", to: "/nachfolge#methodik" },
      { label: "Aus der Praxis", to: "/nachfolge#praxis" },
    ],
  },
  {
    label: "Führung",
    to: "/fuehrung",
    children: [
      { label: "Rollen", to: "/fuehrung#rollen" },
      { label: "Situationen", to: "/fuehrung#situationen" },
      { label: "Unterschied", to: "/fuehrung#unterschied" },
      { label: "Prozess", to: "/fuehrung#prozess" },
    ],
  },
  {
    label: "Transformation",
    to: "/transformation",
    children: [
      { label: "Schwerpunkte", to: "/transformation#schwerpunkte" },
      { label: "Erfahrung", to: "/transformation#vorgehen" },
      { label: "Aus der Praxis", to: "/transformation#praxis" },
    ],
  },
  {
    label: "Branchen",
    to: "/branchen",
    children: [
      { label: "Maschinenbau", to: "/maschinenbau" },
      { label: "Handel", to: "/handel" },    ],
  },
  {
    label: "Insights",
    to: "/insights",
    children: [
      { label: "Artikel", to: "/insights#artikel" },
      { label: "Nach Thema", to: "/insights#themen" },
      { label: "Lead Magnet", to: "/lead-magnet" },
    ],
  },
  {
    label: "Über uns",
    to: "/ueber-uns",
    children: [
      { label: "Haltung", to: "/ueber-uns#haltung" },
      { label: "Team", to: "/ueber-uns#team" },
      { label: "Grundsätze", to: "/ueber-uns#grundsaetze" },
      { label: "Stärken", to: "/ueber-uns#prinzipien" },
    ],
  },
];

const navLinkStyle = {
  fontFamily: "'EB Garamond', Georgia, serif",
  fontSize: 13,
  fontWeight: 500,
  color: "#1a1817",
  textDecoration: "none",
  letterSpacing: "0.01em",
  whiteSpace: "nowrap",
};

function NavDropdownItem({ item, isMobile, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => { if (!isMobile) setIsOpen(true); };
  const handleMouseLeave = () => { if (!isMobile) setIsOpen(false); };
  const handleToggle     = () => { if (isMobile)  setIsOpen((prev) => !prev); };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex w-full items-center justify-center lg:w-auto lg:flex-none lg:justify-start">
        <Link
          to={item.to}
          className="py-3 lg:pl-4 lg:py-2"
          style={navLinkStyle}
          onClick={() => { onClose?.(); }}
        >
          {item.label}
        </Link>
        <button
          className="px-2 py-3 lg:pr-4 lg:py-2"
          onClick={handleToggle}
          style={{ color: "#1a1817" }}
        >
          <motion.span
            variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
            animate={isOpen ? "rotated" : "initial"}
            transition={{ duration: 0.3 }}
          >
            <RxChevronDown />
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={{
              open:  { visibility: "visible", opacity: 1, display: "block", y: 0 },
              close: { visibility: "hidden",  opacity: 0, display: "none",  y: "25%" },
            }}
            animate="open"
            initial="close"
            exit="close"
            transition={{ duration: 0.2 }}
            style={{
              background: "rgba(232,227,218,0.96)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderTop: "2px solid #00693C",
            }}
            className="lg:absolute lg:left-0 lg:top-full lg:z-50 lg:min-w-[160px] lg:p-2"
          >
            {item.children.map((child) => (
              <Link
                key={child.to}
                to={child.to}
                className="block py-2 text-center text-sm lg:px-4 lg:py-2 lg:text-left"
                style={{ ...navLinkStyle, fontSize: 12 }}
                onClick={() => { setIsOpen(false); onClose?.(); }}
              >
                {child.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu  = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const animateMobileMenu           = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen ? ["open", "rotatePhase"] : "closed";

  return (
    <section
      id="relume"
      className="flex w-full items-center lg:min-h-18 lg:px-[5%]"
      style={{
        background: scrolled ? "rgba(247,244,239,0.97)" : "transparent",
        borderTop: "3px solid #00693C",
        borderBottom: scrolled ? "1px solid rgba(26,24,23,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link to="/" onClick={closeMobileMenu} style={{ display: "flex", alignItems: "center" }}><img src="/bild-23.png" alt="Bausch &amp; Company" style={{ height: 44, width: "auto", display: "block", mixBlendMode: "multiply" }} /></Link>

          {/* Mobile: Kontakt + Burger */}
          <div className="flex items-center gap-4 lg:hidden">
            <Link to="/kontakt" onClick={closeMobileMenu} style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 11, fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", textDecoration: "none",
              background: "#00693C", color: "#fff",
              padding: "7px 14px", borderRadius: "100px",
            }}>
              Kontakt
            </Link>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={toggleMobileMenu}
            >
              <motion.span className="my-[3px] h-0.5 w-6 bg-black" animate={animateMobileMenuButtonSpan}
                variants={{ open: { translateY: 8, transition: { delay: 0.1 } }, rotatePhase: { rotate: -45, transition: { delay: 0.2 } }, closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } } }} />
              <motion.span className="my-[3px] h-0.5 w-6 bg-black" animate={animateMobileMenu}
                variants={{ open: { width: 0, transition: { duration: 0.1 } }, closed: { width: "1.5rem", transition: { delay: 0.3, duration: 0.2 } } }} />
              <motion.span className="my-[3px] h-0.5 w-6 bg-black" animate={animateMobileMenuButtonSpan}
                variants={{ open: { translateY: -8, transition: { delay: 0.1 } }, rotatePhase: { rotate: 45, transition: { delay: 0.2 } }, closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } } }} />
            </button>
          </div>
        </div>

        {/* Nav items */}
        <motion.div
          variants={{
            open:  { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          animate={animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden overflow-y-auto px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:overflow-visible lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {NAV_ITEMS.map((item) => (
            <NavDropdownItem
              key={item.to}
              item={item}
              isMobile={isMobile}
              onClose={closeMobileMenu}
            />
          ))}
        </motion.div>

        {/* Desktop: Kontakt button */}
        <div className="hidden justify-self-end lg:block">
          <Link to="/kontakt" style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", textDecoration: "none",
            background: "#00693C", color: "#fff",
            padding: "9px 20px", borderRadius: "100px",
            display: "inline-block",
          }}>
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
