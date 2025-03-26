"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false); // Ensures no SSR mismatch

  useEffect(() => {
    setMounted(true); // Component is now mounted
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="p-2 bg-white dark:bg-gray-900 flex justify-between items-center">
      <div className="font-extrabold text-2xl text-purple-700">CVI Hub</div>
      <div className="flex items-center gap-5">
        
        {/* Prevent rendering until mounted to avoid hydration mismatch */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-700 dark:bg-gray-600 rounded-lg"
          >
            {theme === "dark" ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-300" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
