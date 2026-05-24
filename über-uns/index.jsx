import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { Header62 } from "./components/Header62";
import { Layout145 } from "./components/Layout145";
import { Gallery5 } from "./components/Gallery5";
import { Layout373 } from "./components/Layout373";
import { Layout31 } from "./components/Layout31";
import { Cta33 } from "./components/Cta33";
import { Footer6 } from "./components/Footer6";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Header62 />
      <div id="haltung"><Layout145 /></div>
      <div id="team"><Gallery5 /></div>
      <div id="grundsaetze"><Layout373 /></div>
      <div id="prinzipien"><Layout31 /></div>
      <Cta33 />
      <Footer6 />
    </div>
  );
}
