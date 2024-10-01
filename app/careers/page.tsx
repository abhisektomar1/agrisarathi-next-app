"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import JobApplicationForm from "@/components/JobApplicationForm";
import ComingSoonSection from "@/components/landing/ComingSoon";

const fadeInUp: any = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const workingReasons = [
    {
      title: "Career Growth Opportunities",
      description: "We Invest In Your Future With Clear Paths For Professional Development And Advancement.",
      bgImage: "/fslider/r1.png"
    },
    {
      title: "Challenges",
      description: "Work On Innovative Projects That Push Boundaries And Challenge Your Abilities.",
      bgImage: "/fslider/r2.png"

    },
    {
      title: "Tech Environment",
      description: "Enjoy Experimenting With Fast Moving Technologies. AgriSarathi Allows You A Free Hand With Software And Tools To Bring More Power To Its Platforms And Their Beneficiaries.",
      bgImage: "/fslider/r3.png"

    },
    {
      title: "Recognition And Rewards",
      description: "Your Hard Work Is Noticed And Celebrated With Competitive Compensation And Benefits.",
      bgImage: "/fslider/r4.png"

    }
  ]

export default function page() {
  return (
    <>
     <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-12 md:py-16 lg:py-24 xl:py-26 bg-white"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center space-y-4"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <GradualSpacing
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                text="GROW YOUR"
              />
              <GradualSpacing
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-500"
                text="CARRER WITH US"
              />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 py-4"
            >
              We believe in more than just jobs – we create paths for growth,
              innovation, and success. Our team thrives in an environment that
              fosters creativity, collaboration, and personal development
              Whether you’re passionate about new technologies, inspired by
              dynamic challenges, or driven to make a meaningful impact, we
              offer the perfect place for you to thrive and succeed.
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center"
          >
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                <Image src="/logo1.svg" width={150} height={150} alt={"logo"} />
              </span>

              {/* Inner Circles */}
              <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={100}
              >
                <Image src="/c1.png" fill alt={"logo"} />
              </OrbitingCircles>
              <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={10}
                delay={10}
                radius={100}
              >
                <Image src="/c6.png" fill alt={"logo"} />
              </OrbitingCircles>
              <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={100}
              >
                <Image src="/c2.png" fill alt={"logo"} />
              </OrbitingCircles>

              {/* Outer Circles (reverse) */}
              <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={160}
                duration={20}
                reverse
              >
                <Image src="/c3.png" fill alt={"logo"} />
              </OrbitingCircles>
              <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={160}
                duration={10}
                reverse
              >
                <Image src="/c5.png" fill alt={"logo"} />
              </OrbitingCircles>
              <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={160}
                duration={20}
                delay={20}
                reverse
              >
                <Image src="/c4.png" fill alt={"logo"} />
              </OrbitingCircles>
              <OrbitingCircles
                className="size-[70px] border-none bg-transparent"
                radius={220}
                duration={20}
                delay={20}
                reverse
              >
                <Image src="/c5.png" fill alt={"logo"} />
              </OrbitingCircles>
              <OrbitingCircles
                className="size-[70px] border-none bg-transparent"
                radius={220}
                duration={20}
                delay={20}
              >
                <Image src="/c6.png" fill alt={"logo"} />
              </OrbitingCircles>
              <OrbitingCircles
                className="size-[70px] border-none bg-transparent"
                radius={220}
                duration={20}
                delay={10}
              >
                <Image src="/c1.png" fill alt={"logo"} />
              </OrbitingCircles>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    <section className="bg-[#FDF7F2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Why You will Love Working Here
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workingReasons.map((reason, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg h-64"
            >
              <Image
                src={reason.bgImage}
                alt={reason.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-200 text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <JobApplicationForm />
    <ComingSoonSection />

    </>
   
  );
}
