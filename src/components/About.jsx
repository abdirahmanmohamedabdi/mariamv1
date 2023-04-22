import Image from "next/image"
import Self from "../../public/Self.jpg"
import Link from "next/link"

export default function About() {
    return (
 <div>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image class="object-cover object-center rounded" alt="hero" src={Self}
      width="0"
      height="800"
      sizes="700vw"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-abc text-gray-900">Hi Im Mariam
       
      </h1>
      <p class="mb-8 font-abc leading-relaxed">I am a wedding photographer Who strives to create a personalized experience that reflects your style and personality, ensuring that your images are as unique as your love story. Trust Me to capture your precious memories and turn them into timeless works of art that you can treasure for a lifetime.</p>
      <div class="flex justify-center">
        <button class="ml-6inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none bg-brown rounded font-abc  text-lg">  <Link href="/About">More About Me</Link></button>
      </div>
    </div>
  </div>
</section>


 </div>

)
}



