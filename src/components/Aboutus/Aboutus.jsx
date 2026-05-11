import React from 'react'
import Card, { AboutCards } from './AboutCards'
import jsonData from "./about.json"
const Aboutus = ({profileimage}) => {
    const passdata=JSON.stringify(jsonData)
    const pars=JSON.parse(passdata)
    pars.Aboutcard.map((item)=>console.log(item))
  return (<>
    <div className="flex flex-col items-center">
        <div >
            <p className='text-[#666666] text-[16px] font-bold text-center'>About Me</p>
        </div>
        <div className=" max-w-182 max-h-32 text-4xl md:text-4xl font-bold leading-tight text-center mt-6 mb-6">
            <h1 className='text-[48px] font-bold'>
                Creative Blog Writting and publishing by Me
            </h1>
        </div>
        <div>
            <p className='text-[16px] text-[#666666] max-w-222 max-h-19 text-center '>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy
                 foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  </p>
        </div>
        <div >
            <img className="w-306 max-h-150 mt-23 mb-25" src={profileimage}/>
        </div>
    </div>
    <div>
        <div>
            <p className='text-[#666666] text-[16px] font-bold text-left'> How i work</p>
        </div>
        <div className="max-w-125 max-h-32">
            <h1 className='text-[48px] font-bold mb-21.5  '>
                I will show you how our team works
            </h1>
        </div>
        <div className='flex gap-4'>
            {pars.Aboutcard.map((items,index)=>
            <AboutCards key={index} items={items} />
        )}
        </div>
    </div>
    </>
  )
}

export default Aboutus