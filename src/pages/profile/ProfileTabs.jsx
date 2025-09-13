import { useState } from "react";
import React from 'react'
import Overview from "./Overview";
import EditProfile from "./EditProfile";
import Security from "./Security";
import Verification from "./Verification";
import {Shield, Check, Camera } from 'lucide-react';


export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('overview');
  const [userData, setUserData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    accountId: 'SW-789123456',
    memberSince: 'January 15, 2024',
    verified: true,
    twoFAEnabled: false
  });

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'edit-profile', label: 'Edit Profile' },
    { id: 'security', label: 'Security' },
    // { id: 'verification', label: 'Verification' }
  ];

  const updateUserData = (newData) => {
    setUserData(prev => ({ ...prev, ...newData }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview userData={userData} />;
      case 'edit-profile':
        return <EditProfile userData={userData} onUpdate={updateUserData} />;
      case 'security':
        return <Security />;
      // case 'verification':
        // return <Verification userData={userData} />;
      default:
        return <Overview userData={userData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-2xl font-semibold">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 cursor-pointer bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <Camera className="w-3 h-3 text-white" />
              </div>
            </div>
            
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900">{userData.fullName}</h1>
              <p className="text-gray-600">{userData.email}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <Check className="w-3 h-3 mr-1" />
                  Verified
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <Shield className="w-3 h-3 mr-1" />
                  {userData.twoFAEnabled ? '2FA Enabled' : '2FA Disabled'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-200 rounded-full shadow-sm mb-6 overflow-hidden p-1">
          <nav className="flex flex-wrap gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-0 py-3 px-4 text-center font-medium text-sm transition-all duration-300 rounded-full cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-gray-800 bg-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
}