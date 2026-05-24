"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Timeline17() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Erfahrung</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Zwei Jahrzehnte im deutschen Gesundheitsmarkt
            </h2>
            <p className="md:text-md">
              Seit 2005 begleiten wir Familienunternehmen im Gesundheitswesen.
              Wir kennen die Branche, ihre Rhythmen, ihre Anforderungen.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Kontakt" variant="secondary">
                Kontakt
              </Button>
              <Button
                title="→"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                →
              </Button>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row">
          <div className="absolute left-0 top-1.5 z-10 hidden h-1 w-16 bg-gradient-to-r from-background-primary to-transparent md:block" />
          <div className="flex flex-col md:flex-row">
            <div className="relative flex gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
                <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              </div>
              <div className="mb-6 px-3 md:mb-0 md:text-center">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">2005</h3>
                <p>
                  Gründung. Erste Mandate in Kliniken und Praxisnetzen der
                  DACH-Region.
                </p>
              </div>
            </div>
            <div className="relative flex gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
                <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              </div>
              <div className="mb-6 px-3 md:mb-0 md:text-center">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">2010</h3>
                <p>
                  Spezialisierung auf Nachfolgeplanung in Familiengeführten
                  Gesundheitsunternehmen beginnt.
                </p>
              </div>
            </div>
            <div className="relative flex gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
                <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              </div>
              <div className="mb-6 px-3 md:mb-0 md:text-center">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">2015</h3>
                <p>
                  Erweiterung auf Führungsrollen in Digitalisierung und
                  Qualitätsmanagementsystemen.
                </p>
              </div>
            </div>
            <div className="relative flex gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
                <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
              </div>
              <div className="mb-6 px-3 md:mb-0 md:text-center">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">2020</h3>
                <p>
                  Transformation und Reorganisation während Pandemie. Neue
                  Geschäftsmodelle entstehen.
                </p>
              </div>
            </div>
            <div className="relative flex gap-4 md:flex-col md:gap-0">
              <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
                <div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full hidden md:block" />
              </div>
              <div className="mb-6 px-3 md:mb-0 md:text-center">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">2024</h3>
                <p>
                  Über 200 erfolgreiche Platzierungen in Gesundheitsunternehmen.
                  Vertrauen wächst.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-1.5 z-0 hidden h-1 w-16 bg-gradient-to-l from-background-primary to-transparent md:block" />
        </div>
      </div>
    </section>
  );
}
