'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface SlideData {
  id: number
  image: string
  title: string
  description: string
}

const slides: SlideData[] = [
  {
    id: 1,
    image: '/placeholder.svg?height=400&width=600',
    title: 'Member Engagement',
    description: 'FPOs Can Unlock The Power Of Social Engagement To Enable Their Member Farmers With New Information, Engage Through Meeting Or Knowledge, Provide Support As Needed And With Knowledge On How Each Member Is Progressing With Production, Drive Economy Of Scale.'
  },
  {
    id: 2,
    image: '/placeholder.svg?height=400&width=600',
    title: 'Sustainable Farming',
    description: 'Promote eco-friendly practices that preserve soil health and biodiversity while ensuring long-term productivity and profitability for farmers.'
  },
  {
    id: 3,
    image: '/placeholder.svg?height=400&width=600',
    title: 'Market Access',
    description: 'Connect farmers directly to markets, eliminating intermediaries and ensuring fair prices for produce through our innovative platform.'
  }
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-16 md:py-24 ">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 p-2 bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-4xl aspect-[3/2]"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 rounded-lg">
              <h2 className="text-white text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
              <p className="text-white text-sm">{slides[currentSlide].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 p-2 bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-16 h-16 rounded-md overflow-hidden transition-all duration-200 ${
              index === currentSlide ? 'ring-2 ring-blue-500' : 'opacity-50 hover:opacity-100'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={64}
              height={64}
              objectFit="cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}