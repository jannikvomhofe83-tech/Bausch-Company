import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { HeroMaschinenbau } from "./components/HeroMaschinenbau";
import { Footer6 } from "./components/Footer6";

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      <HeroMaschinenbau />
      <Footer6 />
    </div>
  );
}
