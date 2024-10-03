"use client";
import FeatureSection from "@/components/landing/FeatureSection";
import HeroSection from "@/components/landing/HeroSection";
import Partnership from "@/components/landing/Partnership";
import Features from "@/components/landing/Features";
import ImageSlider1 from "@/components/landing/Image-slider";
import Map from "@/components/landing/Map";
import ComingSoonSection from "@/components/landing/ComingSoon";
import React from "react";

export default function Home() {
  return (
    <>
         <main className="bg-[#ffffff] min-h-screen flex flex-col dark:bg-black mx-auto sm:px-20 px-6">
        <div className="flex-grow">
          <HeroSection />
          <FeatureSection />
          <Features />
          <ImageSlider1 />
          <Map />
          {/* <BentoGridSecondDemo /> */}
          <ComingSoonSection />
          <Partnership />
        </div>
      </main>
    </>
  );
}
