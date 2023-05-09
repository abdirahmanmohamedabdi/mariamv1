import About2 from "@/components/About2"
import ContactSection from "@/components/ContactSection"
import Testimonials from "@/components/Testimonials"
import Faq from "@/components/FAQ"
import Head from "next/head"

export default function About() {
    return (
        <div>
<Head>
<title>About - Mariam Photography</title>
	<link rel="canonical" href="https://mariamphotography.co.uk/about" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="About - Mariam Photography" />
	<meta property="og:url" content="https://mariamphotography.co.uk/about/" />
	<meta property="og:site_name" content="Mariam Photography" />
</Head>

    <About2/>
    
    <Testimonials/>
   <Faq/>
   <ContactSection/>
 

 </div>

)
}



