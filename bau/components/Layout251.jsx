"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout251() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Ansatz</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Wie wir Bauunternehmen führen
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Der Bau braucht Klarheit. Wir verstehen die Komplexität von
              Projekten, Fachkräften und Marktdruck. Unsere Besetzungen sind
              nicht generisch, sondern auf die Realität des Mittelstands
              zugeschnitten.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Nachfolge mit Struktur
            </h3>
            <p>
              Generationswechsel gelingt nur mit klarer Rollendefiniton und
              realistischer Vorbereitung.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Führung unter Druck
            </h3>
            <p>
              Digitalisierung und Fachkräftemangel verlangen Führungskräfte, die
              beide Welten verstehen.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Wachstum durch die richtigen Köpfe
            </h3>
            <p>
              Stagnation ist keine Option. Die Besetzung von Geschäftsführung
              und Beirat entscheidet über Zukunft.
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Anfragen</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Mehr
          </Button>
        </div>
      </div>
    </section>
  );
}
