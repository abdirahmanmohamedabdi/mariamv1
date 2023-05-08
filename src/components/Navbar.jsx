import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  const handleNav = () => {
    setNav(!nav);
  };

  

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1040px] m-auto flex justify-between items-center p-1 text-black">
        <Link href="/">
          <Image src={logo} style={{ color: `${textColor}` }} className="h-30 w-28">
          
          </Image>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="font-abc p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="font-abc p-4">
            <Link href="/about">About</Link>
          </li>
          <li className="font-abc p-4">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="font-abc p-4">
            <Link href="/packages">Packages</Link>
          </li>
          <li className=" font-abc p-4">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="font-abc p-4">
            <Link href="/blog">Blog</Link>
          </li>
         
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-warm text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          
          <ul>
            <li>
            <Link href="/">
          <Image src={logo} style={{ color: `${textColor}` }} className="h-30 w-48">
          
          </Image>
        </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl font-abc hover:text-black-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl font-abc hover:text-gray-500"
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl font-abc  hover:text-gray-500"
            >
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl font-abc hover:text-gray-500"
            >
              <Link href="/packages">Packages</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl font-abc hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl font-abc hover:text-gray-500"
            >
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;