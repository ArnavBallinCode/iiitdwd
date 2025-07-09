import { JSX } from "react";
import ToTop from "@/components/layout/to-top";
import reviews from "@/data/alumni.json";
import AlumniSection from "./alumni";
import Hero from "./hero";
import InfoSection from "./info-section";
import MainCarousel from "./main-carousel";

export default function HomePage(): JSX.Element {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <InfoSection />
      <MainCarousel />
      <AlumniSection reviews={reviews} />
      <ToTop />
    </main>
  );
}
