import React from 'react'
import {Eye, EyeOff, Shield} from 'lucide-react';
import { useState } from 'react';

// Security Component
const Security = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const handlePasswordChange = (field, value) => {
    setPasswords(prev => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChangePassword = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    if (passwords.newPassword.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
    alert('Password changed successfully!');
    setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div className="bg-white dark:bg-richblack-900 rounded-lg p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center mb-4">
        <Shield className="w-5 h-5 mr-3 text-gray-600 dark:text-caribbeangreen-300" />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-richblack-5">Change Password</h2>
      </div>
      
      <p className="text-gray-500 mb-8 text-[16px] dark:text-richblack-400">
        Update your password <i className='dark:text-[#47A5C5]'>to keep your account secure.</i>
      </p>
      
      {/* Password Fields */}
      <div className="space-y-6 mb-8">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-3 dark:text-richblack-25">Current Password</label>
          <div className="relative">
            <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type={showPasswords.current ? 'password' : 'passwordtext'}
              value={passwords.currentPassword}
              onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
              className="w-full pl-10 pr-12 py-3 bg-gray-100 border-0 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]
                  dark:text-richblack-25 dark:focus:ring-2 dark:focus:ring-richblack-800 focus:ring-2 focus:ring-gray-200 transition-all"
              placeholder="Enter current password"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('current')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-richblack-400 dark:hover:text-richblack-500 cursor-pointer transition-colors"
            >
              {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-3 dark:text-richblack-25">New Password</label>
          <div className="relative">
            <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type={showPasswords.new ? 'password' : 'passwordtext'}
              value={passwords.newPassword}
              onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
              className="w-full pl-10 pr-12 py-3 bg-gray-100 border-0 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]
                  dark:text-richblack-25 dark:focus:ring-2 dark:focus:ring-richblack-800 focus:ring-2 focus:ring-gray-200 transition-all"
              placeholder="Enter new password"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('new')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-richblack-400 dark:hover:text-richblack-500 cursor-pointer transition-colors"
            >
              {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Confirm New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-3 dark:text-richblack-25">Confirm New Password</label>
          <div className="relative">
            <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type={showPasswords.confirm ? 'password' : 'passwordtext'}
              value={passwords.confirmPassword}
              onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
              className="w-full pl-10 pr-12 py-3 bg-gray-100 border-0 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]
                  dark:text-richblack-25 dark:focus:ring-2 dark:focus:ring-richblack-800 focus:ring-2 focus:ring-gray-200 transition-all"
              placeholder="Confirm new password"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('confirm')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-richblack-400 dark:hover:text-richblack-500 cursor-pointer hover:text-gray-600 transition-colors"
            >
              {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Password Requirements */}
      <div className="bg-gray-50 dark:bg-richblack-800 rounded-lg p-4 mb-8">
        <div className="flex items-center mb-3">
          <Shield className="w-4 h-4 mr-2 text-gray-500 dark:text-caribbeangreen-400" />
          <h3 className="text-sm font-medium text-gray-700 dark:text-richblack-25">Password Requirements:</h3>
        </div>
        <ul className="space-y-1 text-[16px] text-gray-600 dark:text-richblack-400 font-[400] ml-6">
          <li>• At least 8 characters long</li>
          <li>• Include uppercase and lowercase letters</li>
          <li>• Include at least one number</li>
          <li>• Include at least one special character</li>
        </ul>
      </div>

      <div>
        <button
        //   onClick={handleSave}
          className="flex w-full items-center justify-center px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-800 dark:bg-caribbeangreen-400 dark:hover:bg-caribbeangreen-500 dark:text-richblack-900 transition-colors font-medium"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Security