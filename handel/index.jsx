import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { HeroHandel } from "./components/HeroHandel";
import { Layout373 } from "./components/Layout373";
import { Layout504 } from "./components/Layout504";
import { Layout353 } from "./components/Layout353";
import { Cta33 } from "./components/Cta33";
import { Footer6 } from "./components/Footer6";

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      <HeroHandel />
      <Layout373 />
      <Layout504 />
      <Layout353 />
      <Cta33 />
      <Footer6 />
    </div>
  );
}
