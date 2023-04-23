import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo.png"
import Image from "next/image";
const Nav = () => {
  const [nav, setNav] = useState(false);
  const [color] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        
        setTextColor("#000000");
      } else {
        
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 	"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-brown">
        <Link href="/">
          <Image 
          
           src ={logo}
           width="100"
           height="40"
           sizes="1000vw"
          />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className=" font-abc p-4">
            <Link href="/">Home</Link>
          </li>
          <li className=" font-abc p-4">
            <Link href="/About">About</Link>
          </li>
          <li className=" font-abc p-4">
            <Link href="/Portfolio">Portfolio</Link>
          </li>
          <li className=" font-abc p-4">
            <Link href="/Contact">Packages</Link>
          </li> <li className="p-4">
            <Link href="/Gallery">Contact</Link>
          </li>
          <li className=" font-abc p-4">
            <Link href="/Portfolio">Blog</Link>
          </li>
          
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20}  />
          ) : (
            <AiOutlineMenu size={20}  />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className=" font-abc p-10 text-4xl font-abc hover:text-gray-500"
            >
              <Link href="/">
             
          <Image 
          
           src ={logo}
           width="100"
           height="40"
           sizes="1000vw"
          />
      
              </Link>
            </li>
            <li
              onClick={handleNav}
              className=" font-abc p-4 text-4xl  font-abc hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className=" font-abc p-4 text-4xl  font-abc hover:text-gray-500"
            >
              <Link href="/#gallery">About</Link>
            </li>
            <li
              onClick={handleNav}
              className=" font-abc p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#portfolio">Portfolio</Link>
            </li>
            <li
              onClick={handleNav}
              className=" font-abc p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#contact">Packages</Link>
            </li>
           
            <li
              onClick={handleNav}
              className=" font-abc p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#contact">Contact</Link>
            </li>
            <li
              onClick={handleNav}
              className=" font-abc p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#contact">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;