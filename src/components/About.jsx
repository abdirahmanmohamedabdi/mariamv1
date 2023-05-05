/* This example requires Tailwind CSS v2.0+ */
import kulsoom from "../../public/kulsoom.jpg"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div>
           

    <div className="relative bg-lightbrown">
    <div className="relative h-75 2xl:h-72 md:absolute md:left-0 md:h-full sm:w-1/2">
      <Image
        className="w-full h-full object-cover"
        src={kulsoom}
        alt="picture"
      />
      <div
        aria-hidden="true"
        className="absolute inset-1  "
      />
    </div>
    <div className="relative mx-auto max-w-lg px-1 py-2 lg:max-w-4xl md:px-2 sm:py- md:py-28 lg:px-1 2xl:py-12">
      <div className="md:ml-auto md:w-1/3 md:pl-5">
       
        <p className="mt-1 text-white text-4xl font-extrabold  font-abc   px-6 mx-20 md:text-6xl">Browse The Portfolio</p>
      
        <div className="mt-1">
          <div className="inline-flex ">
            <Link
              href="/portfolio"
              className="inline-flex items-start justify-right  px-32  py-8 text-base font-abc text-white bg-transparent hover:text-brown underline"
            >
             Portfolio
             
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-4">
</div>
  </div>



</div>

  )
}
