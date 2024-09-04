import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  AtSign,
  Search,
  Sprout,
  DollarSign,
  Droplets,
  Shovel,
  FileText,
} from "lucide-react";
import GradualSpacing from "../magicui/gradual-spacing";
import Image from "next/image";

const fadeInUp:any = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.5
    }
  }
};

export default function HeroSection() {
  return (
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
                text="WELCOME TO"
              />
              <GradualSpacing
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-500"
                text="AGRISARATHI"
              />
              <motion.p variants={fadeInUp} className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 py-4">
                उन्नत कृषि और प्रगतिशील कृषक का सारथी
              </motion.p>
            </motion.div>
            <motion.p variants={fadeInUp} className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 py-4">
              AgriSarathi Empowers Farmers With Intelligent, AI Driven Solutions
              For Sustainable Farming, Enhanced Traceability, And Resource
              Optimization, Leading To Higher Yields And Increased Income, All
              Through A Unified Digital Platform.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="inline-flex h-8 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-50 dark:text-green-900 dark:hover:bg-green-50/90 dark:focus-visible:ring-green-300">
                Know More
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center"
          >
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8">
              <motion.div variants={fadeInUp}  className="flex flex-col items-center justify-center w-full max-w-sm bg-green-500 border-gray-400 rounded-lg">
                <Card className="w-full max-w-sm bg-green-500 border-none">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Leaf className="h-8 w-8 text-white mb-2" />
                    <h3 className="font-semibold text-center text-white">
                      Production
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="w-full max-w-sm">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <AtSign className="h-8 w-8 text-green-500 mb-2" />
                    <h3 className="font-semibold text-center">
                      Fertilizer Calculator
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="w-full max-w-sm">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Search className="h-8 w-8 text-green-500 mb-2" />
                    <h3 className="font-semibold text-center">Detect Disease</h3>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="w-full max-w-sm">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Sprout className="h-8 w-8 text-green-500 mb-2" />
                    <h3 className="font-semibold text-center">Crop Suggestion</h3>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="w-full max-w-sm">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <DollarSign className="h-8 w-8 text-green-500 mb-2" />
                    <h3 className="font-semibold text-center">
                      Farmer Economics
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="w-full max-w-sm">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Droplets className="h-8 w-8 text-green-500 mb-2" />
                    <h3 className="font-semibold text-center">
                      Irrigation Alarm
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="w-full max-w-sm">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Shovel className="h-8 w-8 text-green-500 mb-2" />
                    <h3 className="font-semibold text-center mb-6">Soil Testing</h3>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="w-full max-w-sm">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <FileText className="h-8 w-8 text-green-500 mb-2" />
                    <h3 className="font-semibold text-center">Govt. Schemes</h3>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Image
                src="/phone.png"
                width={900}
                height={900}
                alt={"phone"}
                className="mt-4"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}