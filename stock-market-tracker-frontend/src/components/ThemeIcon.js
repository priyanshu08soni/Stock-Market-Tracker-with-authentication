import React, { useContext } from 'react'
import {MoonIcon} from "@heroicons/react/solid"
import ThemeContext from '../context/ThemeContext';
const ThemeIcon = () => {
   const {darkMode,setDarkMode}=useContext(ThemeContext);
   const toggleDarkMode=()=>{
    setDarkMode(!darkMode);
   }
  return (
    <button className={`rounded-lg border-1 border-neutral-400 p-2 absolute top-0 right-1 xl:right-32 shadow-lg ${darkMode? "shadow-gray-600" :null}`} 
      onClick={toggleDarkMode}
    >
        <MoonIcon className={`h-8 w-8 cursor-pointer stroke-1 fill-none ${darkMode? "fill-yellow-400 stroke-yellow-400":"fill-none stroke-neutral-400 "}`} />
    </button>
  )
}

export default ThemeIcon
