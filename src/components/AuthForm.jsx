import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import apis from "../utils/apis";
import Spinner from "./Spinner";

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

  // OTP modal states
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");

  // input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.type === "text" ? "name" : e.target.type]: e.target.value,
    });
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

      const registerPayload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      if (isSignIn) {
        // 🔹 Login API call
        const res = await axios.post(apis.login, loginPayload);
        console.log("Login API Response", res);

        if (res.data.message?.includes("OTP")) {
          toast.success("OTP sent to your email 📧");
          setShowOtpModal(true); // ✅ open modal
        } else {
          toast.error(res.data.message || "Login failed ❌");
        }
      } else {
        // 🔹 Register API call
        const res = await axios.post(apis.register, registerPayload);
        console.log("Register API call Response", res);

        if (res.data.success) {
          toast.success(res.data.message || "Registered successfully 🎉");
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

  // 🔹 OTP Verify handler
 // 🔹 OTP Verify handler
const handleVerifyOtp = async () => {
  if (!otp) {
    toast.error("Enter OTP first ❌");
    return;
  }
  setLoading(true);
  try {
    const verifyPayload = {
      email: formData.email,
      otp: otp,
    };

    const res = await axios.post("https://sudhirtest.mobileappdemo.net/api/verify-otp", verifyPayload);
    console.log("Verify OTP Response", res.data);

    if (res.data.success) {
      // ✅ user.id & token ko store karo
      localStorage.setItem("user_id", res.data.user?.id);
      localStorage.setItem("user_email", res.data.user?.email);
      localStorage.setItem("user_name", res.data.user?.name);
      localStorage.setItem("auth_token", res.data.token);

      toast.success(res.data.message || "Login successful 🎉");
      setShowOtpModal(false);
      navigate("/wallet");
    } else {
      toast.error(res.data.message || "Invalid OTP ❌");
    }
  } catch (err) {
    toast.error("Something went wrong ❌");
    console.error(err);
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      {/* Auth Form */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-richblack-800 px-4">
        <div className="w-full max-w-md bg-white dark:bg-richblack-900 shadow-lg rounded-2xl p-8">
          {/* Logo & Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold dark:text-richblack-25">
              CloudWallet
            </h1>
            <i className="text-gray-500 dark:text-richblack-300">
              Professional{" "}
              <span className="text-[#47A5C5]">financial management</span>
            </i>
          </div>

          {/* Toggle */}
          <div className="flex mb-6 bg-gray-100 dark:bg-richblack-800 rounded-full p-1">
            <button
              onClick={() => setIsSignIn(true)}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
                isSignIn
                  ? "bg-white dark:bg-richblack-900 shadow text-black dark:text-richblack-50"
                  : "text-gray-500 dark:text-richblack-400"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignIn(false)}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
                !isSignIn
                  ? "bg-white dark:bg-richblack-900 shadow text-black dark:text-richblack-50"
                  : "text-gray-500 dark:text-richblack-400"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isSignIn && (
              <div>
                <label className="block text-sm font-medium dark:text-richblack-5">
                  Full Name <sub className="text-pink-200">*</sub>
                </label>
                <div className="flex items-center mt-1 bg-gray-100 dark:bg-richblack-800 rounded-lg px-3">
                  <User className="h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none px-2 py-2 text-sm dark:text-richblack-5"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium dark:text-richblack-5">
                Email <sup className="text-pink-200">*</sup>
              </label>
              <div className="flex items-center mt-1 bg-gray-100 dark:bg-richblack-800 rounded-lg px-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none px-2 py-2 text-sm dark:text-richblack-5"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-richblack-5">
                Password <sup className="text-pink-200">*</sup>
              </label>
              <div className="relative flex items-center mt-1 bg-gray-100 dark:bg-richblack-800 rounded-lg px-3">
                <Lock className="h-4 w-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  name="password"
                  placeholder={isSignIn ? "Enter password" : "Create a password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none px-2 py-2 text-sm dark:text-richblack-5"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-gray-500"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gray-900 dark:bg-yellow-50 text-white dark:text-richblack-900 rounded-lg font-medium mt-4"
            >
              {loading ? <Spinner /> : isSignIn ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-richblack-900 p-6 rounded-xl shadow-lg w-80 xl:w-96">
            <h2 className="text-lg font-semibold mb-4 dark:text-caribbeangreen-300">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mb-4 bg-gray-200 border-gray-200 outline-none dark:border-richblack-800 dark:bg-richblack-800 dark:text-white"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowOtpModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 font-medium text-[14px] cursor-pointer"
              >
                Cancel
              </button>
              <div className="">
                <button
                onClick={handleVerifyOtp}
                disabled={loading}
                className="w-full min-w-[120px] px-4 py-2 rounded-lg bg-yellow-25 text-richblack-900 font-medium text-[14px] cursor-pointer"
              >
                {loading ? <Spinner />  : "Verify OTP"}
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
