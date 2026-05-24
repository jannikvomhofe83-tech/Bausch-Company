"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout353() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <p className="mb-3 font-semibold md:mb-4">Warum</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Vier Gründe für Führung in Familienunternehmen
            </h2>
            <p className="md:text-md">
              Familiengeführte Betriebe bieten Karrieremöglichkeiten, die in
              Konzernen selten entstehen. Hier zählt Leistung, nicht
              Politisches.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Mehr erfahren" variant="secondary">
                Mehr erfahren
              </Button>
              <Button
                title="Kontakt"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Kontakt
              </Button>
            </div>
          </div>
          <div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "30%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Wertorientierung
              </h3>
              <p>
                Familienunternehmen handeln nach Prinzipien, nicht nach
                Quartalszielen. Diese Klarheit schafft Raum für echte
                Führungsarbeit.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "32%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Gestaltungsspielraum
              </h3>
              <p>
                Entscheidungen fallen schneller. Sie prägen die Zukunft direkt,
                nicht durch Gremien und Abstimmungen.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "34%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Langfristigkeit
              </h3>
              <p>
                Generationendenken ist Standard. Ihre Investitionen in
                Mitarbeiter und Prozesse wirken über Jahre, nicht Monate.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "36%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Nähe zur Familie
              </h3>
              <p>
                Persönliche Beziehungen zur Inhaberfamilie ermöglichen
                Verständnis für Ziele, die über Rendite hinausgehen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
