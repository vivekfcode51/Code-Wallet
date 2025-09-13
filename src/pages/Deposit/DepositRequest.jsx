import React from 'react'
import { ArrowDownLeft } from "lucide-react";

const DepositRequest = () => {
  return (
    <div className="bg-white max-w-md mx-auto rounded-2xl shadow-lg p-8">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-green-200 p-4 rounded-full">
          <ArrowDownLeft  className="w-6 h-6 text-green-600" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-center">Request Deposit</h2>
      <p className="text-gray-500 text-center mt-1 mb-6">
        Submit a deposit request to transfer funds to your wallet
      </p>

      {/* Form */}
      <div className="space-y-4">
        {/* Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">Amount (USD)</label>
          <input
            type="number"
            required
            placeholder="Enter amount"
            className="w-full bg-gray-100 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Deposit Method */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Deposit Method
          </label>
          <select className="w-full bg-gray-100 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-300">
            <option className='text-gray-300'>Select withdrawal method</option>
            <option>Bank Transfer</option>
            <option>Mobile Payment</option>
            <option>Credit Card</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Description (Optional)
          </label>
          <textarea
            placeholder="Add a note about this deposit..."
            rows={3}
            className="w-full bg-gray-100 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-300"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between space-x-4 pt-2">
          <button className="w-1/2 bg-gray-200 text-gray-800 py-3 rounded-[12px] font-medium hover:bg-gray-300 transition">
            Cancel
          </button>
          <button className="w-1/2 bg-gray-600 text-white py-3 rounded-[12px] font-medium hover:bg-gray-700 transition">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  )
}

export default DepositRequest