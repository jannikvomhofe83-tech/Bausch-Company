import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { Header123 } from "./components/Header123";
import { BranchenGrid } from "./components/BranchenGrid";
import { Cta33 } from "./components/Cta33";
import { Footer6 } from "./components/Footer6";

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      <Header123 />
      <BranchenGrid />
      <Cta33 />
      <Footer6 />
    </div>
  );
}
