"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta32() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Ihre Daten, Ihr Download
          </h2>
          <p className="md:text-md">
            Füllen Sie das Formular aus und erhalten Sie die Checkliste sofort
            per E-Mail
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
            <form className="mb-4 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  id="vorname"
                  type="text"
                  placeholder="Vorname"
                />
                <Input
                  id="nachname"
                  type="text"
                  placeholder="Nachname"
                />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="E-Mail-Adresse"
              />
              <Input
                id="unternehmen"
                type="text"
                placeholder="Unternehmen (optional)"
              />
              <Button
                title="Checkliste herunterladen"
                variant="primary"
                size="sm"
                className="w-full items-center justify-center px-6 py-3"
              >
                Checkliste herunterladen
              </Button>
            </form>
            <p className="text-xs">
              Ihre Daten werden vertraulich behandelt und nicht weitergegeben
            </p>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="size-full object-cover"
          alt="Checkliste Vorschau"
        />
      </div>
    </section>
  );
}
