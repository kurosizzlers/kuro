"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import toast, { Toaster } from "react-hot-toast";
import SmokeEffect from "../components/effects/smokeEffect";

gsap.registerPlugin(ScrollTrigger);

const contactOptions = [
  {
    icon: "restaurant",
    title: "Reservations",
    description:
      "Planning your next meal at Kuro? Send us your preferred date, time and guest count.",
  },
  {
    icon: "groups",
    title: "Group Enquiries",
    description:
      "Get in touch for group dining, celebrations and special gatherings.",
  },
  {
    icon: "mail",
    title: "General Enquiries",
    description:
      "Have a question about Kuro Sizzlers? We would love to hear from you.",
  },
];

export default function ContactPage() {
  const pageRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast.error("Something went wrong. Please try again later.");
      console.error(
        "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is missing from environment variables."
      );
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New Kuro Sizzlers Enquiry");
    formData.append("from_name", "Kuro Sizzlers Website");

    try {
      setIsSubmitting(true);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Enquiry sent successfully!");
        form.reset();
      } else {
        console.error("Web3Forms error:", data);
        toast.error(
          data.message || "Unable to send enquiry. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(
    () => {
      /* =====================================================
         HERO LOAD ANIMATION
      ====================================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      heroTimeline.fromTo(
        ".contact-hero-content > *",
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

      /* =====================================================
         CONTACT INTRO / LEFT CONTENT
      ====================================================== */

      gsap.fromTo(
        ".contact-left-content",
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
            trigger: ".contact-left-content",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =====================================================
         CONTACT OPTIONS
      ====================================================== */

      gsap.fromTo(
        ".contact-option",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".contact-options",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =====================================================
         PHILOSOPHY CARD
      ====================================================== */

      gsap.fromTo(
        ".contact-philosophy",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-philosophy",
            start: "top 85%",
            once: true,
          },
        }
      );

      /* =====================================================
         FORM
      ====================================================== */

      gsap.fromTo(
        ".contact-form",
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
            trigger: ".contact-form",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =====================================================
         FORM HEADER
      ====================================================== */

      gsap.fromTo(
        ".contact-form-header > *",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".contact-form-header",
            start: "top 85%",
            once: true,
          },
        }
      );

      /* =====================================================
         FORM FIELDS
      ====================================================== */

      gsap.fromTo(
        ".contact-form-fields > *",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".contact-form-fields",
            start: "top 88%",
            once: true,
          },
        }
      );

      /* =====================================================
         BOTTOM CTA
      ====================================================== */

      gsap.fromTo(
        ".contact-bottom-cta",
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
            trigger: ".contact-bottom-cta",
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
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
        }}
      />

      {/* HERO */}
      <section
        aria-labelledby="contact-title"
        className="relative flex min-h-[72vh] w-full items-center overflow-hidden bg-wok-black px-5 py-24 text-white sm:px-8 lg:min-h-[78vh] lg:px-12"
      >
        {/* Smoke */}
        <SmokeEffect opacity={0.55} />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[130px]" />

        {/* Subtle Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1360px]">
          <div className="contact-hero-content mx-auto flex max-w-5xl flex-col items-center text-center">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-2 font-body text-[10px] font-black uppercase tracking-[0.25em] text-primary sm:text-xs">
              Reservations & Enquiries
            </span>

            {/* Heading */}
            <h1
              id="contact-title"
              className="mt-7 font-display text-[clamp(3.5rem,8vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.055em]"
            >
              LET&apos;S TALK
              <br />
              <span className="text-primary">KURO SIZZLERS.</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl font-body text-sm leading-7 text-white/55 sm:text-base">
              Whether you&apos;re planning a table, a gathering, or simply want to
              know more about Kuro Sizzlers, send us a message and our team
              will get back to you.
            </p>

            {/* Decorative Divider */}
            <div className="mt-12 flex items-center gap-4">
              <span className="h-px w-16 bg-primary/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="h-px w-16 bg-primary/50" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display text-[9px] font-bold uppercase tracking-[0.35em] text-white/25">
          Scroll to discover
        </span>
      </section>

      {/* CONTACT + FORM */}
      <section
        aria-labelledby="contact-form-title"
        className="w-full bg-surface-cream py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-10">
          {/* LEFT */}
          <div className="contact-left-content lg:col-span-5">
            <p className="mb-3 font-body text-xs font-black uppercase tracking-[0.2em] text-on-surface">
              Get In Touch
            </p>

            <h2
              id="contact-form-title"
              className="max-w-xl font-display text-3xl font-extrabold uppercase leading-[1.05] text-on-surface sm:text-4xl lg:text-5xl"
            >
              YOUR TABLE,
              <br />
              YOUR MOMENT.
            </h2>

            <p className="mt-5 max-w-lg font-body text-sm leading-7 text-on-surface-muted sm:text-base">
              Tell us what you&apos;re looking for and share the details below.
              Whether it&apos;s a table for two or a larger gathering, we&apos;ll
              help you plan your Kuro experience.
            </p>

            {/* Contact options */}
            <div className="contact-options mt-10 space-y-4">
              {contactOptions.map((option) => (
                <div
                  key={option.title}
                  className="contact-option flex gap-4 rounded-xl border border-border-soft bg-surface-card p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-wok-black">
                    <span className="material-symbols-outlined text-[22px]">
                      {option.icon}
                    </span>
                  </span>

                  <div>
                    <h3 className="font-display text-base font-extrabold uppercase text-on-surface">
                      {option.title}
                    </h3>

                    <p className="mt-1 font-body text-sm leading-6 text-on-surface-muted">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="contact-philosophy mt-6 rounded-xl bg-wok-black p-6 text-white sm:p-7">
              <p className="font-body text-xs font-black uppercase tracking-[0.18em] text-primary">
                The Kuro Philosophy
              </p>

              <h3 className="mt-3 font-display text-xl font-extrabold uppercase">
                FIRE. FLAVOUR. CRAFT.
              </h3>

              <p className="mt-3 font-body text-sm leading-6 text-white/60">
                Kuro means &quot;black&quot; in Japanese — a tribute to the
                iconic cast-iron sizzler plates that represent the heart of
                the experience.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="contact-form rounded-2xl bg-wok-black p-6 shadow-xl sm:p-8 lg:p-10">
              <div className="contact-form-header mb-8">
                <span className="font-body text-xs font-black uppercase tracking-[0.18em] text-primary">
                  Send An Enquiry
                </span>

                <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                  TELL US ABOUT YOUR VISIT.
                </h2>

                <p className="mt-3 font-body text-sm leading-6 text-white/55">
                  Fill in the details below and we&apos;ll get back to you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="contact-form-fields space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/30 transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/30 transition focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Your phone number"
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/30 transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Enquiry Type
                    </label>

                    <select
                      id="enquiry"
                      name="enquiry"
                      defaultValue=""
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none transition focus:border-primary"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="reservation">Table Reservation</option>
                      <option value="group">Group Enquiry</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Preferred Date
                    </label>

                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Number Of Guests
                    </label>

                    <input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      placeholder="e.g. 4"
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/30 transition focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us anything we should know..."
                    className="w-full resize-none rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/30 transition focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 font-body text-sm font-black uppercase tracking-wide text-wok-black transition hover:bg-primary-hover sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}

                  <span className="material-symbols-outlined text-[19px]">
                    arrow_forward
                  </span>
                </button>

                <p className="font-body text-xs leading-5 text-white/35">
                  Your information will be used to process and respond to your reservation
                  or enquiry. By submitting this form, you acknowledge our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary underline underline-offset-2 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================== */}

      <section
        aria-labelledby="contact-cta-title"
        className="relative overflow-hidden bg-mango-gold py-24 text-wok-black sm:py-28 lg:py-32"
      >
        {/* Background Typography */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display md:text-[10rem] text-[6rem] font-black leading-none text-wok-black/[0.035] text-center sm:text-[8rem] lg:text-[12rem]">
          KURO
          <br />
          SIZZLERS
        </div>

        {/* Content */}
        <div className="contact-bottom-cta relative z-10 mx-auto max-w-[900px] px-5 text-center sm:px-8">
          {/* Eyebrow */}
          <p className="font-display text-xs font-black uppercase tracking-[0.25em]">
            Explore More
          </p>

          {/* Heading */}
          <h2
            id="contact-cta-title"
            className="mt-5 font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
          >
            EXPERIENCE
            <br />
            THE
            <br />
            <span className="text-white">SIZZLE.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl font-body text-sm leading-7 text-wok-black/65 sm:text-base">
            Explore our menu, discover the flavours and experience what makes
            every meal at Kuro Sizzlers memorable.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-wok-black px-7 font-body text-sm font-black uppercase tracking-wide text-mango-gold transition-all duration-300 hover:-translate-y-1 hover:bg-charcoal-night"
            >
              Explore Menu

              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-wok-black px-7 font-body text-sm font-black uppercase tracking-wide text-wok-black transition-all duration-300 hover:-translate-y-1 hover:bg-wok-black hover:text-primary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
