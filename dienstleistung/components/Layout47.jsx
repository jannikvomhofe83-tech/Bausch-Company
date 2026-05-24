"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Ansatz</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Ihr Sparringspartner, kein klassischer Headhunter
            </h2>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              Wir definieren Rollen präzise, bevor wir suchen. Das verhindert
              Fehlbesetzungen und spart Zeit. Die meisten Fehlentscheidungen
              entstehen nicht in der Auswahl, sondern in der unklaren Definition
              der Rolle.
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Anforderungsprofil
                </h6>
                <p>
                  Gemeinsam erarbeiten wir die genaue Rollenerwartung und
                  Kandidatenprofil.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Diskrete Suche
                </h6>
                <p>
                  Wir aktivieren unser Netzwerk gezielt, ohne Marktsignale zu
                  setzen.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Selektion" variant="secondary">
                Selektion
              </Button>
              <Button
                title="Persönliche Gespräche und Passprüfung zur Familie und Kultur."
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Persönliche Gespräche und Passprüfung zur Familie und Kultur.
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
