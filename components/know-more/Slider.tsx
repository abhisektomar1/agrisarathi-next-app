import Image from "next/image";
import React from "react";
import Marquee from "../magicui/marquee";

function Slider() {
  const benefits = [
    // {
    //   icon: "/fslider/1.svg",
    //   title: "Introducing Smart Agriculture Technologies",
    // },
    {
      icon: "/fslider/2.svg",
      title: "IEase of Access to Information 24/7 through Various Channels",
    },
    // {
    //   icon: "/fslider/3.svg",
    //   title: "Timely AI-Based Alerts",
    // },
    {
      icon: "/fslider/4.svg",
      title: "Excellent Blend of Advisory with Real-Time Delivery of Services",
    },
    {
      icon: "/fslider/5.svg",
      title: "Ensuring Crop Health and Promoting Climate Resilience",
    },
    {
      icon: "/fslider/6.svg",
      title: "End-to-End Services across the Entire Value Chain",
    },
    {
      icon: "/fslider/7.svg",
      title: "Enabling Informed Decisions for Maximising Yield",
    },
    {
      icon: "/fslider/8.svg",
      title:
        "Ensuring Sustainable Resource Management and Safe Food Production.",
    },
    {
      icon: "/fslider/9.svg",
      title: "Creating a More Informed and Bonded Farmer/FPO Community",
    },
    {
      icon: "/fslider/10.svg",
      title:
        "Encouraging Self-Reliance and Helping Farmers Optimize Resource Usage",
    },
    {
      icon: "/fslider/11.svg",
      title:
        "Rewarding Technology Adoption through Various Motivational Schemes.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white mx-auto sm:px-20 px-6">
      <div className="relative overflow-hidden rounded-2xl my-10">
        <Image
          src="/drone2.png"
          alt="Hand holding a smartphone with a miniature farm and a drone flying above"
          width={800}
          height={400}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <div className="flex flex-col justify-start items-center gap-4">
              <h2 className="text-left text-4xl text-white font-bold">
                Benefits of Agrisarathi
              </h2>
              <Marquee pauseOnHover className="[--duration:20s]">
                {benefits.map((benefit, index) => (
                  <div key={index} className="w-[324px] min-h-[114px] px-2 p-4">
                    <div className="border-white border rounded-lg p-4 flex items-start space-x-4">
                      <div className="border-white border rounded-lg p-2">
                        <Image
                          src={benefit.icon}
                          alt="features-icons"
                          width={50}
                          height={50}
                          quality={100}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
