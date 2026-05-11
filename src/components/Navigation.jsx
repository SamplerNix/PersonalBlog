import { CiSearch } from "react-icons/ci";
const Navigation = () => {
  return( <>
  <div className="min-w-1 min-h-14 flex justify-around  ">
    <div className="flex items-center">
    <img src='Logo.png' alt='logoimg' className=" min-w-32 max-h-10 " />
    </div>
    <div className="flex gap-10 items-center">
    <h1 className=""><a className="" href="/Aboutus">AboutMe</a></h1>
    <h1>Blog</h1>
    <CiSearch className="text-3xl border-0 "/>
    <button className="bg-purple-500 min-w-30 min-h-10 text-white rounded-md border-0 ">Contact us</button>
    </div>
  </div>
  </>
  );
};

export default Navigation;
