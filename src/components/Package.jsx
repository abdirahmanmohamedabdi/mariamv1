import pic5 from "../../public/pic5.jpg"
import Image from "next/image"

export default function Package() {
    return (
 <div>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
      <Image class="object-cover object-center h-full w-full" alt="hero" src={pic5}
      width="0"
      height="800"
      sizes="700vw"/>
        
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        
         
          
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <a class="text-brown inline-flex items-center">Packages Starting at 2300
            
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
 </div>

)
}



