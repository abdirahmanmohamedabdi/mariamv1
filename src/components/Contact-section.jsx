import Image from "next/image"
import kulsoom from "../../public/kulsoom.jpg"
import Link from "next/link"

export default function Contactsection() {
    return (
 <div>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image class="object-cover object-center rounded" alt="hero" src={kulsoom}
      width="0"
      height="800"
      sizes="700vw"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-abc text-gray-900">You can contact me here
       
      </h1>
      <p class="mb-8 font-abc leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div class="flex justify-center">
        <button class="ml-6inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none bg-brown rounded font-abc  text-lg"> <Link href="/Contact">Contact</Link></button>
      </div>
    </div>
  </div>
</section>


 </div>

)
}



