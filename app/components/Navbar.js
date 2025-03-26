"use client"
import React, { useState, useTransition } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../providers/ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='p-2 bg-gray-800 flex justify-between items-center'>
      <div className='font-extrabold text-2xl text-purple-700'>
        CVI Hub
      </div>
      <div className='flex items-center gap-4'>
        <ul className='flex gap-5 text-white'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-400 transition-all duration-300 bg-gray-200 dark:bg-gray-800 dark:hover:bg-slate-200"
          >
            <div className="hover:transition-transform hover:duration-500 hover:ease-in-out hover:transform hover:scale-100 hover:rotate-0 hover:dark:rotate-180 hover:dark:scale-125">
              {theme === "dark" ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-800" />}
            </div>
          </button>
      </div>
    </div>
  )
}

export default Navbar
