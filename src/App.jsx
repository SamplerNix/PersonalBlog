import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";
import Article from "./components/Article";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Subscribe/footer";
import Cards from "./components/cards/cards"
import Contactus from "./components/contactus/contactus";
const prof={
    image:"/profileimage.png",
}
function App() {
  return (
    <>
    <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 ">
      <Navigation />
      <Routes>
        <Route path="/"
         element={
         <>
      <Home/>
      <Article/>
      <Cards/>
      </>
        }/>
       <Route path="/AboutMe" element={<Aboutus profileimage={prof.image}/>} ></Route> 
       <Route path="/ContactUs" element={  <Contactus/>} ></Route> 
      </Routes>
      <Subscribe/>
    <Footer/>
      </div>
    </>
  );
}

export default App;
