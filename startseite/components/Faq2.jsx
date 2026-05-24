"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Häufig gefragt
          </h2>
          <p className="md:text-md">
            Antworten auf die Fragen, die Eigentümer und Kandidaten stellen
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              Wie lange dauert eine Besetzung?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Das hängt von der Rolle und der Marktlage ab. Für
              C-Level-Positionen rechnen wir mit drei bis sechs Monaten. Wir
              arbeiten nicht schneller, sondern gründlicher. Qualität lässt sich
              nicht beschleunigen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Warum nicht einfach intern nachfolgen?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Interne Kandidaten sind oft die beste Lösung, wenn sie die
              richtige Vorbereitung erhalten. Manchmal braucht es aber externe
              Perspektive oder Fachkompetenz. Wir helfen Ihnen, das ehrlich zu
              bewerten.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Wie vertraulich ist der Prozess?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Vertraulichkeit ist nicht verhandelbar. Wir sprechen mit niemandem
              über Ihre Suche, ohne ausdrückliche Zustimmung. Das gilt für
              Kandidaten wie für Ihre Mitarbeiter.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Welche Branchen kennen Sie am besten?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Wir haben tiefe Erfahrung in Maschinenbau, Handel, Bau,
              Gesundheit, Tech und Logistik. Aber unsere Stärke liegt nicht in
              Spezialisierung, sondern in der Fähigkeit, schnell zu lernen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Was kostet eine Suche?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Unsere Gebührenmodelle sind transparent und an Erfolg gebunden. Im
              Erstgespräch besprechen wir Ihre Situation und nennen Ihnen
              konkrete Zahlen. Keine versteckten Kosten.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Können Kandidaten sich initiativ bewerben?
          </h4>
          <p className="md:text-md">
            Ja. Wir haben ein eigenes Bewerbungsformular für Führungskräfte, die
            in Familienunternehmen arbeiten möchten. Ihre Bewerbung bleibt
            vertraulich und wird nur mit passenden Positionen geteilt.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Noch Fragen offen?" variant="secondary">
              Noch Fragen offen?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
