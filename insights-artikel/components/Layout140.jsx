"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout140() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Kerngedanke</p>
        <p className="mb-5 text-lg font-bold leading-[1.4] md:mb-6 md:text-2xl">
          Die meisten Fehlentscheidungen entstehen nicht in der Auswahl, sondern
          in der unklaren Definition der Rolle.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Sprechen" variant="secondary">
            Sprechen
          </Button>
          <Button
            title="Teilen"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Teilen
          </Button>
        </div>
      </div>
    </section>
  );
}
