'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/slider/image.png',
    title: 'Farmers',
    description: 'A Game Changer For The Agricultural Industry AgriSmart Helps The Farmers By Optimizing Farm Revenue, Digitization, Access To Inputs And Improving Quality.',
    button: 'Know More'
  },
  {
    id: 2,
    image: '/slider/image2.png',
    title: 'FPOs/Cooperatives',
    description: 'AgriSmart Is Designed For FPOs/Cooperatives, So They Can Take Control Of These Business Providing Better Value For Members And Scale With New Income Opportunities.',
    button: 'Know More'
  }
]

export default function ImageSlider1() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 4000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[700px] rounded overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="mb-6 text-sm md:text-base lg:text-lg max-w-2xl">{slide.description}</p>
            <button className="bg-transparent text-white py-2 px-6 border-white border rounded self-start hover:bg-opacity-80 transition-colors duration-300">
              {slide.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}