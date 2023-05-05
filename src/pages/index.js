import Nav from "@/components/Navbar"
import About from "@/components/About"
import Hero from "@/components/Hero"
import Abouters from "@/components/Gallery"
import Aboutrers from "@/components/More"
import Link from "next/link"
import HeroSlider from "@/components/Homepage"
import Footer from "@/components/Footer"
import Bloghome from "@/components/Bloghome"
import ContactSection from "@/components/ContactSection"
import Head from "next/head"

export default function Home() {
  return (
<div className="">
<Head>
   
<link rel="shortcut icon" href="/sprite.svg" />
      
    </Head>


<HeroSlider/>
<About/>
<Abouters/>
<Bloghome/>
 <ContactSection/> 
</div>
  )
}
