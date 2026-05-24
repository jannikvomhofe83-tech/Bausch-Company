"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Ansatz</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Strategischer Partner statt Personalvermittler
            </h1>
            <p className="md:text-md">
              Im Handel zählt Erfahrung. Wir kennen die Branche, ihre Rhythmen,
              ihre Risiken. Unsere Aufgabe ist nicht, schnell zu besetzen,
              sondern richtig zu besetzen.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Branchen" variant="secondary">
                Branchen
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
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
