import React, { useState } from 'react';
import { User, Mail, Phone, Hash, SquarePen } from 'lucide-react';
import { Link } from 'react-router-dom';

// Overview Component
const Overview = ({ userData, setActiveTab, }) => {
  return (
    <div className="bg-white dark:bg-richblack-900 rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-6">
        <User className="w-5 h-5 mr-2 font-bold text-gray-600 dark:text-richblack-100" />
        <h2 className="text-lg font-bold text-gray-800 dark:text-richblack-25">Personal Information</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 dark:bg-richblack-800 rounded-lg p-4 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]">
          <div className="flex items-center mb-2">
            <User className="w-4 h-4 text-gray-500 mr-2 dark:text-richblack-300" />
            <span className="text-sm text-gray-600 dark:text-richblack-5 font-medium">Full Name</span>
          </div>
          <p className="text-gray-900 dark:text-richblack-50 font-medium">{userData.fullName}</p>
        </div>
        
        <div className="bg-gray-100 dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Phone className="w-4 h-4 text-gray-500 mr-2 dark:text-richblack-300" />
            <span className="text-sm text-gray-600 dark:text-richblack-5 font-medium">Phone Number</span>
          </div>
          <p className="text-gray-900 dark:text-richblack-50 font-medium">{userData.phone}</p>
        </div>
        
        <div className="bg-gray-100 dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Mail className="w-4 h-4 text-gray-500 mr-2 dark:text-richblack-300" />
            <span className="text-sm text-gray-600 dark:text-richblack-5 font-medium">Email Address</span>
          </div>
          <p className="text-gray-900 dark:text-richblack-50 font-medium">{userData.email}</p>
        </div>
        
        <div className="bg-gray-100 dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] rounded-lg p-4">
          <div className="flex items-center mb-2 dark:text-richblack-300">
            <Hash className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600 dark:text-richblack-5 font-medium">Account ID</span>
          </div>
          <p className="text-gray-900 dark:text-richblack-50 font-medium">{userData.accountId}</p>
        </div>
      </div>
      
        <div className="bg-gray-100 dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] rounded-lg p-4 mt-6">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-600 dark:text-richblack-5">Member Since</span>
          </div>
          <p className="text-gray-900 dark:text-richblack-50 font-medium mt-1">{userData.memberSince}</p>
        </div>

        <div className="mt-6 flex justify-end">
          {/* <Link to="/edit-profile"> */}
            <button onClick={()=>setActiveTab("edit-profile")} className="flex items-center mb-2 rounded-2xl p-2 border border-gray-200 dark:border-yellow-50 dark:hover:bg-yellow-100 dark: bg-yellow-50 cursor-pointer">
                <SquarePen className="w-4 h-4 text-gray-500 mr-2 dark:text-richblack-900" />
                <span className="text-sm text-gray-800 dark:text-richblack-900 font-semibold">Edit Information</span>
            </button>
          {/* </Link> */}
        </div>

    </div>
  );
};

export default Overview