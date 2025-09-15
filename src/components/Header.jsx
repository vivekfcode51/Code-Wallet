import React, { useContext } from "react";
import logo from '../assets/logo.png'
import { Bell, User, Moon, Sun, ArrowDownNarrowWide } from "lucide-react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
        <div className="flex h-20 items-center justify-center border-b border-gray-200 bg-white shadow-sm dark:bg-richblack-900
           dark:text-richblack-25">
            <div className="flex w-11/12 max-w-6xl items-center justify-between">
                {/* Left section */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                    <div className="leading-tight">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-richblack-25">SecureWallet</h2>
                        <p className="text-sm text-gray-500 dark:text-richblack-25">Welcome back, text@gmail.com</p>
                    </div>
                </div>

                {/* Right section (future use like profile / logout button) */}
                <div className='flex'>
                    <button
                        className="px-2 sm:px-4 py-2 text-[#525252] dark:text-richblack-25 rounded-md text-sm font-medium hover:bg-gray-300 dark:hover:text-richblack-900 transition cursor-pointer">
                        <Bell size={22} />
                    </button>
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        {theme === "light" ? (
                        <Moon size={22} className="text-gray-700" />
                        ) : (
                        <Sun size={22} className="text-yellow-400" />
                        )}
                    </button>
                    <Link to="/profile">
                        <button 
                            className="px-4 py-2 text-[#525252] dark:text-richblack-25 rounded-md text-sm font-medium hover:bg-gray-300 dark:hover:text-richblack-900 transition cursor-pointer">
                            <User size={22} />
                        </button>
                    </Link>
                    <button 
                        className="px-4 py-2 text-[#525252] dark:text-richblack-25 rounded-md text-sm font-medium hover:bg-gray-300 dark:hover:text-richblack-900 transition cursor-pointer">
                       <Link to="/">
                        <ArrowDownNarrowWide size={22} />
                       </Link>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header