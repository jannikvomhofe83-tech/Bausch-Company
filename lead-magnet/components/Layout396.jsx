"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout396() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Inhalt</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Sechs Punkte, die zählen
          </h1>
          <p className="md:text-md">
            Die Checkliste deckt die kritischen Entscheidungen ab
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col justify-center border border-border-primary p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Rollenklarheit vor Besetzung
              </h2>
              <p>Wer macht was, und warum. Ohne Klarheit keine gute Wahl.</p>
            </div>
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
          <div className="flex flex-col justify-center border border-border-primary p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Kompetenzprofil definieren
              </h2>
              <p>Welche Fähigkeiten braucht der Nachfolger wirklich?</p>
            </div>
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
          <div className="flex flex-col justify-center border border-border-primary p-6 md:p-8">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Übergabetiming planen
              </h2>
              <p>Zu schnell ist riskant. Zu langsam kostet Optionen.</p>
            </div>
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
