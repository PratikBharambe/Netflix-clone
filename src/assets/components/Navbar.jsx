import React from "react";
// Logo image import
import netflix from "../images/netflix.png";
import LanguageDropdown from "./LanguageDropdown";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gradient-to-b from-black/60 to-transparent">
      <nav className="flex items-center w-[83%] m-auto pt-10 justify-between p-4 h-16">
        {/* Left side: Logo */}
        <div className="h-10 w-36 flex items-center">
          <img src={netflix} alt="Netflix Logo" />
        </div>

        {/* Right side: Language Selector and Sign In Button */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-white border-2 border-white rounded-xl p-2 w-36 justify-center" >
            <LanguageDropdown/>
          </div>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2 transition " 
          >
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
