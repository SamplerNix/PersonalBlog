import React from 'react'
import Card from "./card"
import MajorCard from './MajorCard'
const Majorobj={
 src: "vr.png",
    category:"Travel",
    date:"13 Jan 2026",
    heading:"How to build strong portfolio and get a Job in UI/UX",
    p:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include you can ship large volumes at costs",
}
  const user = [{
    src: "/Container.png",
    category:"Travel",
    date:"13 Jan 2026",
    heading:"How to build strong portfolio and get a Job in UI/UX",
    p:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include you can ship large volumes at costs",
  },
  {
    src: "/Image Placeholder-1.png",
    category:"Travel",
    date:"13 Jan 2026",
    heading:"How to build strong portfolio and get a Job in UI/UX",
    p:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include you can ship large volumes at costs",
  },
    {
    src: "/Image Placeholder-2.png",
    category:"Travel",
    date:"13 Jan 2026",
    heading:"How to build strong portfolio and get a Job in UI/UX",
    p:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include you can ship large volumes at costs",
  },
    {
    src: "/Image Placeholder-3.png",
    category:"Travel",
    date:"13 Jan 2026",
    heading:"How to build strong portfolio and get a Job in UI/UX",
    p:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include you can ship large volumes at costs",
  },
      {
    src: "/Image Placeholder-4.png",
    category:"Travel",
    date:"13 Jan 2026",
    heading:"How to build strong portfolio and get a Job in UI/UX",
    p:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include you can ship large volumes at costs",
  },
      {
    src: "/Image Placeholder-5.png",
    category:"Travel",
    date:"13 Jan 2026",
    heading:"How to build strong portfolio and get a Job in UI/UX",
    p:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include you can ship large volumes at costs",
  },
  ]
const Cards = ( ) => {
  return (<>
  <MajorCard src={Majorobj.src}
      category={Majorobj.category}
    date={Majorobj.date}
    heading={Majorobj.heading}
    p={Majorobj.p}
  />  
    <div className="grid grid-cols-3 gap-30">{user.map((item, index) => (
  <Card
    key={index}
    src={item.src}
    category={item.category}
    date={item.date}
    heading={item.heading}
    p={item.p}
  />
))}</div>
    </>
  )
}

export default Cards