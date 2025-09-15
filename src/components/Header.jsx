import React from 'react'
import logo from '../assets/logo.png'
import { Bell, User, Settings,ArrowDownNarrowWide } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className="flex h-20 items-center justify-center border-b border-gray-200 bg-white shadow-sm">
            <div className="flex w-11/12 max-w-6xl items-center justify-between">
                {/* Left section */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                    <div className="leading-tight">
                        <h2 className="text-lg font-semibold text-gray-900">SecureWallet</h2>
                        <p className="text-sm text-gray-500">Welcome back, text@gmail.com</p>
                    </div>
                </div>

                {/* Right section (future use like profile / logout button) */}
                <div className='flex'>
                    <button
                        className="px-2 sm:px-4 py-2 text-[#525252] rounded-md text-sm font-medium hover:bg-gray-300 transition cursor-pointer">
                        <Bell size={22} />
                    </button>
                    {/* <button 
                        className="px-4 py-2 text-[#525252] rounded-md text-sm font-medium hover:bg-gray-300 transition cursor-pointer">
                        <Settings size={22} />
                    </button> */}
                    <Link to="/profile">
                        <button 
                            className="px-4 py-2 text-[#525252] rounded-md text-sm font-medium hover:bg-gray-300 transition cursor-pointer">
                            <User size={22} />
                        </button>
                    </Link>
                    <button 
                        className="px-4 py-2 text-[#525252] rounded-md text-sm font-medium hover:bg-gray-300 transition cursor-pointer">
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