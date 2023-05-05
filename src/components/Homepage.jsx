import { useState, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const slides = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524533/mariam/Sobia___Tawfiq-41_yhxfbt.jpg",
    heading: "Capturing your memories, one frame at a time",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tincidunt urna vitae convallis.",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Nael___Lamyae-1_spmp1i.jpg",
    heading: "Relive your special day through our lens.",
    description:
      "Vivamus tincidunt nibh sed felis convallis, in congue felis consequat. Etiam euismod lacus a nisl ultricies.",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524533/mariam/Portfolio-48_swo69m.jpg",
    heading: "Timeless moments, forever preserved",
    description:
      "Praesent interdum eros euismod enim vehicula fringilla. Nulla ullamcorper orci at lacus fermentum tempor.",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524533/mariam/Portfolio-48_swo69m.jpg",
    heading: "Let us tell your love story",
    description:
      "Praesent interdum eros euismod enim vehicula fringilla. Nulla ullamcorper orci at lacus fermentum tempor.",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Joanna___Nanfa-27_fiwb2e.jpg",
    heading: "Images that speak louder than words",
    description:
      "Praesent interdum eros euismod enim vehicula fringilla. Nulla ullamcorper orci at lacus fermentum tempor.",
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Nael___Lamyae-1_spmp1i.jpg",
    heading: "Your perfect day, our perfect shots.",
    description:
      "Praesent interdum eros euismod enim vehicula fringilla. Nulla ullamcorper orci at lacus fermentum tempor.",
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1682953601/mariam/blog/annabelle/Annobelle___Jamie-13_m5kka8.jpg",
    heading: "Tagline",
    description:
      "Praesent interdum eros euismod enim vehicula fringilla. Nulla ullamcorper orci at lacus fermentum tempor.",
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1682953552/mariam/blog/kulsoom/Kulsoom___Aarif-14_wmlv9d.jpg",
    heading: "Another one.",
    description:
      "Praesent interdum eros euismod enim vehicula fringilla. Nulla ullamcorper orci at lacus fermentum tempor.",
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
    <div className="relative h-screen">
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
      <div className="absolute bottom-0 left-3 right-3   flex justify-between">
        <button
          className="absolute bottom-20 left-0 h-12 w-12   text-gray-700 hover:text-gray-900 flex items-center justify-center shadow"
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
          className="absolute bottom-20 right-0 h-6 w-6
           text-gray-700 hover:text-gray-900 flex items-center justify-center shadow"
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

export default HeroSlider;
