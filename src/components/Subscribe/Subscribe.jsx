import React from 'react'

const Subscribe = () => {
  return (
    <div className="bg-[#7C4EE4] min-h-125 flex items-center justify-center px-6">

      <div className="flex flex-col items-center text-center max-w-3xl w-full">

        {/* Heading */}
        <h1 className="text-white text-4xl md:text-4xl font-bold leading-tight">
          Get our stories delivered From us to your inbox weekly.
        </h1>

        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-xl">

          <input
            type="email"
            placeholder="Your Email"
            className="bg-white rounded-md px-4 py-4 flex-1 outline-none"
          />

          <button className="border border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-purple-600 transition">
            Get started
          </button>

        </div>

        {/* Bottom text */}
        <p className="text-purple-200 text-sm mt-6 max-w-xl">
          Get a response tomorrow if you submit by 9pm today.
          If we received after 9pm will get a response the following day.
        </p>

      </div>
    </div>
  )
}

export default Subscribe