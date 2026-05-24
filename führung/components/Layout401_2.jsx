"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout401_2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Unterschied</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Was uns unterscheidet
            </h1>
            <p className="md:text-md">
              Wir sind nicht die klassische Personalvermittlung
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
              Wir verstehen Familienunternehmen
            </h3>
            <p>
              Nicht jede Führungskraft passt zu Familienunternehmen. Wir kennen
              die Anforderungen, die über das Fachliche hinausgehen.
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
              Strategischer Sparringspartner
            </h3>
            <p>
              Wir helfen nicht nur zu besetzen, sondern auch zu klären. Was
              braucht die Rolle wirklich? Welche Anforderungen sind realistisch?
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
              Vertraulichkeit ist nicht verhandelbar
            </h3>
            <p>
              Sensible Prozesse erfordern absolute Diskretion. Niemand erfährt
              von einer Suche, bevor es notwendig ist.
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
              Nachhaltige Besetzungen
            </h3>
            <p>
              Wir messen Erfolg nicht an schnellen Platzierungen, sondern an
              Kandidaten, die bleiben und wachsen.
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
