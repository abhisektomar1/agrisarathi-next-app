"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Sheetal is Nisha" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Nisha is Munni" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Munni is Aditi" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-red-600/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-red-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-red-600" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-red-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-red-600" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg width="131" height="40" viewBox="0 0 131 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_650_3004)">
    <path d="M0 8H4.21616V14.1506H13.3925V18.1684H4.21616V25.7327C4.21616 27.3352 5.51529 28.6344 7.11786 28.6344C8.72043 28.6344 10.0196 27.3352 10.0196 25.7327V24.815H14.4341V25.7326C14.4341 29.7185 11.2029 32.9497 7.21707 32.9497C3.23119 32.9497 0 29.7185 0 25.7326V8Z" fill="#FF4B27"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9571 28.6547C31.2485 31.6109 28.2303 32.9005 25.9907 32.9005C20.5118 32.9005 16.0703 28.5257 16.0703 23.129C16.0703 17.7323 20.5118 13.3574 25.9907 13.3574C31.3243 13.3574 35.6748 17.5034 35.9017 22.702L35.911 22.6826V32.2061H31.9429V30.9661L31.9571 28.6547ZM31.2485 23.0298C31.2485 26.1253 28.8501 28.6348 25.8915 28.6348C22.9329 28.6348 20.5345 26.1253 20.5345 23.0298C20.5345 19.9342 22.9329 17.4248 25.8915 17.4248C28.8501 17.4248 31.2485 19.9342 31.2485 23.0298Z" fill="#FF4B27"/>
    <path d="M39.4824 22.3102V32.9002H43.5994V22.4094C43.5994 19.985 45.5647 18.0197 47.9891 18.0197C50.4135 18.0197 52.3789 19.985 52.3789 22.4094V32.9002H56.595V22.3102C56.595 17.5847 52.7643 13.7539 48.0387 13.7539C43.3132 13.7539 39.4824 17.5847 39.4824 22.3102Z" fill="#FF4B27"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M104.066 32.9005V20.8721C104.066 16.7219 107.431 13.3574 111.581 13.3574C114.004 13.3574 116.159 14.5041 117.533 16.2843C118.907 14.5041 121.062 13.3574 123.485 13.3574C127.636 13.3574 131 16.7219 131 20.8721V32.9005H126.784V20.9713C126.784 19.1222 125.285 17.6232 123.436 17.6232C121.587 17.6232 120.088 19.1222 120.088 20.9713V32.9005H119.096H115.971H114.88V20.9713C114.88 19.1222 113.381 17.6232 111.531 17.6232C109.682 17.6232 108.183 19.1222 108.183 20.9713V32.9005H104.066Z" fill="#FF4B27"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M96.1768 27.1367H100.691C99.4402 30.5901 96.1608 32.8905 92.4879 32.8905H91.7154C86.5518 32.8905 82.3807 28.6768 82.4331 23.5135L82.4353 23.3006C82.4909 17.8212 87.0094 13.4416 92.4878 13.5569C97.4316 13.661 101.385 17.6985 101.385 22.6434V24.8054H86.9013C87.1845 27.0998 89.1337 28.8232 91.4455 28.8232H93.3757C94.5497 28.8232 95.6275 28.1743 96.1768 27.1367ZM96.8692 21.3335H87.0977C87.6228 19.2623 89.4869 17.8118 91.6236 17.8118H92.4655C94.5763 17.8118 96.4052 19.2744 96.8692 21.3335Z" fill="#FF4B27"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.3106 17.6031C74.602 14.8949 71.5839 13.3573 69.3442 13.3573C63.8653 13.3573 59.4238 17.7321 59.4238 23.1288C59.4238 28.5255 63.8653 32.9004 69.3442 32.9004C74.6778 32.9004 79.0283 28.7544 79.2553 23.5558L79.2646 23.5752V8.00028H75.2964V15.2917L75.3106 17.6031ZM74.602 23.228C74.602 20.1325 72.2036 17.623 69.245 17.623C66.2864 17.623 63.888 20.1325 63.888 23.228C63.888 26.3236 66.2864 28.833 69.245 28.833C72.2036 28.833 74.602 26.3236 74.602 23.228Z" fill="#FF4B27"/>
    </g>
    <defs>
    <clipPath id="clip0_650_3004">
    <rect width="131" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
