import Image from 'next/image'
import { useState } from 'react'

const features = [
  { icon: '/features/1w.svg', icon2: '/features/1w.svg', title: "Multiple Crops' Advisory Based On Package Of Practices" },
  { icon: '/features/2w.svg', icon2: '/features/2g.svg', title: "Available in Ten Languages" },
  { icon: '/features/3w.svg', icon2: '/features/3g.svg', title: "Disease Detection to Cure - Linkage to Input Supplier" },
  { icon: '/features/4w.svg', icon2: '/features/4g.svg', title: "Fertilizer Calculator - as per Soil Structure and Application at Different Stages" },
  { icon: '/features/5w.svg', icon2: '/features/5g.svg', title: "Production and Cultivation Tips - Climate Tips I Crop Recommendations" },
  { icon: '/features/6w.svg', icon2: '/features/6g.svg', title: "Crop Analytics - Cost/Selling price I Yield per Hectare I Price Comparison Across Different Varieties" },
  { icon: '/features/7w.svg', icon2: '/features/7g.svg', title: "Soil Testing" },
  { icon: '/features/8w.svg', icon2: '/features/8g.svg', title: "Buying and Selling Information through ‘Dukan’ and ‘Mandi’" },
]


export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold text-center mb-12">Salient Features/Core Functions</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`w-full h-48 flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 ease-in-out ${
            index === 0 || hoveredIndex === index
              ? 'bg-green-500 text-white'
              : 'border-green-500 hover:bg-green-500 hover:text-white'
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative w-16 h-16 mb-4">
            <Image
              src={hoveredIndex === index ? feature.icon  : feature.icon2}
              alt={feature.title}
              layout="fill"
              className={`transition-colors duration-300 ${
                index === 0 || hoveredIndex === index ? 'text-white' : 'text-green-500'
              }`}
            />
          </div>
          <h3 className="text-lg font-semibold text-cente text-white">
            {index === 0 || hoveredIndex === index ? feature.title : ''}
          </h3>
        </div>
      ))}
    </div>
  </div>
  )
}