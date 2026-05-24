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
            <p className="mb-3 font-semibold md:mb-4">Vorteile</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Was uns im Handel unterscheidet
            </h2>
            <p className="md:text-md">
              Wir arbeiten nicht wie klassische Recruiter. Wir verstehen die
              Besonderheiten des Handels und besetzen Positionen, die halten.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Über uns" variant="secondary">
                Über uns
              </Button>
              <Button
                title="Mehr"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Mehr
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
                Branchenkenntnis
              </h3>
              <p>
                Seit 2005 begleiten wir Handelsunternehmen durch Wechsel und
                Wachstum. Wir kennen die Anforderungen, die Fallstricke, die
                Chancen.
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
                Exklusive Netzwerke
              </h3>
              <p>
                Unsere Kandidaten sind nicht auf dem offenen Markt. Sie sind
                Führungskräfte mit Handelsblick, die gezielt zu Ihnen passen.
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
                Vertraulichkeit
              </h3>
              <p>
                Nachfolgen und Wechsel sind sensibel. Wir behandeln Ihre
                Prozesse mit der Diskretion, die Familienunternehmen verdienen.
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
                Nachhaltige Besetzung
              </h3>
              <p>
                Wir setzen nicht auf schnelle Platzierung. Unsere Kandidaten
                bleiben, weil die Rolle und die Kultur passen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
