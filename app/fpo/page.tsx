"use client";
import ImageSlider from "@/components/fpo/Slider";
import ComingSoonSection from "@/components/landing/ComingSoon";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      {" "}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-0 leading-7">
              Enabling <span className="text-green-600">FPO member</span> <br />{" "}
              Management
            </h2>
            <Image
              src="/fpo/fpo.png"
              alt="Farmer using smartphone"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div><div className="bg-[#FDF7F2]">
        <ImageSlider />

        </div>
        <ComingSoonSection />
      </section>
    </div>
  );
}

export default page;
