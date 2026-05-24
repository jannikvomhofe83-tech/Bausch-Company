"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout401() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Branchen</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Unsere Sektoren
            </h1>
            <p className="md:text-md">
              Jahrzehnte Erfahrung in acht Kernbranchen des deutschsprachigen
              Mittelstands.
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
              Maschinenbau
            </h3>
            <p>Technische Führung und Nachfolge in der Industrie 4.0 Ära.</p>
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
              Handel
            </h3>
            <p>
              Generationswechsel in etablierten Handelsunternehmen und
              Distributionsnetzwerken.
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
              Bau
            </h3>
            <p>
              Projektmanagement und strategische Leitung in Bau und
              Immobilienwirtschaft.
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
              Gesundheit
            </h3>
            <p>Ärzte, Zahnärzte und Kliniken bei Übergabe und Expansion.</p>
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
