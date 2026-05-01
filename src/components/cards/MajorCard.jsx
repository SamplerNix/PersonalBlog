import React from 'react'

const MajorCard = ({src,category,date,heading,p}) => {
  return (
    <div>
        <div className="flex place-content-between mb-22 items-center  " >
            <div>
            <h1 className='text-[48px] font-bold'>Our Recent Post</h1>
            </div>
            <div className='flex items-center'>
            <button className=" border-purple-500 border-1 p-[9.5px] font-medium rounded-md text-purple-500 hover:bg-[#7C4EE4] hover:text-white ">Read More</button>
            </div>
        </div>
    <div className="flex">
         <div className="flex mb-14">
                 <img src="vr.png" className="max-w-[712px] max-h-[456px]"/>
         </div>
       <div className=" ml-14 flex flex-col">
      <div className="flex content-center">
       <p className=" font-bold text-sm">{category}</p>
       <p className="text-gray-400 text-[12px] ml-1.5">{date}</p> 
      </div>
       <h1 className="font-bold text-[32px]">{heading}</h1>
       <p className="text-gray-400 text-[16px] mt-2">{p} </p>
       <div>
       <button className="mt-10 border-purple-500 border-1 p-[9.5px] font-medium rounded-md text-purple-500 hover:bg-[#7C4EE4] hover:text-white ">Read More</button>git 
       </div>
       </div>
       </div>
  </div>
  )
}

export default MajorCard