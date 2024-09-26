'use client'
import { useState } from 'react'
import Image from 'next/image'
import ComingSoonSection from '@/components/landing/ComingSoon'

interface FarmerImage {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

const farmerImages: FarmerImage[] = [
  {
    id: 1,
    src: '/farmer/farmer1.png',
    alt: 'Coins and plant',
    title: 'Optimize Farm Revenue',
    description: 'Empower Farmers To Optimize Their Agricultural Outputs By Implementing Advanced Farming Techniques And Technologies. Our Platform Provides Tools Such As Soil Testing, Fertilizer Recommendations, Crop Rotation Plans, And Guidance On Sustainable Agricultural Practices. This, In Turn, Helps In Maximizing Yields And Improving Overall Farm Profitability.'
  },
  {
    id: 2,
    src: '/farmer/farmer2.png',
    alt: 'Farmer with laptop',
    title: 'Digital Literacy',
    description: 'Equipping farmers with essential digital skills to navigate modern agricultural practices and market dynamics.'
  },
  {
    id: 3,
    src: '/farmer/farmer3.png',
    alt: 'Farmer in field',
    title: 'Smart Farming',
    description: 'Introducing IoT and AI-driven solutions for precision agriculture and efficient resource management.'
  },
  {
    id: 4,
    src: '/farmer/farmer4.png',
    alt: 'Farmers at market',
    title: 'Market Access',
    description: 'Connecting farmers directly to markets, eliminating intermediaries and ensuring fair prices for produce.'
  },
  {
    id: 5,
    src: '/placeholder.svg?height=150&width=200',
    alt: 'Farmers in field',
    title: 'Sustainable Practices',
    description: 'Promoting eco-friendly farming methods that preserve soil health and biodiversity while ensuring long-term productivity.'
  }
]

export default function EmpoweringFarmersSection() {
  const [selectedImage, setSelectedImage] = useState<FarmerImage>(farmerImages[0])

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-0">
            Empowering Farmers <br />
            for a <span className="text-green-600">Thriving Future</span>
          </h2>
          <Image
            src="/farmer/farmer.png"
            alt="Farmer using smartphone"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6 bg-[#FDF7F2] my-12">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={600}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-white text-sm">{selectedImage.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {farmerImages.slice(1).map((image) => (
              <div
                key={image.id}
                className="cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={150}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ComingSoonSection />
    </section>
  )
}