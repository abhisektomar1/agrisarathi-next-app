import Image from "next/image";

export default function Map() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="w-full lg:w-1/2">
          <div className="relative w-full" style={{ paddingBottom: "111.7%" }}>
            <Image
              src="/map.svg"
              alt="Map of India showing AgriSmart's reach"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Empowering Farmers Across India
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-600 mb-4">
            Expanding Our Reach, Growing Every Day
          </h3>
          <p className="text-gray-600 mb-6 md:mt-8">
            AgriSaathi is expanding its reach to bring essential agricultural
            services directly to farmers, creating local touchpoints for support
            and convenience. Our proximity stores ensure that farmers receive
            the help they need right at their doorsteps, improving access to
            resources and services.
          </p>
          <div className="flex flex-col gap-4 mb-6">
            {[
              { number: "60", label: "Proximity stores" },
              { number: "60", label: "Retail partners" },
              { number: "50000", label: "Farmers Served" },
            ].map((stat, index) => (
              <>
                <div key={index} className="flex items-center">
                  <div className="w-20 h-12 border border-green-600 rounded flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">
                      {stat.number}
                    </span>
                  </div>
                  <span className="text-gray-700 text-xl font-bold">{stat.label}</span>
                </div>
                <div className="w-full h-px bg-gray-200 my-6"></div>
              </>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Together, these numbers represent the thousands of people connected
            with us—and the count keeps increasing every day.
          </p>
        </div>
      </div>
    </section>
  );
}
