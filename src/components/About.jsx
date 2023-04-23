import Image from "next/image"
import Self from "../../public/Self.jpg"
import Link from "next/link"

export default function About() {
  return (
    <div>

      <section class="	">
        <div class="container mx-auto flex px-2 py-14 sm:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image class="object-cover object-center rounded" alt="hero" src={Self}
              width="0"
              height="800"
              sizes="700vw" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24  items-center text-justify">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-abc text-gray-900">Hi Im Mariam

            </h1>
            <p class="mb-4 font-abc 	font-medium text-justify">I am a wedding photographer Who strives to create a personalized experience that reflects your style and personality, ensuring that your images are as unique as your love story. Trust Me to capture your precious memories and turn them into timeless works of art that you can treasure for a lifetime.</p>
            <div class="flex w-full md:justify-start justify-center items-end">

              <button class="inline-flex text-white bg-brown border-0 py-2 px-6 bg-brown font-abc focus:outline-none rounded-md

text-lg"><Link href="/About">About</Link></button>
            </div>
          </div>
        </div>
      </section>


    </div>

  )
}



