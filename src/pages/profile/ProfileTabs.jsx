import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Overview from "./Overview";
import EditProfile from "./EditProfile";
import Security from "./Security";
import Verification from "./Verification";
import apis from "../../utils/apis";
import { Shield, Check, Camera } from "lucide-react";
import avatarImage from "../../assets/man-face.jpg";
import { ArrowDownNarrowWide } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileTabs() {
  const user_id = localStorage.getItem("user_id");
  const [activeTab, setActiveTab] = useState("overview");
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    accountId: "",
    memberSince: "",
    profile_image: "",
    verified: true,
    twoFAEnabled: false,
  });

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "edit-profile", label: "Edit Profile" },
    { id: "security", label: "Security" },
    // { id: 'verification', label: 'Verification' }
  ];

  const updateUserData = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview userData={userData} setActiveTab={setActiveTab} />;
      case "edit-profile":
        return <EditProfile userData={userData} onUpdate={updateUserData} />;
      case "security":
        return <Security />;
      // case 'verification':
      // return <Verification userData={userData} />;
      default:
        return <Overview userData={userData} />;
    }
  };

  const fetchProfile = async () => {
    try {
      // setLoading(true);
      const response = await axios.get(
        `${apis?.get_profile}?user_id=${user_id}`
      );
      // console.log("Profile Api Response", response);

      if (response.data?.status && response.data.profile) {
        const profile = response.data.profile;

        setUserData({
          fullName: profile.name || "",
          email: profile.email || "",
          phone: profile.phone || "+1 (555) 123-4567", // agar API me phone ho to
          accountId: profile.u_id || "",
          profile_image: profile.profile_image || "",
          memberSince: profile.created_at
            ? new Date(profile.created_at).toLocaleDateString()
            : "",
          verified: profile.status === 1, // status se verified check
          twoFAEnabled: false, // API me nahi hai, default false
        });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // console.log("profile_image",userData.profile_image)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-richblack-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white dark:bg-richblack-900 rounded-lg p-6 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
            {/* Left Side Profile + Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative">
                <img
                  src={
                    userData.profile_image
                      ? userData.profile_image
                      : avatarImage
                  }
                  alt="profile_image"
                  className="w-16 h-16 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 cursor-pointer bg-green-500 rounded-full border-2 border-white dark:border-richblack-100 flex items-center justify-center">
                  <Camera className="w-3 h-3 text-white dark:text-richblack-5" />
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-richblack-25">
                  {userData.fullName}
                </h1>
                <p className="text-gray-600 dark:text-richblack-400">
                  {userData.email}
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Check className="w-3 h-3 mr-1" />
                    Verified
                  </span>
                  {userData.twoFAEnabled && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <Shield className="w-3 h-3 mr-1" />
                      2FA Enabled
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side Button */}
            <button className="mt-4 sm:mt-0 px-4 py-2 text-richblack-900 bg-yellow-50 dark:text-richblack-900 dark:bg-yellow-50 dark:hover:bg-yellow-100 rounded-md text-sm font-medium hover:bg-yellow-100 dark:hover:text-richblack-900 transition cursor-pointer">
              <Link to="/">
                {/* <ArrowDownNarrowWide size={22} /> */}
                <button className="cursor-pointer font-medium">Logout</button>
              </Link>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-200 dark:bg-richblack-700 rounded-full mb-6 overflow-hidden p-1 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]">
          <nav className="flex flex-wrap gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-0 py-3 px-4 text-center font-medium text-sm transition-all duration-300 rounded-full cursor-pointer ${
                  activeTab === tab.id
                    ? "text-gray-800 bg-white dark:bg-richblack-900 dark:text-richblack-5 shadow-sm"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200 dark:text-richblack-400 dark:hover:bg-richblack-900 dark:hover:text-richblack-5"
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
