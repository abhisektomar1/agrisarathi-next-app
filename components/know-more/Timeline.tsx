import Image from 'next/image'

export default function AgrisarathiInfographic() {
  return (
    <section className="w-full max-w-7xl mx-auto bg-[#FDF7F2] p-8">
      <h1 className="text-3xl md:text-5xl font-bold my-6 leading-10">
        <span className="text-green-600">Agrisarathi</span> is a unified white labelled aggregator platform that comes in a plug and play mode
      </h1>
      <p className="text-sm my-6">
        Enabling the Cooperatives, FPOs and Farmers to drive sustainable and climate positive food system
      </p>

      <div className="flex justify-between mb-8 gap-5">
        <div className="flex items-center border border-gray-400 rounded-md p-2">
          <Image src="/home.svg" alt="Store icon" width={24} height={24} className="mr-2" />
          <p className="text-sm">
            With more than <span className="text-green-600 font-bold">60 proximity stores</span> and <span className="text-green-600 font-bold">30 retail partners</span> we are meeting farmers where they are
          </p>
        </div>
        <div className="flex items-center border border-gray-400 rounded-md p-4">
          <Image src="/man.svg" alt="Farmer icon" width={24} height={24} className="mr-2" />
          <p className="text-sm">
            Agrisarathi has access to <span className="text-green-600 font-bold">more than 50,000 farmers</span> getting regularly served through the proximity stores
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="space-y-4 bg-pink-50 rounded-lg p-4 relative">
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-2"></div>
            <div>
              <h3 className="font-bold md:text-2xl">Farmer Module</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed my-2">Consisting Climate Smart Crop Advisory And Traceability To Drive Productivity And Income, Weather And Behavior Based Reward, Sustainable Farming</p>
            </div>
          </div>
          <div className="border-l-2 border-dashed border-gray-400 h-4 absolute left-[5px] top-[28px]"></div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-2"></div>
            <div>
              <h3 className="font-bold md:text-2xl">FPO Module</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed my-2">Harvest To End Consumer FPOs To Build Services That Are Relevant For Their Farmers, Unlocking Power Of Aggregation Through Digitization Of Farmer Profiles</p>
            </div>
          </div>
          <div className="border-l-2 border-dashed border-gray-400 h-4 absolute left-[5px] top-[108px]"></div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-2"></div>
            <div>
              <h3 className="font-bold md:text-2xl">Retailer Module</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed my-2">Business In A Box, Allowing Retailers To Grow Their Business And Capture New Markets With Their Own Private Label App, Retailers Can Manage Their Inventory And Orders</p>
            </div>
          </div>
          <div className="border-l-2 border-dashed border-gray-400 h-4 absolute left-[5px] top-[188px]"></div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-2"></div>
            <div>
              <h3 className="font-bold md:text-2xl">Agri Finance Marketplace</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed my-2">Enabled By Our Partners Addressing Credit Needs Of Farmers, FPOs And Agri-startups (Seasonal Capital)</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image src="/timeline1.png" alt="Farmer using smartphone" width={400} height={300} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
            <Image src="/digi.svg" alt="Digital Stack" width={40} height={40} />
          </div>
          <p className="text-xs font-bold">Digital Stack</p>
        </div>
        <div className="border-t-2 border-dashed border-gray-400 flex-grow mx-4"></div>
        <div className="text-center max-w-[150px]">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
            <Image src="/search.svg" alt="Mobile/Web Interface" width={40} height={40} />
          </div>
          <p className="text-xs font-bold text-center">Mobile/Web Interface And Content Stack - Connected To Digital Public Infrastructure</p>
        </div>
        <div className="border-t-2 border-dashed border-gray-400 flex-grow mx-4"></div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
            <Image src="/stack.svg" alt="Physical Stack" width={40} height={40} />
          </div>
          <p className="text-xs font-bold">Physical Stack</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <Image src="/timeline2.png" alt="Store owner" width={400} height={300} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-4 relative">
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-2"></div>
            <div>
              <h3 className="font-bold md:text-2xl">Proximity Stores</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed my-2">Proximity Stores - Agrisarathi Creates Value Through A Chain Of Physical Touch Points Enabling Farmers Access At Their Door Step</p>
            </div>
          </div>
          <div className="border-l-2 border-dashed border-gray-400 h-4 absolute left-[5px] top-[28px]"></div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-2"></div>
            <div>
              <h3 className="font-bold md:text-2xl">Input Stores</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed my-2">The Input Stores Are Retail Shops That Maintain And Sell High-quality Services For Farmers, Supported With A Robust Agronomy And Soil Testing Platform For Informed Decision Making And Ensuring Delivery Of Right Products At Right Time</p>
            </div>
          </div>
          <div className="border-l-2 border-dashed border-gray-400 h-4 absolute left-[5px] top-[108px]"></div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-2"></div>
            <div>
              <h3 className="font-bold md:text-2xl">Output Stores</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed my-2">Enabled With Quality Assaying And Traceability Platforms, These Stores Work With Farmers During Their Harvest Through Grading, Sorting And Packaging Of Their Produce. Some Of The Output Stores Are Equipped With Cold Storage Facility For Storage Of Perishable Crops</p>
            </div>
          </div>
          <div className="border-l-2 border-dashed border-gray-400 h-4 absolute left-[5px] top-[188px]"></div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-600 rounded-full mt-1 mr-2"></div>
            <div>
              <h3 className="font-bold md:text-2xl">Partner Stores</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed my-2">Onboarded Through Its Retail Partners Enable Farmers With Inputs Customized To Farmers Based On Specific Requirement And Variety Grown</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}