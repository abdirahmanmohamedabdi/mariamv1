import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo.png";
import Image from "next/image";
const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed bg-transparent top-0  w-full z-10">
      <div className="max-w-[1210px] m-auto flex justify-between items-center py-1   text-black">
        <Link href="/">
          <Image src={logo} alt="logo" width="200" height="700" sizes="100vw" />
        </Link>
        <ul className="hidden sm:flex">
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
          <li className="p-4 font-abc ">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="font-abc p-4">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
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
              className="font-abc p-6 text-4xl font-abc hover:text-gray-500"
            >
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  width="100"
                  height="40"
                  sizes="1000vw"
                />
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="font-abc p-4 text-4xl font-abc hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="font-abc p-4 text-4xl font-abc hover:text-gray-500"
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className=" font-abc p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li
              onClick={handleNav}
              className=" font-abc p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/packages">Packages</Link>
            </li>

            <li
              onClick={handleNav}
              className=" font-abc p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li
              onClick={handleNav}
              className=" font-abc p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-1"></div>
    </div>
  );
};

export default Nav;
