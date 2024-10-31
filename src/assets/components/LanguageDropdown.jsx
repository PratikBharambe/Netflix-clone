import React from 'react'
// Language icon import from react-icons
import { HiOutlineLanguage } from "react-icons/hi2";

function LanguageDropdown() {
  return (
    <div className='flex items-center gap-2'>
        <HiOutlineLanguage className="text-lg" />
            <select className="bg-transparent text-white focus:outline-none">
              <option className="text-black w-36 p-4 " value="en">
                English
              </option>
              <option className="text-black w-36 p-4 " value="hi">
                हिन्दी
              </option>
              <option className="text-black w-36 p-4 " value="mr">
                मराठी
              </option>
            </select>
    </div>
  )
}

export default LanguageDropdown