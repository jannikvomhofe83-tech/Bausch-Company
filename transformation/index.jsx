import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { Header123 } from "./components/Header123";
import { Header62 } from "./components/Header62";
import { Layout396 } from "./components/Layout396";
import { Layout22 } from "./components/Layout22";
import { Layout373 } from "./components/Layout373";
import { Cta33 } from "./components/Cta33";
import { Footer6 } from "./components/Footer6";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Header123 />
      <Header62 />
      <div id="schwerpunkte"><Layout396 /></div>
      <div id="vorgehen"><Layout22 /></div>
      <div id="praxis"><Layout373 /></div>
      <Cta33 />
      <Footer6 />
    </div>
  );
}
