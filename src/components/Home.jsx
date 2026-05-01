import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#7C4EE4] min-h-196.5 flex items-center justify-center px-5'>
      <div className='max-w-6xl w-full flex flex-col md:flex-row items-center justify-between text-white gap-10x mt-15'>
        <div className='text-center md:text-left max-w-xl ml-18'>
            <p className='font-bold mb-8 '>Featured Post</p>
            <h1 className='text-6xl font-medium m-auto '>How AI will Change the Future</h1>
            <p className="font-light mt-6">The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>
    <button className="bg-white min-w-30 min-h-10 text-black rounded-md border-0 text-[14px] mt-4">Read More</button>      
        </div>
        <div className=" mr-22" >
            <img src="Image Placeholder.png" alt='Placeholderimage' className='max-w-md '/>
        </div>
        <div>
         
        </div>
        </div>
    </div>
  )
}

export default Home