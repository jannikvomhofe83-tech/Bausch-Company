"use client";

import React from "react";

export function Testimonial1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 md:mb-8">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
              alt="Webflow logo"
              className="max-h-14"
            />
          </div>
          <blockquote className="text-xl font-bold md:text-2xl">
            „Wir brauchten jemanden, der Ärzte versteht und gleichzeitig
            wirtschaftlich denkt. Bausch & Company hat genau das gefunden.
          </blockquote>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="size-16 min-h-16 min-w-16 rounded-full object-cover"
              />
            </div>
            <p className="font-semibold">Name Surname</p>
            <p>Position, Company name</p>
          </div>
        </div>
      </div>
    </section>
  );
}
