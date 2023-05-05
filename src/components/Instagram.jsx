
import gallery1 from "../../public/gallery1.jpg"
import gallery3 from "../../public/gallery3.jpg"
import pic1 from "../../public/pic1.jpg"
import pic2 from "../../public/pic2.jpg"
import pic3 from "../../public/pic3.jpg"
import pic4 from "../../public/pic4.jpg"
import pic5 from "../../public/pic5.jpg"
import pic6 from "../../public/pic6.jpg"
import kulsoom from "../../public/kulsoom.jpg"
import wedding from "../../public/wedding.jpg"
import Image from "next/image";
import React from "react";
import Link from "next/link"
import { FaInstagram } from "react-icons/fa";


const InstagramImg = ({ socialImg }) => {
  return (
    <div className="">
      <Image
        src={socialImg}
        alt="/"
       
        height="100"
      
        layout="responsive"
      />
      
    </div>
  );
};




const Instagram = () => {
  return (
    <div className="mx-auto	 text-center py-4">
      <p className="text-2xl font-abc font-bold">Follow me on Instagram</p>
      <p className="pb-4 font-abc text-brown font-light	" >
      <Link href="https://www.instagram.com/photosbymariamtheugandan/">@mariamtheugandan</Link>
       </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-1 p-4">
        <InstagramImg socialImg={pic1} />
        <InstagramImg socialImg={pic2} />
        <InstagramImg socialImg={pic3} />
        <InstagramImg socialImg={pic4} />
        <InstagramImg socialImg={pic5} />
        <InstagramImg socialImg={pic6} />
     
      
        
        
      </div>
    </div>
  );
};

export default Instagram;