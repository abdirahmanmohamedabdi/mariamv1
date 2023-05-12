import { useState, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";


const slides = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1683644249/mariam/sPortfolio-27_uvn08a_76b496wewe.jpg ",
    heading: "THIS IS YOUR LOVE STORY",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1682953873/mariam/blog/N_j/N___J-22_owafpi.jpg",
    heading: "TIMELESS",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1683536685/mariam/blog/joanna/Joanna___Nanfa-38_qwfacc.jpg",
    heading: "CANDID + GENUINE",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524533/mariam/Sobia___Tawfiq-41_yhxfbt.jpg",
    heading: "THIS IS YOUR LOVE STORY ",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1682953667/mariam/blog/hazel/Hazel___Etse-8_dmeajf.jpg",
    heading: "PHOTOGRAPHY YOU CAN FEEL",
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1682954041/mariam/blog/Nael/Nael___Lamyae-4_zdkcvu.jpg",
    heading: "YOUR MEMORIES FOREVER PRESERVED",
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1683751567/mariam/blog/annabelle/Annobelle___Jamie-21_fdakj1.jpg",
    heading: "CANDID + GENUINE ",
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1683538033/mariam/blog/sobia/Sobia___Tawfiq-36_tmkepn.jpg      ",
    heading: "YOUR MEMORIES FOREVER PRESERVED",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative  h-screen">
      {slides.map((slide, index) => (
        <Transition
          key={slide.id}
          show={index === currentSlide}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-0"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 mb-5">
            <Image
              src={slide.imageUrl}
              alt=""
             

              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-0 opacity-75"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-2xl  text-white sm:text-2xl md:text-6xl font-abc  mb-4">
                {slide.heading}
              </h1>
            </div>
          </div>
        </Transition>
      ))}
      <div className="absolute bottom-0 left-0 right-0   flex justify-between">
        <button
          className="absolute bottom-20 left-3 h-12 w-12   text-gray-700 hover:text-gray-900 flex items-center justify-center "
          onClick={() =>
            setCurrentSlide(
              currentSlide === 0 ? slides.length - 1 : currentSlide - 1
            )
          }
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l14 0" />
  <path d="M5 12l6 6" />
  <path d="M5 12l6 -6" />
</svg>
        </button>
        <button
          className="absolute bottom-20 right-3 h-12 w-12
           text-gray-700 hover:text-gray-900 flex items-center justify-center "
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
        >
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l14 0" />
  <path d="M13 18l6 -6" />
  <path d="M13 6l6 6" />
</svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
