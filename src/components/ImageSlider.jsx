import { images } from "./images";
import { useState } from "react";
import Next from "./../assets/images/icon-next.svg";
import Previous from "./../assets/images/icon-previous.svg";
import LightBox from "./LightBox";

const ImageSlider = ({ isMobile }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  function handleNextSlide() {
    setCurrentSlide((currentSlide + 1) % images.length);
  }

  function handlePreviousSlide() {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  }

  return (
    <>
      {isMobile && (
        <div className="relative h-full w-full z-0">
          <img
            src={images[currentSlide].img}
            alt={`Slide number ${currentSlide + 1} of this product`}
          ></img>
          <div
            onClick={handlePreviousSlide}
            className="absolute top-[50%] translate-y-[-50%] left-6 bg-white w-8 h-8 rounded-full"
          >
            <img
              src={Previous}
              alt="caret for previous icon"
              className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
            ></img>
          </div>
          <div
            onClick={handleNextSlide}
            className="absolute top-[50%] translate-y-[-50%] right-6 bg-white w-8 h-8 rounded-full"
          >
            <img
              src={Next}
              alt="caret for next icon"
              className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
            ></img>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="class flex flex-col gap-10 md:p-6 lg:p-10 xl:p-14 m-auto">
          <img
            src={images[currentSlide].img}
            className="rounded-2xl cursor-zoom-in object-cover h-auto"
            onClick={() => setLightbox(true)}
          ></img>
          <div className="flex flex-row w-full gap-4 justify-between">
            {/* Thumbnails container */}
            {images.map((elem, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="border-4 rounded-2xl overflow-hidden cursor-pointer border-transparent hover:border-orange-500 duration-200"
                >
                  <img
                    src={elem.thumbnail}
                    alt="thumbnail for product image"
                    className={`duration-200 ${
                      currentSlide === index && "opacity-50"
                    }`}
                  ></img>
                </div>
              );
            })}
          </div>
          {lightbox && (
            <LightBox
              images={images}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              setLightbox={setLightbox}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ImageSlider;
