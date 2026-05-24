"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout31() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Vertraute Beziehungen
                </h1>
                <p>
                  Jahrelange Partnerschaften mit Eigentümern und
                  Führungskräften.
                </p>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Erkunden"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Erkunden
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 2"
                  />
                </div>
                <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Regionale Expertise
                </h1>
                <p>
                  Tiefes Verständnis für die Besonderheiten des
                  DACH-Mittelstands.
                </p>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Erkunden"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Erkunden
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 3"
                  />
                </div>
                <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Branchenspezifisches Wissen
                </h1>
                <p>
                  Von Maschinenbau bis Logistik – wir kennen die Anforderungen.
                </p>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Erkunden"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Erkunden
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 4"
                  />
                </div>
                <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Diskrete Vermittlung
                </h1>
                <p>
                  Vertraulichkeit ist nicht verhandelbar, sondern Grundlage
                  unserer Arbeit.
                </p>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Erkunden"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Erkunden
                  </Button>
                </div>
              </div>
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
