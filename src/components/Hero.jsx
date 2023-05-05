import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524533/mariam/Sobia___Tawfiq-41_yhxfbt.jpg"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Joanna___Nanfa-27_fiwb2e.jpg"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Nael___Lamyae-1_spmp1i.jpg"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg"
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
    <p className="legend py-6">{image.label}</p>
  </div>
));

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="App mb-5">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}