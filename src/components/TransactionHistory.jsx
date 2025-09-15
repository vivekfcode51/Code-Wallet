import React from "react";
import { ArrowDownLeft, ArrowUpRight, Clock, CircleCheckBig, X } from "lucide-react";

export default function TransactionHistory() {
  const transactions = [
    {
      id: 1,
      type: "Bank Transfer Deposit",
      date: "Dec 8, 2024, 04:00 PM",
      amount: "+$1,500.00",
      status: "Approved",
      statusColor: "bg-gray-900 dark:bg-richblack-600 text-white",
      icon: <ArrowDownLeft className="w-5 h-5 text-green-600 dark:text-green-400" />,
      amountColor: "text-green-600 dark:text-green-400",
      highlight: true,
    },
    {
      id: 2,
      type: "Mobile Payment Withdrawal",
      date: "Dec 7, 2024, 07:45 PM",
      amount: "-$250.00",
      status: "Approved",
      statusColor: "bg-gray-900 dark:bg-richblack-600 text-white",
      icon: <ArrowUpRight className="w-5 h-5 text-blue-600 dark:text-blue-500" />,
      amountColor: "text-blue-600 dark:text-blue-500",
    },
    {
      id: 3,
      type: "Credit Card Deposit",
      date: "Dec 6, 2024, 03:15 PM",
      amount: "+$800.00",
      status: "Pending",
      statusColor: "bg-gray-200 text-gray-700",
      icon: <ArrowDownLeft className="w-5 h-5 text-green-600 dark:text-green-400" />,
      amountColor: "text-green-600 dark:text-green-400",
    },
    {
      id: 4,
      type: "Insufficient verification",
      date: "Dec 5, 2024, 09:50 PM",
      amount: "-$100.00",
      status: "Rejected",
      statusColor: "bg-red-600 text-white",
      icon: <ArrowUpRight className="w-5 h-5 text-blue-600 dark:text-blue-500" />,
      amountColor: "text-blue-600 dark:text-blue-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-richblack-900 rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4 dark:text-richblack-25">Transaction History</h2>

      <div className="space-y-3">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className={`flex items-center justify-between rounded-xl border border-gray-200 dark:border-richblack-400 p-4 ${
              tx.highlight ? "bg-gray-50 dark:bg-richblack-800" : "bg-white dark:bg-richblack-800"
            }`}
          >
            {/* Left Side */}
            <div className="flex items-start space-x-3">
              <div>{tx.icon}</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-richblack-25">{tx.type}</p>
                <p className="text-sm text-gray-500 dark:text-richblack-400">{tx.date}</p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center space-x-3">
              <span className={`font-semibold mb-1 ${tx.amountColor}`}>
                {tx.amount}
              </span>
              <span
                className={`px-3 py-1 text-[12px] font-medium rounded-xl flex items-center space-x-1 ${tx.statusColor}
                shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer mr-1`}
              >
                {tx.status === "Pending" && <Clock className="w-3 h-3 " />}
                {tx.status === "Approved" && <CircleCheckBig className="w-3 h-3" />}
                {tx.status === "Rejected" && <X className="w-3 h-3" />}
                <span>{tx.status}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
