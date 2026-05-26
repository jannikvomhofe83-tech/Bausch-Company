import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { HeroInsights } from "./components/HeroInsights";
import { Blog32 } from "./components/Blog32";
import { LeadMagnetTeaser } from "./components/LeadMagnetTeaser";
import { SocialSection } from "./components/SocialSection";
import { Footer6 } from "./components/Footer6";

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      <HeroInsights />
      <div id="artikel"><Blog32 /></div>
      <LeadMagnetTeaser />
      <SocialSection />
      <Footer6 />
    </div>
  );
}
