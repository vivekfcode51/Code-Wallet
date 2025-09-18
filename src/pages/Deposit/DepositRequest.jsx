import React from "react";
import { useState } from "react";
import { ArrowDownLeft, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TRCImage from "../../assets/walletImage/usdtaddress.png";
import BEPImage from "../../assets/walletImage/USDT-BEP20.png";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../reusable_component/Loader";
import apis from "../../utils/apis";

const DepositRequest = () => {
  const [activeModal, setActiveModal] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState("10"); // New state for selected amount
  // const [usdtAmount, setUsdtAmount] = useState(10);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleModal = (modalType) => {
    setActiveModal(modalType);
  };

  // Function to handle amount selection
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    // setUsdtAmount(amount);
  };

  // Function to handle manual input change
  const handleInputChange = (e) => {
    setSelectedAmount(e.target.value);
    // setUsdtAmount(e.target.value);
  };

  // Validation function (you can implement as needed)
  const validateAmount = (amount) => {
    // Add your validation logic here
    console.log("Validating amount:", amount);
  };

  const payMethod = [
    {
      image: TRCImage,
      name: "TRC20",
      type: 0,
    },

    {
      image: BEPImage,
      name: "BEP20",
      type: 1,
    },
  ];


  return (
    <div className="bg-white dark:bg-richblack-900 max-w-md mx-auto rounded-2xl shadow-lg p-6">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)} // 👈 back le jayega
        className=" p-1 rounded-full hover:bg-gray-100 dark:hover:bg-richblack-700 dark:bg-richblack-800 flex justify-start"
      >
        <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-richblack-400" />
      </button>

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-green-200 dark:bg-caribbeangreen-400 p-4 rounded-full">
          <ArrowDownLeft className="w-6 h-6 text-green-600 dark:text-caribbeangreen-700" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-center dark:text-richblack-5">
        Request Deposit
      </h2>
      <p className="text-gray-500 dark:text-richblack-400 text-center mt-1 mb-6 font-medium text-[14px]">
        Submit a deposit request{" "}
        <span className="dark:text-[#47A5C5] italic">
          to transfer funds from your wallet
        </span>
      </p>

      {/* Switch Tab - Improved alignment */}
      {/* switch tab */}
      <div className="w-full grid grid-cols-3 gap-3 mt-2">
        {payMethod &&
          payMethod?.map((item, i) => (
            <div
              onClick={() => toggleModal(item?.type)}
              key={i}
              className={`col-span-1 mb-2 p-1 rounded-md flex flex-col items-center text-xsm justify-evenly ${
                item?.type == activeModal
                  ? "bg-gradient-to-l from-[#6B7280] to-[#9CA3AF] dark:bg-gradient-to-b dark:from-[#7AFEC3] dark:to-[#02AFB6] text-white"
                  : "bg-gray-100 dark:bg-richblack-800 dark:text-richblack-400 text-gray dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]"
              } shadow-md text-bg6`}
            >
              <img
                className={`w-${item?.type === 1 ? 18 : 30} h-10`}
                src={item.image}
                alt="UPI Payment"
              />
              <div className="font-serif">
                <p
                  className={`${
                    item?.type == activeModal
                      ? "text-nowrap text-[12px] text-white font-semibold"
                      : "text-gray-500 text-[12px]"
                  }`}
                >
                  {item?.name}
                </p>
                {/* <p className={`${item?.type == activeModal ? "text-nowrap text-white font-semibold" : "text-bg6" }`}>Payment</p> */}
              </div>
            </div>
          ))}
      </div>

      {/* Amount Selection Section - TIT20 tabs */}
      {activeModal == 0 && (
        <div className="bg-gray-50 dark:bg-richblack-900 rounded-lg p-4 shadow-sm">
          {/* Amount Input */}
          <div className="mb-4">
            <div className="flex items-center bg-gray-200 dark:bg-richblack-800 w-full rounded-lg  dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] p-2">
              <div className="flex items-center justify-center text-lg font-bold text-gray-600 dark:text-richblack-200 mr-3">
                $
              </div>
              <div className="w-[1px] bg-gray-300 dark:bg-richblack-400 h-5 mr-3"></div>
              <input
                value={selectedAmount|| ""}
                onChange={(e) => {
                  const numericAmount = Number(e.target.value);
                  // setUsdtAmount(e.target.value);
                  setSelectedAmount(e.target.value);
                  validateAmount(numericAmount);
                }}
                type="number"
                placeholder="Please enter the amount"
                className="w-full bg-gray-200 dark:bg-richblack-800 border-none focus:outline-none dark:text-richblack-100 text-gray-700 placeholder:text-gray-400 text-sm font-semibold
                          [&::-webkit-outer-spin-button]:appearance-none
                          [&::-webkit-inner-spin-button]:appearance-none
                          [&::-moz-number-spin-box]:appearance-none"
              />
            </div>
          </div>

          {/* Quick Amount Selection Buttons */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2 font-semibold">
              Quick Select Amount:
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[10, 50, 100, 500, 1000, 2000, 5000, 10000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    // setUsdtAmount(amount.toString());
                    setSelectedAmount(amount.toString());
                    validateAmount(amount);
                  }}
                  className={`py-2 px-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    selectedAmount== amount
                      ? "bg-gray-500 text-white border-2 border-gray-200 dark:bg-[#00B3BB] dark:border-[#00B3BB]"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-richblack-800 dark:border-richblack-800 dark:text-richblack-200 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] dark:hover:bg-richblack-700"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between space-x-3">
            <button
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors
                    dark:bg-richblack-800 dark:text-richblack-400 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] dark:hover:bg-richblack-700"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                console.log("Navigating with:", selectedAmount, activeModal);
                navigate("/qr-usdt-payment", { state: { amount: selectedAmount, method: activeModal } });
              }}
              disabled={loading}
              className={`flex-1 py-3 rounded-lg font-medium transition-colors cursor-pointer 
                ${loading 
                  ? "bg-gray-400 text-white cursor-not-allowed" 
                  : "bg-gray-700 text-white hover:bg-gray-800 dark:bg-caribbeangreen-400 dark:text-richblack-900 dark:hover:bg-caribbeangreen-500"}`}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>

          </div>
        </div>
      )}

      {/* Amount Selection Section -  BEP20 tab*/}
      {activeModal == 1 && (
        <div className="bg-gray-50 dark:bg-richblack-900 rounded-lg p-4 shadow-sm">
          {/* Amount Input */}
          <div className="mb-4">
            <div className="flex items-center bg-gray-200 dark:bg-richblack-800 w-full rounded-lg  dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] p-2">
              <div className="flex items-center justify-center text-lg font-bold text-gray-600 mr-3 dark:text-richblack-200">
                $
              </div>
              <div className="w-[1px] bg-gray-300 dark:bg-richblack-400 h-5 mr-3"></div>
              <input
                value={selectedAmount|| ""}
                onChange={(e) => {
                  const numericAmount = Number(e.target.value);
                  // setUsdtAmount(e.target.value);
                  setSelectedAmount(e.target.value);
                  validateAmount(numericAmount);
                }}
                type="number"
                placeholder="Please enter the amount"
                className="w-full bg-gray-200 dark:bg-richblack-800 border-none focus:outline-none text-gray-700 dark:text-richblack-100 placeholder:text-gray-400 text-sm font-semibold
                          [&::-webkit-outer-spin-button]:appearance-none
                          [&::-webkit-inner-spin-button]:appearance-none
                          [&::-moz-number-spin-box]:appearance-none"
              />
            </div>
          </div>

          {/* Quick Amount Selection Buttons */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2 font-semibold">
              Quick Select Amount:
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[10, 50, 100, 500, 1000, 2000, 5000, 10000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    // setUsdtAmount(amount.toString());
                    setSelectedAmount(amount.toString());
                    validateAmount(amount);
                  }}
                  className={`py-2 px-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    selectedAmount== amount
                      ? "bg-gray-500 text-white border-2 border-gray-200 dark:bg-[#00B3BB] dark:border-[#00B3BB]"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-richblack-800 dark:border-richblack-800 dark:text-richblack-200 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] dark:hover:bg-richblack-700"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between space-x-3">
            <button
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors
                    dark:bg-richblack-800 dark:text-richblack-400 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] dark:hover:bg-richblack-700"
            >
              Cancel
            </button>
            <button
            onClick={() => {
                console.log("Navigating with:", selectedAmount, activeModal);
                navigate("/qr-usdt-payment", { state: { amount: selectedAmount, method: activeModal } });
              }}
              className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors dark:bg-caribbeangreen-400
                   dark:text-richblack-900 dark:hover:bg-caribbeangreen-500"
            >
              Submit Request
            </button>
          </div>
        </div>
      )}

      {/* loader */}
      {loading && (
        <div className="absolute inset-0 bg-richblack-900/70 bg-opacity-70 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}

    </div>
  );
};

export default DepositRequest;
