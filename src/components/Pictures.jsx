import gallery1 from "../../public/gallery1.jpg"
import gallery2 from "../../public/gallery2.jpg"
import gallery3 from "../../public/gallery3.jpg"
import gallery4 from "../../public/gallery4.jpg"
import gallery5 from "../../public/gallery5.jpg"
import gallery6 from "../../public/gallery6.jpg"
import gallery7 from "../../public/gallery7.jpg"
import Image from "next/image"

export default function Pictures() {
    return (
 <div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Here are my Photos</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">W  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
        <Image class="w-full object-cover h-full object-center block" alt="hero" src={gallery1}
      width="0"
      height="800"
      sizes="700vw"/>
         
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <Image class="w-full object-cover h-full object-center block" alt="hero" src={gallery2}
      width="0"
      height="800"
      sizes="700vw"/>
        </div>
        <div class="md:p-2 p-1 w-full">
        <Image class="w-full object-cover h-full object-center block" alt="hero" src={gallery3}
      width="0"
      height="800"
      sizes="700vw"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
        <Image class="w-full object-cover h-full object-center block" alt="hero" src={gallery4}
      width="0"
      height="800"
      sizes="700vw"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <Image class="w-full object-cover h-full object-center block" alt="hero" src={gallery5}
      width="0"
      height="800"
      sizes="700vw"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <Image class="w-full object-cover h-full object-center block" alt="hero" src={gallery6}
      width="0"
      height="800"
      sizes="700vw"/>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="flex justify-center">
        <button class="ml-6inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none bg-brown rounded font-abc  text-lg">Contact</button>
      </div>

 </div>

)
}



