'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const features = [
  {
    title: 'Climate Smart and Sustainable Farming',
    description: 'Maximise Crop Production',
    image: '/feature1.png',
  },
  {
    title: 'Improved Traceability and Democratization of Trade',
    description: 'Enhance Farmer income / Create Value for Ecosystem Players',
    image: '/feature2.png',
  },
  {
    title: 'Rewards and Recognition',
    description: "Build Visibility as Agri Champions – 'India's Bread Creators'",
    image: '/feature3.png',
  },
]

export default function FeatureSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FDF7F2]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={features[activeFeature].image}
              alt={features[activeFeature].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{features[activeFeature].title}</h3>
              <p className="text-white text-opacity-80">{features[activeFeature].description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-[#4D4D4D] sm:text-4xl md:text-5xl mb-6">
              Aiding Farmers By Providing
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-between w-full p-8 text-left transition-colors rounded-lg ${
                    activeFeature === index
                      ? 'text-[#00A651] border-2 border-[#00A651]'
                      : 'text-[#4D4D4D] hover:text-[#00A651]'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <span className="font-semibold">{feature.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}