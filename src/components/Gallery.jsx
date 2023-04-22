import Image from "next/image"
import pic1 from "../../public/pic1.jpg"
import Link from "next/link"
import pic6 from "../../public/pic6.jpg"

export default function Abouters() {
    return (
 <div>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-abc text-gray-900">You can view my work here</h1>
      <p class="mb-8 leading-relaxed font-abc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div class="flex w-full md:justify-start justify-center items-end">
       
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 bg-brown font-abc focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link href="/Portfolio">Gallery</Link></button>
      </div>
     
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image class="object-cover object-center rounded" alt="hero" src={pic6}
      width="0"
      height="800"
      sizes="700vw"/>
    </div>
  </div>
</section>


 </div>

)
}



