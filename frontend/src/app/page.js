"use client"

import { useEffect } from "react";
import Hero from "./components/landing/hero";
import OurStoryPreview from "./components/landing/storyPreview";
import SignatureDishes from "./components/landing/signatureDishes";
import ExperiencePreview from "./components/landing/experiencePreview";
import GalleryPreview from "./components/landing/galleryPreview";
import ReservationCTA from "./components/landing/reservationCTA";



export default function Home() {

  return (
    <>
    <section className="relative w-screen bg-wok-black">
      <Hero />
      <OurStoryPreview />
      {/* <ExperiencePreview /> */}
      {/* <SignatureDishes /> */}
      {/* <GalleryPreview /> */}
      <ReservationCTA />
    </section>
    </>
  );
}