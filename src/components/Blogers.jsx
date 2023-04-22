import Image from "next/image"

import Self from "../../public/Self.jpg"
import pic1 from "../../public/pic1.jpg"
import pic2 from "../../public/pic2.jpg"
import pic3 from "../../public/pic3.jpg"
import pic4 from "../../public/pic4.jpg"
import pic5 from "../../public/pic5.jpg"
import pic6 from "../../public/pic6.jpg"
export default function Aboutrers2() {
    return (
 <div>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-abc title-font mb-4 text-gray-900">Here are My blogposts</h1>
     
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
        <Image class="object-cover object-center rounded" alt="hero" 
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={pic1}
      width="0"
      height="800"
      sizes="700vw"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-abc text-brown mb-1">Wedding</h2>
            <h1 class="title-font text-lg font-abc text-gray-900 mb-3">Salma</h1>
            <p class="leading-relaxed font-abc">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
        <Image class="object-cover object-center rounded" alt="hero" 
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={pic2}
      width="0"
      height="800"
      sizes="700vw"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-brown mb-1">Engagement</h2>
            <h1 class="title-font text-lg font-abc text-gray-900 mb-3">Jacob</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
        <Image class="object-cover object-center rounded" alt="hero" 
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={pic3}
      width="0"
      height="800"
      sizes="700vw"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-abc text-brown mb-1">Engagement</h2>
            <h1 class="title-font text-lg font-abc text-gray-900 mb-3">Jules</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
        <Image class="object-cover object-center rounded" alt="hero" 
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={pic4}
      width="0"
      height="800"
      sizes="700vw"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-abc text-brown mb-1">Wedding</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p class="leading-relaxed font-abc">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
        <Image class="object-cover object-center rounded" alt="hero" 
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={pic5}
      width="0"
      height="800"
      sizes="700vw"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-abc text-brown mb-1">Wedding</h2>
            <h1 class="title-font text-lg font-medium text-gray-900  font-abc mb-3">Holden Caulfield</h1>
            <p class="leading-relaxed font-abc">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
        <Image class="object-cover object-center rounded" alt="hero" 
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={pic6}
      width="0"
      height="800"
      sizes="700vw"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-abc text-brown mb-1">Engagement</h2>
            <h1 class="title-font text-lg font-abc text-gray-900 mb-3">Alper Kamu</h1>
            <p class="leading-relaxed font-abc ">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
        <button class="ml-6inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none bg-brown rounded font-abc  text-lg">Contact</button>
      </div>
</section>


 </div>

)
}


