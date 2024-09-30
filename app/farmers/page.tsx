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
    title: 'Access to market',
    description: 'Agrisarathi, in partnership with different off takers, supports the farmers  access to other markets offering remunerative prices for their produce'
  },
  {
    id: 2,
    src: '/farmer/farmer2.png',
    alt: 'Farmer with laptop',
    title: 'Digitisation of farmers',
    description: 'AgriSarathi is helping farmers manage their entire farm activity on a digital platform. It will also help the farmer conveniently access finance, quality inputs, and different farm-related services.'
  },
  {
    id: 3,
    src: '/farmer/farmer3.png',
    alt: 'Farmer in field',
    title: 'Optimise farm revenue',
    description: 'AgriSarathi is a game-changer in the agricultural industry. It significantly reduces the cost of cultivation by leveraging its advanced tests and tools, such as soil testing, fertilizer requirement testing, scientific PoP, and guidance on climate smart agriculture practices. This, in turn, boosts returns by increasing yield and revenue.'
  },
  {
    id: 4,
    src: '/farmer/farmer4.png',
    alt: 'Farmers at market',
    title: 'Water Conservation',
    description: 'Agrisarathi enables farmers with tools like irrigation alarm that connects with the micro irrigation set-up of drip and sprinkler, that allows farmers with both better yield and also conserve water specially avoid wastage'
  },
  {
    id: 5,
    src: '/farmer/farmer5.png',
    alt: 'Farmers in field',
    title: 'Improved quality',
    description: 'With the platform, we provide information related to the quality of the produce, guide them in grading and sorting, and acquaint them with the off takers quality standards. Farmers can talk with experts and progressive farmers through our Community feature to resolve their issues'
  }
]

export default function EmpoweringFarmersSection() {
  const [selectedImage, setSelectedImage] = useState<FarmerImage>(farmerImages[0])

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-0 leading-7">
            Empowering<br /> Farmers 
            for a <br /> <span className="text-green-600">Thriving Future</span>
          </h2>
          <Image
            src="/farmer/farmer.png"
            alt="Farmer using smartphone"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6 bg-[#FDF7F2] p-10 my-12">
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
          <div className="grid grid-cols-2 gap-4 ">
            {farmerImages.slice(1).map((image) => (
              <div
                key={image.id}
                className="cursor-pointer hover:shadow-lg"
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
      {/* coming section */}
      <ComingSoonSection />
    </section>
  )
}