"use client";
import { ThreeDCardDemo } from "@/components/CardList";
import Cards from "@/components/Cards";
import { GlobeDemo } from "@/components/Earth";
import FeatureSection from "@/components/landing/FeatureSection";
import HeroSection from "@/components/landing/HeroSection";
import { CanvasRevealEffectDemo } from "@/components/HoverCrads";
import { ImageSlider } from "@/components/ImageSlider";
import { MarqueeDemo } from "@/components/InfiniteList";
import Navbar from "@/components/landing/Navbar";
import Partnership from "@/components/landing/Partnership";
import Features from "@/components/landing/Features";

export default function Home() {
 
  return (
    <>
        <Navbar />
    <main className="bg-[#ffffff] h-screen dark:bg-black  mx-auto sm:px-20 px-6">
      <div className="w-full">
       <HeroSection/> 
       <FeatureSection />
       {/* <Partnership /> */}
       <Features />
        {/* <ImageSlider />
        <Cards />
        <CanvasRevealEffectDemo /> */}
        {/* <GlobeDemo /> */}
        {/* <MarqueeDemo />
        <ThreeDCardDemo /> */}

      </div>
    </main>
    </>
    
  );
}
