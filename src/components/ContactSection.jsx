
import pic4 from "../../public/pic4.jpg"
import Image from "next/image"
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
                Long-term thinking
              </h2>
              <p className="mt-3 text-xlfont-abc  text-white">
                We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows
                us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of
                the universe.
              </p>
              <a
                href="#"
                className="mt-8 w-full block bg-brown font-abc border border-transparent rounded-md py-3 px-8 text-base font-medium text-white  sm:w-auto"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

 </div>

)
}



