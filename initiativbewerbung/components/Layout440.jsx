"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout440() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Kandidaten</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Wir denken anders über Kandidaten
            </h2>
          </div>
          <div className="mx-[7.5%] md:mt-48">
            <p className="md:text-md">
              Bausch & Company ist kein klassisches Recruiter-Netzwerk. Wir
              verstehen Ihre Karriereziele, nicht nur Ihre Qualifikationen. Mit
              uns finden Sie Rollen, die zu Ihren Werten passen.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Mehr erfahren" variant="secondary">
                Mehr erfahren
              </Button>
              <Button
                title="Kontakt"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
