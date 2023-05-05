/* This example requires Tailwind CSS v2.0+ */
import salma from "../../public/salma.jpg"
import Image from "next/image"
export default function Testimonials() {
  return (
    <div>
    <div className="bg-white pt-16 lg:py-14">
    <div className="pb-16 bg-brown lg:pb-0 lg:z-5 lg:relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="relative lg:-my-8">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <Image
                className="object-fit md:h-fit md:w-fit"
                
                src={salma}
                alt="gallery"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2md sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                
                
                <p className="mt-6 text-2xl font-medium font-abc  text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet
                  feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </p>
              </div>
              <footer className="mt-6">
                <p className="text-base font-abc font-medium text-white">Salma and Samira</p>
                <p className="text-base font-abc  font-medium text-warm">Wedding</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>


  </div>
  )
}
