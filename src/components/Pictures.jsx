import gallery1 from "../../public/gallery1.jpg"
import gallery2 from "../../public/gallery2.jpg"
import gallery3 from "../../public/gallery3.jpg"
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import gallery4 from "../../public/gallery4.jpg"
import gallery5 from "../../public/gallery5.jpg"
import gallery6 from "../../public/gallery6.jpg"
import gallery7 from "../../public/gallery7.jpg"
import sprite from "../../public/sprite.svg"
import Image from "next/image"

export default function Pictures() {
  const images = [
    "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524534/mariam/Pritisha___Ram-11_bzz5we.jpg",
    "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524533/mariam/Sobia___Tawfiq-41_yhxfbt.jpg",
    "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524533/mariam/Portfolio-48_swo69m.jpg",
    "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524532/mariam/Portfolio-6_kenzqf.jpg",
    "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524532/mariam/Portfolio-11_us4m2j.jpg",
    "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Joanna___Nanfa-27_fiwb2e.jpg",
    "https://res.cloudinary.com/dyijvml1y/image/upload/v1682953597/mariam/blog/annabelle/Annobelle___Jamie-2_fr2kxs.jpg",
    "https://res.cloudinary.com/dyijvml1y/image/upload/v1681524531/mariam/Nael___Lamyae-1_spmp1i.jpg",
    "https://res.cloudinary.com/dyijvml1y/image/upload/v1682954123/mariam/blog/Pritisha/Pritisha___Ram-5_x6g1sr.jpg",
  ];
  
    return (
 <div>
 <div className=" relative ">
 
    <Carousel useKeyboardArrows={true}>
      {images.map((URL, index) => (
        <div className="slide">
          <Image alt="sample_file"  width="0"
      height="800"
      sizes="700vw"
       showThumbs={false}
      src={URL} key={index} />
        
        </div>
      ))}
    </Carousel>
  </div>
 </div>

)
}



