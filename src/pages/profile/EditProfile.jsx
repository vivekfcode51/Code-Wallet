import React from 'react'
import { Camera, User, Mail, Phone, Hash} from 'lucide-react';
import { useState } from 'react';

// Edit Profile Component
const EditProfile = ({ userData, onUpdate }) => {
  const [formData, setFormData] = useState({
    fullName: userData.fullName,
    phone: userData.phone,
    email: userData.email
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onUpdate(formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center mb-4">
        <User className="w-5 h-5 mr-3 text-gray-600" />
        <h2 className="text-xl font-semibold text-gray-800">Edit Personal Information</h2>
      </div>
      
      <p className="text-gray-500 mb-8 text-sm">
        Update your personal details. Changes will be reviewed before being applied.
      </p>
      
      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-3">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              placeholder="John Doe"
            />
          </div>
        </div>
        
        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-3">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              placeholder="john.doe@example.com"
            />
          </div>
        </div>
        
        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-3">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>
        
        {/* Account ID */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-3">Account ID</label>
          <div className="relative">
            <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={userData.accountId}
              disabled
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-500 cursor-not-allowed"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Account ID cannot be changed</p>
        </div>
      </div>
      
      {/* Important Notes */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">Important Notes:</h3>
        <ul className="space-y-1 text-sm text-gray-500">
          <li>• Email changes require verification via your current email</li>
          <li>• Phone number updates may require SMS verification</li>
          <li>• Changes to verified accounts may require additional review</li>
        </ul>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex w-[50%] items-center justify-center px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium">
          <span className="mr-2">✕</span>
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="flex w-[50%] items-center justify-center px-6 py-3 bg-gray-400 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium whitespace-nowrap"
        >
          <span className="mr-2">💾</span>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile