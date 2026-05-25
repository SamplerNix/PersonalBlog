import React from 'react'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

const Contactus = () => {
  return (
    <div className="bg-[#fcfcff] min-h-screen py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-[40px] md:text-[48px] font-bold text-[#2d2d2d] mb-4">
            Get in Touch
          </h1>
          <p className="text-[#999999] text-[16px] max-w-[550px] mx-auto leading-relaxed">
            Contact us to publish your content and show ads to our website and get a good reach.
          </p>
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Office Card */}
          <div className="bg-white rounded-[20px] p-10 flex flex-col items-center text-center shadow-[0_10px_50px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-[0_10px_50px_rgba(0,0,0,0.08)]">
            <div className="w-16 h-16 bg-[#7c5cfc] rounded-full flex items-center justify-center mb-6 text-white text-2xl shadow-[0_8px_20px_rgba(124,92,252,0.3)]">
              <HiOutlineLocationMarker />
            </div>
            <h3 className="text-[18px] font-semibold text-[#7c5cfc] mb-3">Office</h3>
            <p className="text-[#717171] text-[15px]">Chandigarh, India</p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-[20px] p-10 flex flex-col items-center text-center shadow-[0_10px_50px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-[0_10px_50px_rgba(0,0,0,0.08)]">
            <div className="w-16 h-16 bg-[#7c5cfc] rounded-full flex items-center justify-center mb-6 text-white text-2xl shadow-[0_8px_20px_rgba(124,92,252,0.3)]">
              <HiOutlineMail />
            </div>
            <h3 className="text-[18px] font-semibold text-[#7c5cfc] mb-3">Email</h3>
            <p className="text-[#717171] text-[15px]">nikhilprocode@gmail.com</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-[20px] p-10 flex flex-col items-center text-center shadow-[0_10px_50px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-[0_10px_50px_rgba(0,0,0,0.08)]">
            <div className="w-16 h-16 bg-[#7c5cfc] rounded-full flex items-center justify-center mb-6 text-white text-2xl shadow-[0_8px_20px_rgba(124,92,252,0.3)]">
              <HiOutlinePhone />
            </div>
            <h3 className="text-[18px] font-semibold text-[#7c5cfc] mb-3">Phone</h3>
            <p className="text-[#717171] text-[15px]">123456789</p>
          </div>
        </div>
      </div>

      {/* Banner Section with Map */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-[20px] max-w-[1280px] mx-auto">
        <img 
          src="maps.png" 
          alt="Map Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Form Section */}
      <div className="relative z-10 -mt-32 px-4 pb-20">
        <div className="max-w-[750px] mx-auto bg-white rounded-[20px] shadow-[0_10px_50px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-gray-50">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Name field */}
              <div className="space-y-2">
                <label className="text-[15px] font-medium text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full border border-gray-200 rounded-[10px] p-4 text-[15px] outline-none transition-all focus:border-purple-400"
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="text-[15px] font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="w-full border border-gray-200 rounded-[10px] p-4 text-[15px] outline-none transition-all focus:border-purple-400"
                />
              </div>

              {/* Phone field */}
              <div className="space-y-2">
                <label className="text-[15px] font-medium text-gray-800">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full border border-gray-200 rounded-[10px] p-4 text-[15px] outline-none transition-all focus:border-purple-400"
                />
              </div>

              {/* Subject field */}
              <div className="space-y-2">
                <label className="text-[15px] font-medium text-gray-800">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full border border-gray-200 rounded-[10px] p-4 text-[15px] outline-none transition-all focus:border-purple-400"
                />
              </div>
            </div>

            {/* Message field */}
            <div className="space-y-2">
              <label className="text-[15px] font-medium text-gray-800">
                Message
              </label>
              <textarea
                rows="6"
                placeholder=""
                className="w-full border border-gray-200 rounded-[10px] p-4 text-[15px] outline-none transition-all focus:border-purple-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#7c5cfc] hover:bg-[#6a4be0] text-white font-semibold text-[15px] px-10 py-4 rounded-[10px] transition-all duration-300 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus