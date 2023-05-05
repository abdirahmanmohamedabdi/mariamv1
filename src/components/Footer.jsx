import logo from "../../public/logo.png"
import Image from "next/image"
import Link from "next/link"
export default function Footer() {
    return (
 <div>
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
   
    <Image
    src={logo}
    alt="logo"
    className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
    width="0"
    height="80"
    sizes="100vw"
   
  />
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Mariam
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     
      
      <Link className="ml-3 text-gray-500" href = "mailto: abc@example.com">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="34" className="w-5 h-5" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg>
      </Link>
      <Link className="ml-3 text-gray-500" href="tel:123-456-7890">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" className="w-5 h-5" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
</svg>
      </Link>
      <Link className="ml-3 text-gray-500" href="https://www.instagram.com/photosbymariamtheugandan/">
      
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="34"   className="w-5 h-5" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="4" />
  <circle cx="12" cy="12" r="3" />
  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
</svg>
      </Link>
    </span>
  </div>
</footer>


 </div>

)
}



