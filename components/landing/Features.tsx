import Image from 'next/image'
import { useState } from 'react'

const features = [
  { icon: '/features/crops.svg', title: "Multiple Crops' Advisory Based On Package Of Practices" },
  { icon: '/features/vector.png', title: "Data Analysis and Insights" },
  { icon: '/features/crops.svg', title: "Crop Monitoring" },
  { icon: '/features/crops.svg', title: "Seasonal Planning" },
  { icon: '/features/crops.svg', title: "Soil Management" },
  { icon: '/features/crops.svg', title: "Yield Forecasting" },
  { icon: '/features/crops.svg', title: "Irrigation Management" },
  { icon: '/features/crops.svg', title: "Market Connectivity" },
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
              src={feature.icon}
              alt={feature.title}
              layout="fill"
              className={`transition-colors duration-300 ${
                index === 0 || hoveredIndex === index ? 'text-white' : 'text-green-500'
              }`}
            />
          </div>
          <h3 className="text-lg font-semibold text-center">
            {index === 0 || hoveredIndex === index ? feature.title : ''}
          </h3>
        </div>
      ))}
    </div>
  </div>
  )
}