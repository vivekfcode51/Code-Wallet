import React from 'react'
import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignIn) {
      // ✅ Sign In hone ke baad wallet page par redirect
      navigate("/wallet");
    } else {
      // ✅ Sign Up hone ke baad login page par redirect
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-[35%] bg-white shadow-lg rounded-2xl p-8">
        {/* Logo & Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">SecureWallet</h1>
          <p className="text-gray-500">Professional financial management</p>
        </div>

        {/* Toggle */}
        <div className="flex mb-6 bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setIsSignIn(true)}
            className={`flex-1 py-2 rounded-full cursor-pointer text-sm font-medium transition ${
              isSignIn ? "bg-white shadow text-black" : "text-gray-500"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`flex-1 py-2 rounded-full cursor-pointer text-sm font-medium transition ${
              !isSignIn ? "bg-white shadow text-black" : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <div className="flex items-center mt-1 bg-gray-100 rounded-lg px-3">
                <User className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-transparent outline-none px-2 py-2 text-sm "
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium">Email</label>
            <div className="flex items-center mt-1 bg-gray-100 rounded-lg px-3">
              <Mail className="h-4 w-4 text-gray-400" />
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none px-2 py-2 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <div className="flex items-center mt-1 bg-gray-100 rounded-lg px-3">
              <Lock className="h-4 w-4 text-gray-400" />
              <input
                type="password"
                required
                placeholder="Create a password"
                className="w-full bg-transparent outline-none px-2 py-2 text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium mt-4 cursor-pointer"
          >
            {isSignIn ? "Sign In" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
