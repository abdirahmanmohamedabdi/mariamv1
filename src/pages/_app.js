import '@/styles/globals.css'
import Nav from '@/components/Navbar'
import Footer from '@/components/Footer'
import Instagram from '@/components/Instagram'
export default function App({ Component, pageProps }) {
  return<> 

  <title>Mariam</title> <link rel="icon" ></link><meta name="viewport" content="initial-scale=1.0, width=device-width" /> <meta name="description" content="This is a test description." /> <Nav/><Component {...pageProps} />  <Instagram/><Footer/></>
}
