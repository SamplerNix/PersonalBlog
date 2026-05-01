import "./App.css";
import Article from "./components/Article";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Subscribe/footer";
import Cards from "./components/cards/cards"
function App() {
  return (
    <>
    <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 ">
      <Navigation />
      <Home/>
      <Article/>
      <Cards/>
      <Subscribe/>
    <Footer/>
      </div>
    </>
  );
}

export default App;
