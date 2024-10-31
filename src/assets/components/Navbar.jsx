import React from "react";
// Logo image import
import netflix from "../images/netflix.png";
// Language icon import from react-icons
import { HiOutlineLanguage } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="bg-gradient-to-b from-black/50 to-transparent">
        <nav className="flex items-center w-[80%] m-auto pt-10 justify-between p-4 h-16">
      {/* Left side: Logo */}
      <div className="h-10 w-36 flex items-center">
        <img src={netflix} alt="Netflix Logo" />
      </div>

      {/* Right side: Language Selector and Sign In Button */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-white border-2 border-neutral-700 rounded-xl p-2 w-36 justify-center">
          <HiOutlineLanguage className="text-lg" />
          <select className="bg-transparent text-white focus:outline-none">
            <option className="text-black w-36 " value="en">English</option>
            <option className="text-black w-36 " value="hi">हिन्दी</option>
            <option className="text-black w-36 " value="mr">मराठी</option>
          </select>
        </div>
        
        <button
          type="button"
          className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 transition">
          Sign In
        </button>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
