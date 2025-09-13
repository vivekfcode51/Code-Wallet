import React from 'react'
import { ArrowUpRight } from "lucide-react";

const WithdrawalRequest = () => {
  return (
    <div className="bg-white max-w-md mx-auto rounded-2xl shadow-lg p-8">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <ArrowUpRight className="w-6 h-6 text-blue-600" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-center">Request Withdrawal</h2>
      <p className="text-gray-500 text-center mt-1 mb-6">
        Submit a withdrawal request to transfer funds from your wallet
      </p>

      {/* Form */}
      <div className="space-y-4">
        {/* Available Balance */}
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-500">Available Balance</p>
          <p className="text-xl font-semibold">$2,547.83</p>
        </div>

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

        {/* Withdrawal Method */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Withdrawal Method
          </label>
          <select className="w-full bg-gray-100 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-300">
            <option>Select withdrawal method</option>
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
            placeholder="Add a note about this withdrawal..."
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
  );
}

export default WithdrawalRequest