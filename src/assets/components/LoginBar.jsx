import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function LoginBar() {
  return (
    <div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        className="w-[25rem] bg-transparent text-white border border-white placeholder-white px-4 py-2 rounded"
      />
      <button
        type="button"
        className="w-[10rem] focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-[1.15rem] px-2 py-2 mx-2 transition"
      >
        Get Started <IoIosArrowForward className="inline-block font-extrabold" />
      </button>
    </div>
  );
}

export default LoginBar;
