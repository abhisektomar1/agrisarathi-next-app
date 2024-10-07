"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function ComingSoonSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
  }

  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 items-center">
        <div className="rounded-3xl overflow-hidden">
          <Image  
            src="/phone1.png"
            alt="Agrisarathi App Interface"
            width={800}
            height={600}
          />
        </div>
        <div className="space-y-14 space-x-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Agrisarathi Is Coming Soon!
          </h1>
          <p className="text-xl text-gray-600">
            Get Ready To Transform Your Farming Journey
          </p>
          <p className="text-gray-600">
            The wait is almost over! agrisarathi is launching soon, bringing you the tools and insights to optimize your farm, boost productivity, and access vital resources.
          </p>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Be The First To Know When We Go Live
            </h2>
            <p className="text-gray-600">
              Enter Your Email Below And Stay Updated On Our Launch.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter Your Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}