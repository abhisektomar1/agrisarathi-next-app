import Image from "next/image";
import Marquee from "../magicui/marquee";

export default function Partnership() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Partnerships
        </h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:20s]">
            <div className="flex flex-row items-center space-x-4">
              <Image src="/part1.svg" alt="JMP Logo" width={100} height={100} />
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Client</p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <Image
                src="part2.svg"
                alt="UA AGRO SOLUTIONS Logo"
                width={300}
                height={300}
              />
              <div className="text-center ml-2">
                <h3 className="text-xl font-semibold">UA AGRO SOLUTIONS</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic Partner
                </p>
              </div>
            </div>
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
