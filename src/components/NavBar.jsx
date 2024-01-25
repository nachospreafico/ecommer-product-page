import { useState } from "react";
import MenuIcon from "./../assets/images/icon-menu.svg";
import Logo from "./../assets/images/logo.svg";
import Cart from "./../assets/images/icon-cart.svg";
import Avatar from "./../assets/images/image-avatar.png";
import MobileMenu from "./MobileMenu";
import LinksList from "./LinksList";
import CartDetails from "./CartDetails";

const NavBar = ({ isMobile, cart, setCart }) => {
  const [nav, setNav] = useState(false);
  const [cartDetails, setCartDetails] = useState(false);

  return (
    <header className="flex flex-row justify-between items-center p-5 md:p-10 lg:p-14 xl:px-24 md:border-b-2">
      {/* Navigation bar for <768px devices */}
      {isMobile && (
        <>
          <div className="flex flex-row gap-4 items-center">
            <img
              src={MenuIcon}
              alt="menu icon for mobile devices"
              onClick={() => setNav(true)}
            ></img>
            <img src={Logo} alt="logo image" className=""></img>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div
              onClick={() => setCartDetails(!cartDetails)}
              className="relative"
            >
              {cart > 0 && (
                <span className="absolute bg-orange-500 px-2 top-[-25%] right-[-25%] rounded-lg text-xs text-white font-bold">
                  {cart}
                </span>
              )}
              <img src={Cart} alt="cart icon" className="w-6 h-6"></img>
            </div>
            <img src={Avatar} alt="avatar image" className="w-8 h-8"></img>
          </div>
          {nav && (
            <>
              {/* Overlay for when menu is active */}
              <div
                onClick={() => setNav(false)}
                className="fixed top-0 left-0 bg-black/50 z-10 h-screen w-screen"
              ></div>
              <MobileMenu setNav={setNav} />
            </>
          )}
          {cartDetails && (
            <>
              <div
                onClick={() => setCartDetails(false)}
                className="fixed top-0 left-0 h-screen w-screen z-10 bg-transparent"
              ></div>
              <CartDetails
                cart={cart}
                setCartDetails={setCartDetails}
                setCart={setCart}
              />
            </>
          )}
        </>
      )}

      {/* >768px devices NavBar */}
      {!isMobile && (
        <>
          <div className="flex flex-row gap-8 lg:gap-10 items-center">
            <img src={Logo} alt="logo image" className="cursor-pointer"></img>
            <nav className="flex flex-row gap-6 lg:gap-8">
              <LinksList />
            </nav>
          </div>
          <div className="flex flex-row gap-8 lg:gap-10 items-center">
            <div
              onClick={() => setCartDetails(!cartDetails)}
              className="relative "
            >
              {cart > 0 && (
                <span className="absolute cursor-pointer bg-orange-500 px-2 top-[-25%] right-[-25%] rounded-lg text-xs text-white font-bold">
                  {cart}
                </span>
              )}
              <img
                src={Cart}
                alt="cart icon"
                className="w-6 h-6 cursor-pointer"
              ></img>
              {cartDetails && (
                <>
                  <CartDetails
                    cart={cart}
                    setCartDetails={setCartDetails}
                    setCart={setCart}
                  />
                </>
              )}
            </div>
            <img
              src={Avatar}
              alt="avatar image"
              className="w-12 h-12 cursor-pointer rounded-full border-2 hover:border-orange-500 duration-200 border-transparent"
            ></img>
          </div>
        </>
      )}
    </header>
  );
};

export default NavBar;
