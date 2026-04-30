const Card = ({src,category,date,heading,p}) => {
  return (
    <>
    <div className="min-w-80 min-h-[630px]  rounded-md flex flex-col">
      <div className="max-w-80 min-h-90">
        <img src={src} alt="1" ></img>
        
      </div>
      <div className=" flex flex-col">
      <div className="flex content-center">
       <p className=" font-bold text-sm">{category}</p>
       <p className="text-gray-400 text-[12px] ml-1.5">{date}</p> 
      </div>
       <h1 className="font-bold text-[24px]">{heading}</h1>
       <p className="text-gray-400 text-[16px] mt-2">{p} </p>
       </div>
    </div>
    </>
  )
}

export default Card