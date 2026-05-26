import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { Header62 } from "./components/Header62";
import { Contact6 } from "./components/Contact6";
import { Contact15 } from "./components/Contact15";
import { Footer6 } from "./components/Footer6";

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>
      <Header62 />
      <Contact6 />
      <Contact15 />
      <Footer6 />
    </div>
  );
}
