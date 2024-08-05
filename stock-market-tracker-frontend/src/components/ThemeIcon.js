import React, { useContext } from 'react'
import {MoonIcon} from "@heroicons/react/solid"
import ThemeContext from '../context/ThemeContext';
import { useSelector } from 'react-redux';
const ThemeIcon = () => {
   const {darkMode,setDarkMode}=useContext(ThemeContext);
   const toggleDarkMode=()=>{
    setDarkMode(!darkMode);
   }
   const authState = useSelector((state) => state?.auth?.user);
   console.log(authState);
   const firstLetter = authState?.firstname.charAt(0).toUpperCase();
  return (
    <>
    <button className={`d-flex gap-3 rounded-lg border-2
    mt-3 p-2 absolute top-0 right-10  shadow-lg ${darkMode? "shadow-gray-600" :null}`} 
    onClick={toggleDarkMode}
    >
      <MoonIcon className={`h-6 w-6 cursor-pointer stroke-1 fill-none ${darkMode? "fill-yellow-400 stroke-yellow-400":"fill-none stroke-neutral-500 "}`} />
      <div className='border-1' style={{height:"25px"}}></div>
      <p className='text-xl' style={{marginTop:"-2px",marginRight:"3px"}}>{firstLetter}</p>
    </button>
    </>
  )
}

export default ThemeIcon
