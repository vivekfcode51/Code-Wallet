import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import apis from "../../utils/apis";

const AddBankAccountDeteils = ({ setShowModal }) => {

    const userId = localStorage.getItem("user_id");
  const [formData, setFormData] = useState({
    account_holder_name: "",
    account_number: "",
    ifsc_code: "",
    bank_branch: "",
    IBAN_number: "",
  });

  // input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit handler
  const handleSubmit = async () => {
    if (
      !formData.account_holder_name ||
      !formData.account_number ||
      !formData.ifsc_code ||
      !formData.bank_branch
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    const bankdetailsPayload = {
          user_id: userId, // <- isko dynamically set karna hai (login user ka id)
          account_holder_name: formData.account_holder_name,
          account_number: formData.account_number,
          ifsc_code: formData.ifsc_code,
          bank_branch: formData.bank_branch,
          IBAN_number: formData.IBAN_number,
    }

    try {
      const res = await axios.post(`${apis?.add_bank_account}`, bankdetailsPayload);
      console.log("add bank account details", res);

      if (res.data.status) {
        toast.success(res.data.message || "Bank account saved successfully");
        setShowModal(false);
      } else {
        toast.error(res.data.message || "Failed to save bank account");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white dark:bg-richblack-900 w-full max-w-md rounded-lg shadow-lg p-6 relative sm:w-[90%] md:w-[400px]">
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 text-gray-600 dark:text-richblack-400 dark:hover:text-pink-400
            dark:bg-richblack-800 dark:rounded-full w-8 h-8 font-extrabold hover:text-pink-400"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-richblack-100">
          Add Bank Account
        </h2>

        {/* Form Fields */}
        <div className="space-y-4 text-[14px]">
          {/* Account Holder Name */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-700 dark:text-richblack-200">
              Account Holder Name {""}<span className="text-pink-200">*</span>
            </label>
            <input
              type="text"
              required
              name="account_holder_name"
              value={formData.account_holder_name}
              onChange={handleChange}
              placeholder="Enter account holder name"
              className="w-full p-2 rounded-lg border border-gray-200 dark:border-richblack-800 
                dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]
                dark:bg-richblack-800 dark:text-richblack-100"
            />
          </div>

          {/* Account Number */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-700 dark:text-richblack-200">
              Account Number {""}<span className="text-pink-200">*</span>
            </label>
            <input
              type="text"
              required
              name="account_number"
              value={formData.account_number}
              onChange={handleChange}
              placeholder="Enter account number"
              className="w-full p-2 rounded-lg border border-gray-200 dark:border-richblack-800 
                dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]
                dark:bg-richblack-800 dark:text-richblack-100"
            />
          </div>

          {/* IBAN */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-700 dark:text-richblack-200">
              IBAN Num For International
            </label>
            <input
              type="text"
              name="IBAN_number"
              value={formData.IBAN_number}
              onChange={handleChange}
              placeholder="Enter IBAN number"
              className="w-full p-2 rounded-lg border border-gray-200 dark:border-richblack-800 
                dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] 
                dark:bg-richblack-800 dark:text-richblack-100"
            />
          </div>

          {/* IFSC */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-700 dark:text-richblack-200">
              IFSC Code {""}<span className="text-pink-200">*</span>
            </label>
            <input
              type="text"
              required
              name="ifsc_code"
              value={formData.ifsc_code}
              onChange={handleChange}
              placeholder="Enter IFSC code"
              className="w-full p-2 rounded-lg border border-gray-200 dark:border-richblack-800 
                dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]
                dark:bg-richblack-800 dark:text-richblack-100"
            />
          </div>

          {/* Bank Branch */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-700 dark:text-richblack-200">
              Bank Branch {""}<span className="text-pink-200">*</span>
            </label>
            <input
              type="text"
              name="bank_branch"
              required
              value={formData.bank_branch}
              onChange={handleChange}
              placeholder="Enter branch name"
              className="w-full p-2 rounded-lg border border-gray-200 dark:border-richblack-800 
                dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] 
                dark:bg-richblack-800 dark:text-richblack-100"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 dark:bg-caribbeangreen-400 dark:hover:bg-caribbeangreen-500
            text-white font-semibold transition"
        >
          Save Bank Account
        </button>
      </div>
    </div>
  );
};

export default AddBankAccountDeteils;
