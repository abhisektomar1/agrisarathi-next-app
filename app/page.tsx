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
import ImageSlider1 from "@/components/landing/Image-slider";
import Map from "@/components/landing/Map";

export default function Home() {
 
  return (
    <>
        <Navbar />
    <main className="bg-[#ffffff] h-screen dark:bg-black  mx-auto sm:px-20 px-6">
      <div className="w-full">
       <HeroSection/> 
       <FeatureSection />
       <Features />
       <ImageSlider1 />
       <Map />
       <Partnership />
       {/* <Cards /> */}
        {/* <ImageSlider />
        <CanvasRevealEffectDemo /> */}
        {/* <GlobeDemo /> */}
        {/* <MarqueeDemo />
        <ThreeDCardDemo /> */}

      </div>
    </main>
    </>
    
  );
}
