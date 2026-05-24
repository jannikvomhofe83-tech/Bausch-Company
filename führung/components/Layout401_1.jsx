"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout401_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Situationen</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Wenn Besetzung entscheidend wird
            </h1>
            <p className="md:text-md">
              Wir kennen die Momente, die Handeln erfordern
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="flex flex-col justify-center border border-border-primary p-6">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Generationswechsel steht an
            </h3>
            <p>
              Die nächste Generation ist noch nicht bereit oder nicht
              interessiert. Eine externe Führungskraft kann den Übergang
              gestalten und das Unternehmen stabilisieren.
            </p>
            <div className="mt-5 md:mt-6">
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
          <div className="flex flex-col justify-center border border-border-primary p-6">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Wachstum verlangt neue Strukturen
            </h3>
            <p>
              Das Unternehmen ist gewachsen, aber die Führungsstruktur ist es
              nicht. Neue Rollen müssen geschaffen und mit den richtigen
              Menschen besetzt werden.
            </p>
            <div className="mt-5 md:mt-6">
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
          <div className="flex flex-col justify-center border border-border-primary p-6">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Internationalisierung braucht Expertise
            </h3>
            <p>
              Neue Märkte erfordern Führungskräfte mit globaler Erfahrung. Wir
              finden Menschen, die Familienunternehmen-Werte in internationale
              Kontexte übersetzen.
            </p>
            <div className="mt-5 md:mt-6">
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
          <div className="flex flex-col justify-center border border-border-primary p-6">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
              Neuaufstellung nach Krise
            </h3>
            <p>
              Nach Umbruch oder Fehlentscheidung braucht es Führungskräfte, die
              Vertrauen aufbauen und neue Richtung geben können.
            </p>
            <div className="mt-5 md:mt-6">
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
        </div>
      </div>
    </section>
  );
}
