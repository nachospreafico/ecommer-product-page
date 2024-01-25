import { useEffect, useState } from "react";
import ImageSlider from "./components/ImageSlider";
import NavBar from "./components/NavBar";
import Details from "./components/Details";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavBar isMobile={isMobile} cart={cart} setCart={setCart} />
      <div className="flex flex-col md:grid md:grid-cols-2 md:p-8 lg:p-10 xl:px-40 gap-8">
        <ImageSlider isMobile={isMobile} />
        <Details setCart={setCart} cart={cart} />
      </div>
    </>
  );
}

export default App;
