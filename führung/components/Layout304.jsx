"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout304() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Prozess</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Vier Phasen zur richtigen Besetzung
            </h2>
            <p className="md:text-md">
              Wir arbeiten strukturiert und transparent. Jede Phase hat ein
              klares Ziel und baut auf der vorherigen auf.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Eins: Bedarfsklärung
              </h3>
              <p>
                Wir verstehen zuerst, was die Rolle wirklich braucht und welche
                Anforderungen realistisch sind.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Zwei: Anforderungsprofil
              </h3>
              <p>
                Gemeinsam definieren wir das Profil der Führungskraft, die zu
                Ihrem Unternehmen passt.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Drei: Auswahl und Gespräche
              </h3>
              <p>
                Wir führen diskrete Gespräche mit geeigneten Kandidaten und
                bereiten Sie auf intensive Interviews vor.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Vier: Integration
              </h3>
              <p>
                Nach der Zusage begleiten wir die ersten Monate, um Erfolg zu
                sichern.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="Kandidaten" variant="secondary">
            Kandidaten
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
    </section>
  );
}
