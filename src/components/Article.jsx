import React from 'react'

const Article = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">

      <div className="relative max-w-5xl w-full">
        
        {/* Image */}
        <img 
          src="vr.png" 
          alt="VR" 
          className="w-full rounded-2xl"
        />

        {/* Overlay Card */}
        <div className="absolute left-1/2 -bottom-20 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white rounded-2xl shadow-xl p-6 md:p-10">
          
          <div className="flex gap-2 text-sm mb-2">
            <p className="font-semibold">DEVELOPMENT</p>
            <p className="text-gray-400">16 March 2026</p>
          </div>

          <h1 className="text-xl md:text-3xl font-semibold mb-4">
            How to make a Game look more attractive with New VR & AI Technology
          </h1>

          <p className="text-gray-500 mb-6">
            Google has been investing in AI for many years and bringing its benefits to individuals,
            businesses and communities. Whether it’s publishing state-of-the-art research...
          </p>

          <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white transition">
            Read More
          </button>

        </div>

      </div>

    </div>
  )
}

export default Article