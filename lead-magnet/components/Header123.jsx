"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header123() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="ml-[5%]">
          <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Checkliste für erfolgreiche Nachfolge im Familienunternehmen
            </h2>
            <p className="md:text-md">
              Der praktische Leitfaden für Eigentümer, die ihre Nachfolge
              strukturiert gestalten wollen
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Button title="Herunterladen">Herunterladen</Button>
              <Button title="Sprechen" variant="secondary">
                Sprechen
              </Button>
            </div>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-2 items-start gap-6 sm:gap-8 md:gap-16">
          <div className="w-full">
            <img
              className="aspect-square size-full object-cover"
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 1"
            />
          </div>
          <div className="my-[15%] w-full">
            <img
              className="aspect-square size-full object-cover"
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
