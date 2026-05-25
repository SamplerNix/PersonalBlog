import Card from "../cards/card"
const popular=[{
    src: "Image Placeholder-1.png",
    category:"Travel",
    date:"13 Jan 2026",
    heading:"How to build strong portfolio and get a Job in UI/UX",
    p:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include you can ship large volumes at costs",
},{
    src: "Image Placeholder-1.png",
    category:"Travel",
    date:"13 Jan 2026",
    heading:"How to build strong portfolio and get a Job in UI/UX",
    p:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include you can ship large volumes at costs",
},{
    src: "Image Placeholder-1.png",
    category:"Travel",
    date:"13 Jan 2026",
    heading:"How to build strong portfolio and get a Job in UI/UX",
    p:"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include you can ship large volumes at costs",
}]
const Blog = ({src,category,date,heading,p}) => {
  return (
    <>
    <div>
        <div className=" flex gap-2 items-center mt-21 mb-7 ml-29">
                       <p className="font-bold">Developement</p>
             <p className="text-gray-400 text-[12px] ">13 Jan 2026</p>
        </div>
        <div className="max-w-5xl max-h-32 text-left ml-29 mb-14 ">
            <h1 className="text-[48px] font-semibold">
                How to make a Game look more attractive with New VR & AI Technology
            </h1>
        </div>
        <div className=" flex mb-14 justify-center">
            <img src="vr.png"/>
        </div>
        <div className="max-w-5xl min-h-72 flex items-center ml-15 justify-center">
            <p className="text-[#666666] text-16">
 This is where paragraph should be entered Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.

We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products. Today, we’re excited to share our early progress. Developers and businesses can now try new APIs and products that make it easy, safe and scalable to start building with Google’s best AI models through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace, we’re introducing new features that help people harness the power of generative AI to create, connect and collaborate.
            </p>
        </div>
        <div className="flex justify-center mb-34">
            <img src="Image.png" alt="sub image" className=""/>
        </div>
      <div className="flex justify-between items-center mb-14">
            <h1 className="text-[48px] font-bold">
                Popular Post
            </h1>
            <button className="bg-[#7C4EE4] text-white border-none w-36.75 h-13.25 rounded-[5px]">View all</button>
        </div>
        <div className="grid grid-cols-3 gap-30">{popular.map((item, index) => (
  <Card
    key={index}
    src={item.src}
    category={item.category}
    date={item.date}
    heading={item.heading}
    p={item.p}
  />
))}</div>
    </div>
    </>
  )
}

export default Blog