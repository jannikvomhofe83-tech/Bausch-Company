import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { Header62 } from "./components/Header62";
import { Cta32 } from "./components/Cta32";
import { Contact6 } from "./components/Contact6";
import { Layout373 } from "./components/Layout373";
import { Contact15 } from "./components/Contact15";
import { Footer6 } from "./components/Footer6";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Header62 />
      <div id="erstgespraech"><Cta32 /></div>
      <div id="formular"><Contact6 /></div>
      <Layout373 />
      <Contact15 />
      <Footer6 />
    </div>
  );
}
