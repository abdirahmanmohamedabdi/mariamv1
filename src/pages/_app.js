import "@/styles/globals.css";
import About from "./about";
import Nav from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import Instagram from "@/components/Instagram";
export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
      
     </Head>
      

       <Nav />
      <Component {...pageProps} /> <Instagram />
      <Footer />
    </>
  );
}
