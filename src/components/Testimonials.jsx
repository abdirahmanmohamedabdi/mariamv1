import Image from "next/image";
import salma from "../../public/salma.jpg";
import wedding from "../../public/wedding.jpg"
export default function Testimonials() {
  return (
    <div>
      <section className="bg-white overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
            
            
          <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
              <Image
                className="object-cover object-center "
                src={wedding}
                width="200"
                height="200"
                sizes="200vw"
                alt=""
                Image
              />
            </div>

            <div className="relative lg:ml-10">
              <blockquote className="relative">
                <div className="text-2xl leading-9 font-medium text-gray-900">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex">
                   
                   
                    <div className="ml-4 lg:ml-0">
                      <div className="text-base font-medium text-gray-900">
                        Salim And Salima
                      </div>
                      <div className="text-base font-medium text-brown">
                        Engagement
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative lg:flex lg:items-center">
            <div className="hidden lg:block lg:flex-shrink-0">
              <Image
                className="object-cover object-center "
                src={salma}
                width="200"
                height="200"
                sizes="200vw"
                alt=""
                Image
              />
            </div>

            <div className="relative lg:ml-10">
              <blockquote className="relative">
                <div className="text-2xl leading-9 font-medium text-gray-900">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex">
                    
                    <div className="ml-4 lg:ml-0">
                      <div className="text-base font-medium text-gray-900">
                        John And Jane
                      </div>
                      <div className="text-base font-medium text-brown">
                        Wedding
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
