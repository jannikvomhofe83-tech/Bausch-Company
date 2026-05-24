import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { Header123 } from "./components/Header123";
import { Layout373 } from "./components/Layout373";
import { Layout10 } from "./components/Layout10";
import { Layout373_1 } from "./components/Layout373_1";
import { Cta33 } from "./components/Cta33";
import { Cta33_1 } from "./components/Cta33_1";
import { Footer6 } from "./components/Footer6";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Header123 />
      <div id="herausforderungen"><Layout373 /></div>
      <div id="methodik"><Layout10 /></div>
      <div id="praxis"><Layout373_1 /></div>
      <Cta33 />
      <Cta33_1 />
      <Footer6 />
    </div>
  );
}
