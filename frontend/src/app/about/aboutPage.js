"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmokeEffect from "../components/effects/smokeEffect";

gsap.registerPlugin(ScrollTrigger);

const cuisineItems = [
  {
    number: "01",
    title: "Continental",
    text: "Silky cream soups, crisp starters, wood-fired pizzas and herb-crusted pastas bring a comforting Continental character to the menu.",
  },
  {
    number: "02",
    title: "Chinese",
    text: "Our kitchen brings bold Indo-Chinese wok creations together with carefully crafted flavours and satisfying textures.",
  },
  {
    number: "03",
    title: "Multi-Cuisine",
    text: "A wider culinary canvas allows Kuro to bring different flavours and traditions together while keeping an Indian soul at its heart.",
  },
];

export default function OurStoryPage() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      /* HERO */
      gsap.fromTo(
        ".about-hero-content > *",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      /* GENERAL REVEALS */
      gsap.utils.toArray(".about-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      /* STAGGER GROUPS */
      gsap.utils.toArray(".about-stagger").forEach((group) => {
        gsap.fromTo(
          group.children,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          }
        );
      });
    },
    {
      scope: pageRef,
    }
  );

  return (
    <main ref={pageRef} className="w-full">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section
        aria-labelledby="our-story-title"
        className="relative flex min-h-[72vh] w-full items-center overflow-hidden bg-wok-black px-5 py-24 text-white sm:px-8 lg:min-h-[78vh] lg:px-12"
      >
        <SmokeEffect opacity={0.55} />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[130px]" />

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1360px]">
          <div className="about-hero-content mx-auto flex max-w-5xl flex-col items-center text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-2 font-body text-[10px] font-black uppercase tracking-[0.25em] text-primary sm:text-xs">
              Our Story
            </span>

            <h1
              id="our-story-title"
              className="mt-7 font-display text-[clamp(3.5rem,8vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.055em]"
            >
              THE STORY
              <br />
              BEHIND THE{" "}
              <span className="text-primary">
                SIZZLE.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl font-body text-sm leading-7 text-white/55 sm:text-base">
              Kuro Sizzlers is where every plate tells a story of fire,
              flavour, and craft — born from a passion for bold cuisine
              and warm hospitality.
            </p>

            <div className="mt-12 flex items-center gap-4">
              <span className="h-px w-16 bg-primary/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="h-px w-16 bg-primary/50" />
            </div>

          </div>
        </div>

        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display text-[9px] font-bold uppercase tracking-[0.35em] text-white/25">
          Scroll to discover
        </span>
      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section
        aria-labelledby="beginning-title"
        className="relative overflow-hidden bg-surface-cream py-24 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">

          <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            {/* Section Label */}
            <div className="about-reveal">
              <span className="font-display text-xs font-black uppercase tracking-[0.25em] text-mustard-deep">
                01 / Where It Begins
              </span>

              <div className="mt-5 hidden h-px w-20 bg-wok-black/20 lg:block" />
            </div>

            {/* Content */}
            <div className="about-reveal">

              <h2
                id="beginning-title"
                className="max-w-4xl font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-wok-black sm:text-5xl lg:text-6xl"
              >
                A PASSION FOR{" "}
                <span className="text-primary">
                  BOLD CUISINE.
                </span>
              </h2>

              <div className="mt-9 grid gap-7 font-body text-sm leading-8 text-on-surface-muted sm:text-base lg:grid-cols-2 lg:gap-12">

                <p>
                  Welcome to Kuro Sizzlers — where every plate tells a story
                  of fire, flavour, and craft. Born from a passion for bold
                  cuisine and warm hospitality, Kuro is a celebration of the
                  world's finest culinary traditions, reimagined with an
                  Indian soul.
                </p>

                <p>
                  At Kuro, food is designed to be experienced. From the first
                  aroma that reaches the table to the sound of a hot plate
                  arriving in front of you, every part of the experience is
                  meant to create anticipation.
                </p>

              </div>

              <div className="mt-8 border-l-2 border-primary pl-5 font-body text-sm leading-7 text-wok-black/60 sm:text-base">
                The sizzle is more than a presentation. It is part of what
                makes the meal memorable — the heat, the aroma, the visual
                spectacle and finally the flavour coming together in one
                moment.
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          WHY KURO
      ========================================================== */}
      <section
        aria-labelledby="why-kuro-title"
        className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">

          <div className="about-reveal border-y border-border-soft py-12 sm:py-16 lg:py-20">

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <div>
                <p className="font-display text-xs font-black uppercase tracking-[0.25em] text-mustard-deep">
                  02 / Why Kuro
                </p>

                <h2
                  id="why-kuro-title"
                  className="mt-5 max-w-4xl font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-primary sm:text-6xl lg:text-8xl"
                >
                  KURO
                  <br />
                  <span className="text-wok-black">
                    MEANS BLACK.
                  </span>
                </h2>
              </div>

              <div className="hidden text-right lg:block">
                <span className="font-display text-7xl font-black text-wok-black/[0.06]">
                  黒
                </span>
              </div>

            </div>

            <div className="mt-10 grid gap-8 border-t border-border-soft pt-8 font-body text-sm leading-8 text-on-surface-muted sm:text-base lg:grid-cols-3 lg:gap-12">

              <p>
                The name Kuro means "black" in Japanese — a tribute to the
                iconic cast-iron sizzler plates that represent the heart of
                the Kuro experience.
              </p>

              <p>
                Those plates are central to the way Kuro approaches dining.
                They carry the heat, the sound and the aroma that make a
                sizzling dish feel like more than just another plate of food.
              </p>

              <p>
                It is this connection between the plate and the experience
                that sits at the heart of Kuro Sizzlers.
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          DINING PHILOSOPHY
      ========================================================== */}
      <section
        aria-labelledby="philosophy-title"
        className="relative overflow-hidden bg-wok-black py-24 text-white sm:py-28 lg:py-32"
      >
        <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[120px]" />

        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">

          <div className="about-reveal">

            <p className="font-display text-xs font-black uppercase tracking-[0.25em] text-primary">
              03 / Our Philosophy
            </p>

            <h2
              id="philosophy-title"
              className="mt-5 max-w-4xl font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
            >
              DINING IS MORE
              <br />
              THAN{" "}
              <span className="text-primary">
                EATING.
              </span>
            </h2>

          </div>

          <div className="about-stagger mt-14 grid gap-10 border-y border-white/10 py-10 lg:grid-cols-2 lg:gap-20">

            <p className="font-body text-sm leading-8 text-white/55 sm:text-base">
              We believe dining is not just about eating — it is about the
              sizzle, the aroma and the moment of pure delight when the plate
              lands in front of you.
            </p>

            <p className="font-body text-sm leading-8 text-white/55 sm:text-base">
              Every dish is crafted with care and plated with pride. The
              experience brings together flavour, presentation and the warmth
              of sharing a meal around the table.
            </p>

          </div>

          <div className="about-stagger grid border-b border-white/10 sm:grid-cols-3">

            <div className="border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:pr-8">
              <span className="font-display text-4xl font-black text-primary">
                01
              </span>

              <h3 className="mt-5 font-display text-xl font-black uppercase">
                Fire
              </h3>

              <p className="mt-2 font-body text-sm leading-6 text-white/40">
                Heat and the unmistakable theatre of the sizzle.
              </p>
            </div>

            <div className="border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:px-8">
              <span className="font-display text-4xl font-black text-primary">
                02
              </span>

              <h3 className="mt-5 font-display text-xl font-black uppercase">
                Flavour
              </h3>

              <p className="mt-2 font-body text-sm leading-6 text-white/40">
                Bold flavours inspired by culinary traditions from around
                the world.
              </p>
            </div>

            <div className="py-8 sm:pl-8">
              <span className="font-display text-4xl font-black text-primary">
                03
              </span>

              <h3 className="mt-5 font-display text-xl font-black uppercase">
                Craft
              </h3>

              <p className="mt-2 font-body text-sm leading-6 text-white/40">
                Careful preparation and proud presentation in every dish.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          OUR KITCHEN
      ========================================================== */}
      <section
        aria-labelledby="kitchen-title"
        className="bg-surface-cream py-24 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">

          <div className="about-reveal max-w-4xl">

            <p className="font-display text-xs font-black uppercase tracking-[0.25em] text-mustard-deep">
              04 / Our Kitchen
            </p>

            <h2
              id="kitchen-title"
              className="mt-5 font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-wok-black sm:text-5xl lg:text-7xl"
            >
              CULINARY TRADITIONS,
              <br />
              <span className="text-primary">
                REIMAGINED.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl font-body text-sm leading-7 text-on-surface-muted sm:text-base">
              Our kitchen brings together Continental, Chinese and
              Multi-Cuisine cooking, creating a menu with variety while
              staying rooted in an Indian soul.
            </p>

          </div>

          <div className="about-stagger mt-14 divide-y divide-border-soft border-y border-border-soft">

            {cuisineItems.map((item) => (
              <article
                key={item.title}
                className="group grid gap-5 py-8 transition-all duration-300 sm:grid-cols-[80px_260px_1fr] sm:items-start sm:gap-8"
              >

                <span className="font-display text-sm font-black text-primary">
                  {item.number}
                </span>

                <h3 className="font-display text-2xl font-black uppercase text-wok-black transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>

                <p className="max-w-2xl font-body text-sm leading-7 text-on-surface-muted sm:text-base">
                  {item.text}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          WHAT WE SERVE
      ========================================================== */}
      <section
        aria-labelledby="food-title"
        className="bg-surface py-24 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            <div className="about-reveal">

              <p className="font-display text-xs font-black uppercase tracking-[0.25em] text-mustard-deep">
                05 / From The Kitchen
              </p>

              <h2
                id="food-title"
                className="mt-5 font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-wok-black sm:text-5xl lg:text-6xl"
              >
                BUILT AROUND
                <br />
                <span className="text-primary">
                  FLAVOUR.
                </span>
              </h2>

            </div>

            <div className="about-reveal">

              <div className="space-y-7 font-body text-sm leading-8 text-on-surface-muted sm:text-base">

                <p>
                  The menu moves from silky cream soups and crisp Continental
                  starters to dramatic sizzler platters that arrive at the
                  table in a cloud of steam.
                </p>

                <p>
                  It continues through wood-fired pizzas and herb-crusted
                  pastas, Indo-Chinese wok creations, signature sizzlers and
                  indulgent desserts.
                </p>

                <p>
                  Every recipe is refined around flavour, with the kitchen
                  working with fresh local produce and premium ingredients.
                </p>

              </div>

              <div className="mt-10 flex items-center gap-4 border-t border-border-soft pt-6">
                <span className="h-2 w-2 rounded-full bg-primary" />

                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Fire • Flavour • Craft
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          CLOSING CTA
      ========================================================== */}
      <section
        aria-labelledby="closing-title"
        className="relative overflow-hidden bg-mango-gold py-24 text-wok-black sm:py-28 lg:py-32"
      >

        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2   -translate-y-1/2 select-none font-display md:text-[10rem] text-[6rem] font-black leading-none text-wok-black/[0.035] text-center sm:text-[8rem] lg:text-[12rem]">
          KURO<br />SIZZLERS
        </div>

        <div className="about-reveal relative z-10 mx-auto max-w-[900px] px-5 text-center sm:px-8">

          <p className="font-display text-xs font-black uppercase tracking-[0.25em]">
            The Kuro Experience
          </p>

          <h2
            id="closing-title"
            className="mt-5 font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
          >
            FIRE.
            <br />
            FLAVOUR.
            <br />
            <span className="text-white">
              CRAFT.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl font-body text-sm leading-7 text-wok-black/65 sm:text-base">
            Come experience the sizzle, discover the flavours and make your
            own story around the table.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-wok-black px-7 font-body text-sm font-black uppercase tracking-wide text-mango-gold transition-all duration-300 hover:-translate-y-1 hover:bg-charcoal-night"
            >
              Explore Menu
              <span aria-hidden="true">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-wok-black px-7 font-body text-sm font-black uppercase tracking-wide text-wok-black transition-all duration-300 hover:-translate-y-1 hover:bg-wok-black hover:text-primary"
            >
              Contact Kuro Sizzlers
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
