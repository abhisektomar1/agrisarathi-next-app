/* eslint-disable react/no-unescaped-entities */
import AgrisarathiInfo from '@/components/know-more/Timeline'
import ComingSoonSection from '@/components/landing/ComingSoon'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white mx-auto sm:px-20 px-6">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Discover <span className="text-green-600">AgriSarathi</span>
        </h2>
        <h5 className="text-xl md:text-xl font-normal text-center mb-8">
        Transforming Agriculture for a Better Tomorrow
        </h5>
        <div className="mx-auto py-4">
          <div className="rounded-lg overflow-hidden mb-8 md:p-20">
            <Image
              src="/know-more.png"
              alt="Team meeting silhouette against sunset"
              width={600}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          AgriSarathi, an indigenously developed, white label platform for all Agri needs of Farmers, FPOs, Buyers and other key stakeholders, draws a parallel with Lord Krishna as the Charioteer to Arjuna in the Indian epic, Mahabharat. 
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-4">
          Likewise, AgriSarathi, through its intelligent congregation of multiple solutions - Climate Smart and Sustainable Farming, Improved Traceability and Democratization of Trade, and Rewards and Recognition, steers the agricultural journey of the Indian Farmer through infusion of digitally smart technologies, optimising resources, enhancing yield and increasing farmers’ income. 
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-4">
          Each of AgriSarathi tools is an end-to-end solution while the unified and aggregated AI/ML enabled platform brings together niche offerings of input providers to generate unique data sets for analytical use.
          </p>
        </div>
      </div>
      
    </section>
    <AgrisarathiInfo />
    <ComingSoonSection />
    </>
  )
}

export default page