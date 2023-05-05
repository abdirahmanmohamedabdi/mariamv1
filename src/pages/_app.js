import '@/styles/globals.css'
import About from './about'
import Nav from '@/components/Navbar'
import Head from 'next/head'
import Footer from '@/components/Footer'
import Instagram from '@/components/Instagram'
export default function App({ Component, pageProps }) {
  return<> 

<Head>  <link rel="shortcut icon" href="/sprite.svg" />     </Head> <meta name="viewport" content="initial-scale=1.0, width=device-width" /> <meta name="description" content="This is a test description." /> <Nav/><Component {...pageProps} />  <Instagram/><Footer/></>
}
