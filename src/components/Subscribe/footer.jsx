import React from 'react'

const Footer = () => {
  return (<>
    <div className="flex flex-col items-center justify-center mt-12.75">
        <div>
            <img src='Logo.png'/>
        </div>
        <div className="flex mt-10 gap-11.5">
            <p>Home</p>
            <p>Blog</p>
            <p>About</p>
            <p>Contact Us</p>
        </div>
        <div className="flex gap-4 mt-6"> 
    <p className="flex items-center justify-center bg-[#7C4EE4] w-10 h-10 rounded-full text-white text-sm font-bold">FB</p>
    <p className="flex items-center justify-center bg-[#7C4EE4] w-10 h-10 rounded-full text-white text-sm font-bold">BF</p>
    <p className="flex items-center justify-center bg-[#7C4EE4] w-10 h-10 rounded-full text-white text-sm font-bold">CF</p>
    <p className="flex items-center justify-center bg-[#7C4EE4] w-10 h-10 rounded-full text-white text-sm font-bold">TB</p>
</div>
<div className="w-[1232px] h-[1px] bg-[#7C4EE4] mx-auto mt-10"></div>
    </div>
    <div className=" flex items-center justify-center mt-10  ">
        <p className='text-[16px] font-light' >Copyright Nikhil Inc © 2026. All Right Reserved</p>
    </div>
    </>
  )
}

export default Footer