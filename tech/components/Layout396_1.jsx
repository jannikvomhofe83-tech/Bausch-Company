"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout396_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Mandate</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Was wir im Tech-Sektor lösen
          </h1>
          <p className="md:text-md">Drei Szenarien, drei Lösungen.</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col justify-center border border-border-primary p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                CTO-Nachfolge in etabliertem Unternehmen
              </h2>
              <p>
                Der Gründer-CTO geht. Das Unternehmen hat 200 Mitarbeiter, drei
                Produktlinien, eine stabile Infrastruktur. Wir fanden einen
                Nachfolger, der die technische Tiefe mitbrachte und gleichzeitig
                verstanden hat, dass Familienunternehmen anders entscheiden als
                Konzerne.
              </p>
            </div>
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
          <div className="flex flex-col justify-center border border-border-primary p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Digitalisierungsleitung aufbauen
              </h2>
              <p>
                Ein Maschinenbauer brauchte jemanden, der die Digitalisierung
                vorantreibt, ohne die Kernkompetenz zu gefährden. Wir besetzten
                eine neue Rolle zwischen Geschäftsführung und Technik, jemanden,
                der beide Sprachen spricht.
              </p>
            </div>
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
          <div className="flex flex-col justify-center border border-border-primary p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Beirat mit Tech-Expertise
              </h2>
              <p>
                Ein Unternehmen in der Softwareentwicklung wollte externe
                Perspektive auf Skalierung und Produktstrategie. Wir
                vermittelten einen Beirat, der die Grenzen zwischen Wachstum und
                Familienkultur verstand.
              </p>
            </div>
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
