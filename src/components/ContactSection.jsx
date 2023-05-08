
import pic4 from "../../public/pic4.jpg"
import Image from "next/image"
import Link from "next/link"
export default function ContactSection() {
    return (
 <div>

<section aria-labelledby="cause-heading">
          <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={pic4}
                alt="picture"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2 id="cause-heading" className="text-3xl font-extrabold  font-abc tracking-tight text-white sm:text-4xl">
                Contact
              </h2>
              <p className="mt-3 text-xlfont-abc  text-white">
              YOU DESERVE THE VERY BEST PHOTOGRAPHER FOR YOUR WEDDING DAY.
              </p>
              <Link
                href="/contact"
                className="mt-8 w-full block bg-brown font-abc border border-transparent rounded-md py-3 px-8 text-base font-medium text-white  sm:w-auto"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

 </div>

)
}



