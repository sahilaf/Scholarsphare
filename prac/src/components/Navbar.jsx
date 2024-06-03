// Navbar.jsx
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 relative z-10 ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        SCHOLARSPHARE.
      </h1>
      <ul className="hidden md:flex">
        <a href="/">
          <li className="p-4 hover:bg-gradient-to-r from-[#00DF9A] to-[#004D73] rounded-md">Home</li>
        </a>
        <a href="/About">
          <li className="p-4 hover:bg-gradient-to-r from-[#00DF9A] to-[#004D73] rounded-md">About</li>
        </a>
        <a href="/Contact">
          <li className="p-4 hover:bg-gradient-to-r from-[#00DF9A] to-[#004D73] rounded-md">Contact</li>
        </a>
        <a href="/Login">
          <li className="p-4 hover:bg-gradient-to-r from-[#00DF9A] to-[#004D73] rounded-md">Login</li>
        </a>
        <a href="/AdminLogin">
          <li className="p-4 hover:bg-[#00df9a] rounded-md">Admin</li>
        </a>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed bg-black left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 block md:hidden backdrop-blur-xl bg-white/5 rounded-lg"
            : "fixed left-[-100%] block md:hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          SCHOLARSPHARE.
        </h1>
        <ul className="p-8 uppercase">
          <a href="/">
            <li className="p-4 border-b border-gray-600 hover:bg-gradient-to-r from-[#00DF9A] to-[#004D73] rounded-md">
              Home
            </li>
          </a>
          <a href="/About">
            <li className="p-4 border-b border-gray-600 hover:bg-gradient-to-r from-[#00DF9A] to-[#004D73] rounded-md">
              About
            </li>
          </a>
          <a href="/Contact">
            <li className="p-4 border-b border-gray-600 hover:bg-gradient-to-r from-[#00DF9A] to-[#004D73] rounded-md">
              Contact
            </li>
          </a>
          <a href="/Login">
            <li className="p-4 hover:bg-gradient-to-r from-[#00DF9A] to-[#004D73] border-b border-gray-600 rounded-md">Login</li>
          </a>
          <a href="/AdminLogin">
            <li className="p-4 hover:bg-[#00df9a] rounded-md">Admin</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
