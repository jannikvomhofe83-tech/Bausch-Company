import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { Header123 } from "./components/Header123";
import { Header62 } from "./components/Header62";
import { Layout401 } from "./components/Layout401";
import { Layout401_1 } from "./components/Layout401_1";
import { Layout401_2 } from "./components/Layout401_2";
import { Layout304 } from "./components/Layout304";
import { Cta33 } from "./components/Cta33";
import { Footer6 } from "./components/Footer6";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Header123 />
      <Header62 />
      <div id="rollen"><Layout401 /></div>
      <div id="situationen"><Layout401_1 /></div>
      <div id="unterschied"><Layout401_2 /></div>
      <div id="prozess"><Layout304 /></div>
      <Cta33 />
      <Footer6 />
    </div>
  );
}
