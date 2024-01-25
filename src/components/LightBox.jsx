import Close from "./../assets/images/icon-close.svg";
import Next from "./../assets/images/icon-next.svg";
import Previous from "./../assets/images/icon-previous.svg";

const LightBox = ({ images, currentSlide, setCurrentSlide, setLightbox }) => {
  function handleNextSlide() {
    setCurrentSlide((currentSlide + 1) % images.length);
  }

  function handlePreviousSlide() {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9] bg-black/70">
      <div className="max-h-[450px] max-w-[450px] absolute left-[50%] translate-x-[-50%] md:top-3 lg:top-6 xl:top-10 z-10">
        {/* Main image */}
        <div className="flex justify-end">
          <img
            onClick={() => setLightbox(false)}
            src={Close}
            alt="close icon"
            className="cursor-pointer my-4"
          ></img>
        </div>
        <div className="relative w-full">
          <img
            src={images[currentSlide].img}
            className="rounded-2xl w-[600px] h-auto"
          ></img>
          {/* Slider controls */}
          <div
            onClick={handlePreviousSlide}
            className="absolute top-[50%] translate-y-[-50%] left-[-15px] cursor-pointer bg-white w-8 h-8 rounded-full"
          >
            <img
              src={Previous}
              alt="caret for previous icon"
              className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
            ></img>
          </div>
          <div
            onClick={handleNextSlide}
            className="absolute top-[50%] translate-y-[-50%] right-[-15px] cursor-pointer bg-white w-8 h-8 rounded-full"
          >
            <img
              src={Next}
              alt="caret for next icon"
              className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
            ></img>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-row items-center justify-center p-8 gap-4">
          {images.map((elem, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative border-4 rounded-2xl overflow-hidden cursor-pointer ${
                  currentSlide === index
                    ? "border-orange-500"
                    : "border-transparent"
                } hover:border-orange-500 duration-200`}
              >
                <div
                  className={`absolute h-full w-full top-0 left-0 ${
                    currentSlide === index && "bg-white/60"
                  }`}
                ></div>
                <img
                  src={elem.thumbnail}
                  alt="thumbnail for product image"
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LightBox;
