"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout89() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Über den Autor</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              Johannes Bausch berät Familienunternehmen seit 2005
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Johannes Bausch hat mehr als zwei Jahrzehnte damit verbracht,
              Führungskräfte in Familienunternehmen zu platzieren. Er versteht
              die Spannungen zwischen Tradition und Wachstum, zwischen Familie
              und Geschäft. Seine Arbeit konzentriert sich darauf, die richtigen
              Menschen in die richtigen Rollen zu bringen, nicht nur auf dem
              Papier, sondern in der Realität des Unternehmens.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Kontakt" variant="secondary">
                Kontakt
              </Button>
              <Button
                title="Profil"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Profil
              </Button>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
