import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { Header62 } from "./components/Header62";
import { Blog32 } from "./components/Blog32";
import { Blog36 } from "./components/Blog36";
import { Layout401 } from "./components/Layout401";
import { Cta32 } from "./components/Cta32";
import { Cta58 } from "./components/Cta58";
import { Footer6 } from "./components/Footer6";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Header62 />
      <div id="artikel"><Blog32 /></div>
      <Blog36 />
      <div id="themen"><Layout401 /></div>
      <Cta32 />
      <Cta58 />
      <Footer6 />
    </div>
  );
}
