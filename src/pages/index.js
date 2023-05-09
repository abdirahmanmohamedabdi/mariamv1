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
   
<title>Home - Mariam Photography</title>
	<link rel="canonical" href="https://mariamphotography.co.uk/" />
<link rel="shortcut icon" href="favicon/favicon2.png" />
   <meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Home - Mariam Photography" />
	<meta property="og:url" content="https://mariamphotography.co.uk/" />
	<meta property="og:site_name" content="Mariam Photorgraphy" />
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
