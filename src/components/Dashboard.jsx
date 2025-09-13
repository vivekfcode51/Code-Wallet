import React from 'react'
import { useState } from 'react';
import { Eye, EyeOff, Wallet, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const [showBalance, setShowBalance] = useState(true);
    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      {/* Top summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Transactions */}
        <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-medium text-gray-900">
            Total Transactions
          </h3>
          <p className="text-3xl font-semibold mt-3">4</p>
          <p className="text-sm text-gray-500 mt-1">2 approved</p>
        </div>

        {/* Pending Requests */}
        <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-medium text-gray-900">
            Pending Requests
          </h3>
          <p className="text-3xl font-semibold mt-3">1</p>
          <p className="text-sm text-gray-500 mt-1">Awaiting approval</p>
        </div>

        {/* This Month */}
        <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-medium text-gray-900">This Month</h3>
          <p className="text-3xl font-semibold text-green-600 mt-3">
            +$2,300
          </p>
          <p className="text-sm text-gray-500 mt-1">Net deposits</p>
        </div>
      </div>

      {/* Wallet Balance Card */}
      <div className="bg-gradient-to-r from-[#0f0f1a] to-[#151522] text-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Wallet className="w-5 h-5" />
            <h3 className="text-lg font-medium">Wallet Balance</h3>
          </div>
          {showBalance ? (<EyeOff
              className="w-5 h-5 text-gray-300 cursor-pointer"
              onClick={() => setShowBalance(false)}
            />) : (<Eye
              className="w-5 h-5 text-gray-300 cursor-pointer"
              onClick={() => setShowBalance(true)}
            />)}
        </div>

        {/* Balance */}
        <div>
          <p className="text-sm text-gray-300">Available Balance</p>
          <p className="text-4xl font-bold mt-1">
            {showBalance ? "•••••••" : "$2,547.83"}
          </p>
          <div className="flex items-center space-x-2 mt-2 text-sm text-gray-300">
            <TrendingUp className="w-4 h-4" />
            <span>+2.5% from last month</span>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <button 
          onClick={() => navigate("/deposit-request")}
            className="bg-white text-black rounded-lg py-3 font-medium hover:bg-gray-100 transition cursor-pointer">
            Deposit
          </button>
          <button 
            onClick={() => navigate("/withdrawal-request")}
            className="bg-white text-black rounded-lg py-3 font-medium hover:bg-gray-100 transition cursor-pointer">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
