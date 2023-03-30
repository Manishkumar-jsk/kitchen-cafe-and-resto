import Carousel from "./components/carousel/Carousel";
import "./App.css";
import Home from "./components/home/Home";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <>
    <Navbar />
    <Carousel />
    <Home />
    <Gallery />
    <Footer />
    </>
  );
}

export default App;
