"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ReservationCTA() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".reservation-content",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".reservation-content",
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="reserve-section"
      aria-labelledby="reservation-heading"
      className="relative overflow-hidden bg-mango-gold py-24 text-wok-black sm:py-28 lg:py-32"
    >
      {/* Background Typography */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display md:text-[10rem] text-[6rem] font-black leading-none text-wok-black/[0.035] text-center sm:text-[8rem] lg:text-[12rem]">
        KURO<br />SIZZLERS
      </div>

      {/* Content */}
      <div className="reservation-content relative z-10 mx-auto max-w-[900px] px-5 text-center sm:px-8">
        {/* Eyebrow */}
        <p className="font-display text-xs font-black uppercase tracking-[0.25em]">
          Reservations &amp; Bookings
        </p>

        {/* Heading */}
        <h2
          id="reservation-heading"
          className="mt-5 font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
        >
          YOUR TABLE
          <br />
          IS
          <br />
          <span className="text-white">WAITING.</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl font-body text-sm leading-7 text-wok-black/65 sm:text-base">
          Ready to experience Kuro? Get in touch with us to plan your visit,
          make a reservation, or enquire about your next gathering.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-wok-black px-7 font-body text-sm font-black uppercase tracking-wide text-mango-gold transition-all duration-300 hover:-translate-y-1 hover:bg-charcoal-night"
          >
            Book Your Table

            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="/menu"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-wok-black px-7 font-body text-sm font-black uppercase tracking-wide text-wok-black transition-all duration-300 hover:-translate-y-1 hover:bg-wok-black hover:text-primary"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </section>
  );
}