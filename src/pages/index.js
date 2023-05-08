import Nav from "@/components/Navbar"
import About from "@/components/About"

import Abouters from "@/components/Gallery"
import Link from "next/link"
import HeroSlider from "@/components/Homepage"
import Footer from "@/components/Footer"
import Hometext from "@/components/texthome"
import Bloghome from "@/components/Bloghome"
import ContactSection from "@/components/ContactSection"
import Head from "next/head"

export default function Home() {
  return (
<div className="">
<Head>
   
<link rel="shortcut icon" href="/favicon.ico" />
      <meta name="title" content="Mariam: Photography by a UK-based Photographer"/>
<meta name="description" content="My name is Mariam i am a photographer based in the UK, with a passion for capturing beautiful moments around the world. Specializing in engagements, proposals, and weddings,"/>
    </Head>


<HeroSlider/>
<Hometext/>
<About/>
<Abouters/>
<Bloghome/>
 <ContactSection/> 
</div>
  )
}
