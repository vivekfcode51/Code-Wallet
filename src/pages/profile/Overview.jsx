import React, { useState } from 'react';
import { User, Mail, Phone, Hash, SquarePen } from 'lucide-react';
import { Link } from 'react-router-dom';

// Overview Component
const Overview = ({ userData }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-6">
        <User className="w-5 h-5 mr-2 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-800">Personal Information</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <User className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">Full Name</span>
          </div>
          <p className="text-gray-900 font-medium">{userData.fullName}</p>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Phone className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">Phone Number</span>
          </div>
          <p className="text-gray-900 font-medium">{userData.phone}</p>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Mail className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">Email Address</span>
          </div>
          <p className="text-gray-900 font-medium">{userData.email}</p>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Hash className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">Account ID</span>
          </div>
          <p className="text-gray-900 font-medium">{userData.accountId}</p>
        </div>
      </div>
      
        <div className="bg-gray-100 rounded-lg p-4 mt-6">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-600">Member Since</span>
          </div>
          <p className="text-gray-900 font-medium mt-1">{userData.memberSince}</p>
        </div>

        <div className="mt-6 flex justify-end">
          <Link to="/edit-profile">
            <button className="flex items-center mb-2 rounded-2xl p-2 border border-gray-200 cursor-pointer">
                <SquarePen className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-800 font-semibold">Edit Information</span>
            </button>
          </Link>
        </div>

    </div>
  );
};

export default Overview

