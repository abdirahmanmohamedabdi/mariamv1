import { useState, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const slides = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Joanna___Nanfa-41_zbegtm.jpg",
    
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Nael___Lamyae-1_spmp1i.jpg",
   
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524532/mariam/Portfolio-6_kenzqf.jpg",
    
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1682953664/mariam/blog/hazel/Hazel___Etse-5_ygphyr.jpg",
   
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524534/mariam/Pritisha___Ram-11_bzz5we.jpg",
    
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Nael___Lamyae-1_spmp1i.jpg",
   
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Annobelle___Jamie-7_cld9hu.jpg",
   
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1682953552/mariam/blog/kulsoom/Kulsoom___Aarif-3_dnj8a3.jpg",
   
  },

  {
    id: 10,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1682954127/mariam/blog/Pritisha/Pritisha___Ram-12_fuonh6.jpg",
   
  },
  {
    id: 11,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524532/mariam/Kulsoom___Aarif-36_ghfrlo.jpg",
   
  },
  {
    id: 12,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1683536683/mariam/blog/joanna/Joanna___Nanfa-69_r7qg0k.jpg",
   
  },
];

const Pictures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-fill h-screen mb-30 mt-4">
      {slides.map((slide, index) => (
        <Transition
          key={slide.id}
          show={index === currentSlide}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 mb-5">
            <Image
         
              src={slide.imageUrl}
              alt=""
              quality={80}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-0 opacity-75"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-narrow-left h-6  w-6"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="9" y2="16" />
            <line x1="5" y1="12" x2="9" y2="8" />
          </svg>
        </button>
        <button
          className="absolute bottom-20 right-3 h-12 w-12
           text-gray-700 hover:text-gray-900 flex items-center justify-center "
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-right h-6  w-6"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="13" y1="18" x2="19" y2="12" />
            <line x1="13" y1="6" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pictures;
