"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Menu", href: "/menu" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const headerAnnouncement = useRef(null);

  useGSAP(
    () => {
      const announcement = headerAnnouncement.current?.querySelector(".announcement");
      const logo = headerRef.current?.querySelector(".header-logo");
      const nav = headerRef.current?.querySelector(".header-nav");
      const actions = headerRef.current?.querySelector(".header-actions");

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Announcement
      if (announcement) {
        tl.fromTo(
          announcement,
          {
            y: -30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          }
        );
      }

      // Logo
      if (logo) {
        tl.fromTo(
          logo,
          {
            y: -30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.3"
        );
      }

      // Navigation
      if (nav) {
        tl.fromTo(
          nav,
          {
            y: -20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.55"
        );
      }

      // Header actions
      if (actions) {
        tl.fromTo(
          actions,
          {
            y: -20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.5"
        );
      }
    },
    {
      scope: headerRef,
    }
  );
  // page opens on the top
    useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, [pathname]);

  return (
    <>
      {/* Announcement Bar */}
      <div ref={headerAnnouncement} className="header-announcement bg-wok-black px-4 py-2 text-xs font-semibold text-white border-b border-primary/20">
        <div className="announcement mx-auto flex max-w-[1360px] opacity-0 items-center justify-center">
          <span className="text-center font-bold text-chili-red">
            Where Every Plate Tells a Story of Fire, Flavour, and Craft.
          </span>
        </div>
      </div>

      {/* Header / Navigation */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full bg-mango-gold shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
      >
        <div className="mx-auto flex h-20 max-w-[1360px] items-center justify-between px-4 sm:px-8">

          {/* Brand Logo */}
          <Link
            href="/"
            aria-label="Kuro Sizzlers home"
            className="header-logo flex items-center opacity-0"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo/logo.png"
              alt="Kuro Sizzlers"
              width={150}
              height={150}
              priority
              className="h-[110px] w-[100px] object-contain sm:h-[120px] sm:w-[120px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="header-nav hidden items-center gap-1 opacity-0 lg:flex xl:gap-2"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded px-4 py-2 font-display text-[13px] uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-wok-black font-black text-mango-gold shadow-sm"
                      : "font-bold text-wok-black hover:bg-wok-black/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="header-actions flex items-center gap-2 opacity-0 sm:gap-3">

            {/* Desktop / Tablet View Menu */}
            <Link
              href="/menu"
              className="hidden items-center gap-1.5 rounded border-2 border-wok-black px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-wok-black transition-all duration-200 hover:bg-wok-black hover:text-mango-gold sm:inline-flex"
            >
              View Menu
            </Link>

            {/* Book Table */}
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg border border-wok-black bg-wok-black px-3.5 py-2.5 font-display text-[11px] font-black uppercase tracking-widest text-mango-gold shadow-md transition-all duration-200 hover:bg-zinc-900 hover:text-white sm:px-5 sm:text-xs"
            >
              <span>Book Table</span>

              <span
                className="text-[16px]"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="flex size-11 items-center justify-center rounded-lg border-2 border-wok-black text-wok-black transition-all duration-200 hover:bg-wok-black hover:text-mango-gold lg:hidden"
            >
              <span className="relative flex size-5 items-center justify-center">
                <span
                  className={`absolute h-[2px] w-5 bg-current transition-transform duration-300 ${
                    menuOpen
                      ? "rotate-45"
                      : "-translate-y-[4px]"
                  }`}
                />

                <span
                  className={`absolute h-[2px] w-5 bg-current transition-transform duration-300 ${
                    menuOpen
                      ? "-rotate-45"
                      : "translate-y-[4px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden border-t border-wok-black/10 bg-mango-gold transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[420px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-[1360px] flex-col px-4 pb-5 pt-3 sm:px-8"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 font-display text-sm uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-wok-black font-black text-mango-gold"
                      : "font-bold text-wok-black hover:bg-wok-black/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/menu"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center rounded-lg border-2 border-wok-black px-4 py-3 font-display text-xs font-black uppercase tracking-widest text-wok-black transition-all duration-200 hover:bg-wok-black hover:text-mango-gold"
            >
              View Menu
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}