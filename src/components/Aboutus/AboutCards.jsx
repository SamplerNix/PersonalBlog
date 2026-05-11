import React from 'react'

export const AboutCards = ({items,key}) => {
  console.log(items)
  return (<>
    <div className='hover:bg-[#7C4EE4] w-100 h-102 rounded-2xl mt-21 mb-15 text-[#666666] hover:text-white'>
      <div className="ml-6 mr-6 ">
      <div className='text-[72px] font-bold mb-2'>    
      <h1>{items.srno}</h1>
      </div>
      <div className=' text-[24px] font-medium'>    
      <h1>{items.heading}</h1>
      </div>
      <div className=' flex text-[16px] font-extralight mt-4'>    
      <p>{items.paragraph}</p>
      </div>
    </div>
    </div>
    </>
  )
}
export default AboutCards