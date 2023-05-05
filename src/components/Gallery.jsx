/* This example requires Tailwind CSS v2.0+ */
import Self from "../../public/Self.jpg"
import Image from "next/image"
import Link from "next/link"

export default function Abouters() {
  return (
    <div>
    <div className="relative bg-warm">
    <div className="relative h-75 2xl:h-72 md:absolute md:right-0 md:h-full sm:w-1/2">
      <Image
        className="w-full h-full object-cover"
        src={Self}
        alt="mariamspicture"
      />
      <div
        aria-hidden="true"
        className="absolute inset-1  "
      />
    </div>
    <div className="relative mx-6 max-w-lg px-1 py-2 lg:max-w-4xl md:px-2 sm:py- md:py-28 lg:px-1 2xl:py-12">
      <div className="xl:ml-3 md:w-14 md:pl-1">
       
        <p className="mt-1 text-brown text-4xl font-extrabold  font-abc  text-left  px-0  mx-20 lg:text-7xl">Meet Mariam</p>
      
        <div className="mt-1">
          <div className="inline-flex ">
            <Link
              href="/about"
              className="inline-flex items-start justify-left  px-20 py-3  text-base font-medium text-brown bg-transparent hover:text-white underline"
            >
             About
             
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-4 ">
</div>
  </div>



</div>
  )
}
