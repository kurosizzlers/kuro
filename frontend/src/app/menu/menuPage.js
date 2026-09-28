"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmokeEffect from "../components/effects/smokeEffect";
import Link from "next/link";

import MenuPDF from "../components/pdfDATA/menuPDF.js"

gsap.registerPlugin(ScrollTrigger);



export default function MenuPage() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      /*
       * =========================================================
       * HERO — PAGE LOAD
       * =========================================================
       */
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      heroTimeline.fromTo(
        ".menu-hero-content > *",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
        }
      );

      /*
       * =========================================================
       * MENU SECTION — SCROLL
       * =========================================================
       */
      gsap.fromTo(
        ".menu-section-intro",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".menu-section-intro",
            start: "top 82%",
            once: true,
          },
        }
      );

      

      

      /*
       * =========================================================
       * FINAL CTA — SCROLL
       * =========================================================
       */
      gsap.fromTo(
        ".menu-cta-content",
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
            trigger: ".menu-cta-content",
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    {
      scope: pageRef,
    }
  );

  return (
    <main ref={pageRef} className="w-full">
      {/* =====================================================
    HERO
====================================================== */}
<section
  aria-labelledby="menu-title"
  className="relative flex min-h-[72vh] w-full items-center overflow-hidden bg-wok-black px-5 py-24 text-white sm:px-8 lg:min-h-[78vh] lg:px-12"
>
  {/* Smoke */}
    <SmokeEffect opacity={0.55} />

  {/* Ambient gold glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />

  {/* Fine editorial grid */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />

  {/* Hero content */}
  <div className="relative z-10 mx-auto w-full max-w-[1360px]">
    <div className="menu-hero-content mx-auto flex max-w-5xl flex-col items-center text-center">

      {/* Eyebrow */}
      <span className="inline-flex items-center gap-2 rounded-full border border-mango-gold/40 bg-primary/10 px-4 py-2 font-body text-[10px] font-black uppercase tracking-[0.25em] text-mango-gold sm:text-xs">
        Kuro Sizzlers
      </span>

      {/* Heading */}
      <h1
        id="menu-title"
        className="mt-7 font-display text-[clamp(3.5rem,8vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.055em]"
      >
        EXPLORE THE
        <br />
        <span className="text-primary">KURO MENU.</span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-2xl font-body text-sm leading-7 text-white/55 sm:text-base">
        Discover Continental, Chinese and Multi-Cuisine favourites,
        signature sizzlers, wok creations, pizzas, pastas and indulgent
        desserts.
      </p>

      {/* Decorative divider */}
      <div className="mt-12 flex items-center gap-4">
        <span className="h-px w-16 bg-primary/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="h-px w-16 bg-primary/50" />
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display text-[9px] font-bold uppercase tracking-[0.35em] text-white/25">
    Scroll to discover
  </span>
</section>

      {/* =====================================================
          MENU PDF
      ====================================================== */}
      <section
        aria-labelledby="menu-pdf-title"
        className="w-full bg-surface-cream py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
          {/* Section intro */}
          <div className="menu-section-intro mb-10 text-center sm:mb-12">
            <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-mustard-deep">
              Our Menu
            </p>

            <h2
              id="menu-pdf-title"
              className="mt-2 font-display text-3xl font-black uppercase leading-tight text-wok-black sm:text-4xl"
            >
              FIRE. FLAVOUR. CRAFT.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-7 text-on-surface-muted sm:text-base">
              Take a look through the complete Kuro Sizzlers menu and discover
              something made for your table.
            </p>
          </div>

          {/* PDF */}
          <div className="menu-pdf-container">
            <MenuPDF />
          </div>

          <p className="menu-pdf-note mt-4 text-center font-body text-xs text-on-surface-muted">
            Scroll inside the menu to explore all pages.
          </p>
        </div>
      </section>
            {/* =====================================================
    FINAL CTA
====================================================== */}
<section
  aria-labelledby="menu-cta-title"
  className="relative overflow-hidden bg-mango-gold py-24 text-wok-black sm:py-28 lg:py-32"
>
  {/* Background Typography */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display md:text-[10rem] text-[6rem] font-black leading-none text-wok-black/[0.035] text-center sm:text-[8rem] lg:text-[12rem]">
    KURO<br />SIZZLERS
  </div>

  {/* Content */}
  <div className="menu-cta-content relative z-10 mx-auto max-w-[900px] px-5 text-center sm:px-8">
    {/* Eyebrow */}
    <p className="font-display text-xs font-black uppercase tracking-[0.25em]">
      Experience Kuro
    </p>

    {/* Heading */}
    <h2
      id="menu-cta-title"
      className="mt-5 font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
    >
      READY
      <br />
      FOR THE
      <br />
      <span className="text-white">
        SIZZLE?
      </span>
    </h2>

    {/* Description */}
    <p className="mx-auto mt-7 max-w-2xl font-body text-sm leading-7 text-wok-black/65 sm:text-base">
      Discover the flavours, bring your people together and experience
      Kuro around the table.
    </p>

    {/* Actions */}
    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
      <Link
        href="/contact"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-wok-black px-7 font-body text-sm font-black uppercase tracking-wide text-mango-gold transition-all duration-300 hover:-translate-y-1 hover:bg-charcoal-night"
      >
        Plan Your Visit

        <span aria-hidden="true">
          →
        </span>
      </Link>

      <Link
        href="/gallery"
        className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-wok-black px-7 font-body text-sm font-black uppercase tracking-wide text-wok-black transition-all duration-300 hover:-translate-y-1 hover:bg-wok-black hover:text-primary"
      >
        View Gallery
      </Link>
    </div>
  </div>
</section>
    </main>
  );
}