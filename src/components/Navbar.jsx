import Image from "next/image"
import hero from "../../public/hero.jpg"
import logo from "../../public/logo.jpg"
import Link from "next/link"
export default function Nav() {
  return (
    <div>
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-50 flex-col md:flex-row items-center">
  <Image
    src={logo}
    width="0"
    height="80"
    sizes="100vw"
   
  />

    <nav className="md:ml-auto  flex-wrap items-center font-medium		font-abc text-black text-justify-center">
      <Link className="mr-5 hover:text-gray-900"  href="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900" href="/Blog">About</Link>
      <Link className="mr-5 hover:text-gray-900" href="/About">Portfolio</Link>
      <Link className="mr-5 hover:text-gray-900" href="/Packages">Packages</Link>
      <Link className="mr-5 hover:text-gray-900" href="/Contact">Contact</Link>
      <Link className="mr-5 hover:text-gray-900" href="/Portfolio">Blog</Link>
    
    </nav>
    
  </div>
</header>
    </div>
  )
}


