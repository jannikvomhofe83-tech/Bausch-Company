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
            <p className="mb-3 font-semibold md:mb-4">Filter</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Nach Thema sortieren
            </h1>
            <p className="md:text-md">
              Wählen Sie einen Bereich, um relevante Artikel zu entdecken
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
              Nachfolge planen und gestalten
            </h3>
            <p>
              Generationswechsel erfordert Klarheit über Rollen und Erwartungen
            </p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Lesen"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Lesen
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
              Führung in etablierten Strukturen
            </h3>
            <p>Wie externe Kandidaten in Familienunternehmen Fuß fassen</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Lesen"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Lesen
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
              Wandel ohne Identitätsverlust
            </h3>
            <p>Transformation bewahrt Werte und schafft Raum für Wachstum</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Lesen"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Lesen
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
              Kandidaten für Ihre Zukunft
            </h3>
            <p>Talente, die Familienunternehmen verstehen und prägen</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Lesen"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Lesen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
