import React from 'react'
import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';
import apis from '../utils/apis';
import Spinner from './Spinner';

export default function AuthForm() {
    const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type === "text" ? "name" : e.target.type]: e.target.value });
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const loginPayload = {
        email: formData.email,
        password: formData.password,
      };
      console.log("Login payload",loginPayload);

      const registerPayload = {
         name: formData.name,
         email: formData.email,
         password: formData.password,
      };
      console.log("Register payload",registerPayload)

      if (isSignIn) {
        // 🔹 Login API call
        const res = await axios.post(apis.login,loginPayload);
        console.log("Login API call Response", res)

        if (res.data.success) {
          localStorage.setItem("user_id", res.data.user_id); // ✅ Save user id
          toast.success(res.data.message || "Login successful 🎉");
          navigate("/wallet"); // redirect
        } else {
          toast.error(res.data.message || "Login failed ❌");
        }
      } else {
        // 🔹 Register API call
        const res = await axios.post(apis.register, registerPayload);
        console.log("Register API call Response", res)

        if (res.data.success) {
          toast.success(res.data.message || "Registered successfully 🎉");
          // ✅ Registration ke baad login page
          setIsSignIn(true);
          navigate("/");
        } else {
          toast.error(res.data.message || "Registration failed ❌");
        }
      }
    } catch (err) {
      toast.error("Something went wrong. Try again!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-richblack-800 px-4">
      <div className="w-full max-w-md bg-white dark:bg-richblack-900 shadow-lg rounded-2xl p-8">
        {/* Logo & Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold dark:text-richblack-25">SecureWallet</h1>
          <i className="text-gray-500 dark:text-richblack-300">Professional <span className='text-[#47A5C5]'>financial management</span></i>
        </div>

        {/* Toggle */}
        <div className="flex mb-6 bg-gray-100 dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] rounded-full p-1">
          <button
            onClick={() => setIsSignIn(true)}
            className={`flex-1 py-2 rounded-full cursor-pointer text-sm font-medium transition ${
              isSignIn ? "bg-white dark:bg-richblack-900 shadow text-black dark:text-richblack-50" : "text-gray-500 dark:text-richblack-400"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`flex-1 py-2 rounded-full cursor-pointer text-sm font-medium transition ${
              !isSignIn ? "bg-white dark:bg-richblack-900 shadow text-black dark:text-richblack-50" : "text-gray-500 dark:text-richblack-400"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium dark:font-[400] dark:text-richblack-5">Full Name <sub className='text-pink-200'>*</sub></label>
              <div className="flex items-center mt-1 bg-gray-100 dark:bg-richblack-800 rounded-lg px-3 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]">
                <User className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none px-2 py-2 text-sm dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]
                    dark:text-richblack-5 dark:p-[12px]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium dark:font-[400] dark:text-richblack-5">Email <sup className="text-pink-200">*</sup></label>
            <div className="flex items-center mt-1 bg-gray-100 dark:bg-richblack-800 rounded-lg px-3 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]">
              <Mail className="h-4 w-4 text-gray-400" />
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none px-2 py-2 text-sm dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]
                    dark:text-richblack-5 dark:p-[12px]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium dark:font-[400] dark:text-richblack-5">Password <sup className="text-pink-200">*</sup>  </label>
            <div className="relative flex items-center mt-1 bg-gray-100 dark:bg-richblack-800 rounded-lg px-3 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]">
              <Lock className="h-4 w-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                required
                name="password" 
                placeholder={isSignIn ? "Enter password" : "Create a password"}
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent outline-none px-2 py-2 text-sm dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]
                    dark:text-richblack-5 dark:p-[12px]"
              />
              { /* Eye Button */ }
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-gray-500 dark:text-richblack-400"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gray-900 dark:bg-yellow-50 dark:hover:bg-yellow-100 dark:text-richblack-900 hover:bg-gray-800 text-white rounded-lg font-medium mt-4 cursor-pointer"
          >
            {loading ? <Spinner/> : isSignIn ? "Sign In" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
