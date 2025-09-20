import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, Hash, SquarePen, Plus, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Loader from '../../reusable_component/Loader';
import axios from 'axios';
import apis from '../../utils/apis';

// Overview Component
const Overview = ({ userData, setActiveTab, }) => {
   const userId = localStorage.getItem("user_id");
    const [bankDetails, setBankDetails] = useState([]); // 👈 API se data store
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
     const [selectedBankId, setSelectedBankId] = useState(null);
     const [showAll, setShowAll] = useState(false);
    
    // API call to fetch bank details
  const fetchBankDetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${apis?.bankdetails}?user_id=${userId}`);
      if (res.data.success) {
        setBankDetails(res.data.data);

        // ✅ restore last selected bank
        const savedBankId = localStorage.getItem("selectedBankId");
        if (
          savedBankId &&
          res.data.data.some((b) => b.id === Number(savedBankId))
        ) {
          setSelectedBankId(Number(savedBankId));
        } else if (res.data.data.length > 0) {
          setSelectedBankId(res.data.data[0].id);
        }
      }
    } catch (err) {
      console.error("Error fetching bank details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchBankDetails();
  },[])
  

     // Bank Card Component
  const BankCard = ({ bank }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div
        onClick={() => setSelectedBankId(bank.id)} // ✅ update selected
        className={`bg-white dark:bg-richblack-800 rounded-lg shadow-sm dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] mb-3 overflow-hidden cursor-pointer ${
          selectedBankId === bank.id
            ? "border-b-1 border-yellow-50"
            : "border-gray-200 dark:border-richblack-700"
        }`}
      >
        <div
          className="flex items-center justify-between p-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center space-x-4">
            <div className="bg-gray-200 dark:bg-richblack-700 p-2 rounded-full">
              <CreditCard className="w-5 h-5 text-gray-600 dark:text-yellow-200" />
            </div>
            <div className="flex">
              {/* <p className="font-semibold text-gray-700 dark:text-richblack-200">
                {bank.account_name}
              </p> */}
              <p className="text-sm text-gray-500 dark:text-richblack-400">
                {String(bank.account_number)}
              </p>
            </div>
          </div>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {/* Dropdown Details */}
        {isOpen && (
          <div className="p-3 border-t border-gray-200 dark:border-richblack-700 text-sm text-gray-600 dark:text-richblack-300 space-y-1">
            <p>
              <span className="font-medium">Account No:</span>{" "}
              {bank.account_number}
            </p>
            <p>
              <span className="font-medium">Branch:</span> {bank.bank_branch}
            </p>
            <p>
              <span className="font-medium">IFSC:</span> {bank.ifsc_code}
            </p>
            <p>
              <span className="font-medium">IBAN:</span> {bank.IBAN_number}
            </p>
          </div>
        )}
      </div>
    );
  };


  return (
    <div className="bg-white dark:bg-richblack-900 rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-6">
        <User className="w-5 h-5 mr-2 font-bold text-gray-600 dark:text-richblack-100" />
        <h2 className="text-lg font-bold text-gray-800 dark:text-richblack-25">Personal Information</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 dark:bg-richblack-800 rounded-lg p-4 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)]">
          <div className="flex items-center mb-2">
            <User className="w-4 h-4 text-gray-500 mr-2 dark:text-richblack-300" />
            <span className="text-sm text-gray-600 dark:text-richblack-5 font-medium">Full Name</span>
          </div>
          <p className="text-gray-900 dark:text-richblack-50 font-medium">{userData.fullName}</p>
        </div>
        
        <div className="bg-gray-100 dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Phone className="w-4 h-4 text-gray-500 mr-2 dark:text-richblack-300" />
            <span className="text-sm text-gray-600 dark:text-richblack-5 font-medium">Phone Number</span>
          </div>
          <p className="text-gray-900 dark:text-richblack-50 font-medium">{userData.phone}</p>
        </div>
        
        <div className="bg-gray-100 dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Mail className="w-4 h-4 text-gray-500 mr-2 dark:text-richblack-300" />
            <span className="text-sm text-gray-600 dark:text-richblack-5 font-medium">Email Address</span>
          </div>
          <p className="text-gray-900 dark:text-richblack-50 font-medium">{userData.email}</p>
        </div>
        
        <div className="bg-gray-100 dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] rounded-lg p-4">
          <div className="flex items-center mb-2 dark:text-richblack-300">
            <Hash className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600 dark:text-richblack-5 font-medium">Account ID</span>
          </div>
          <p className="text-gray-900 dark:text-richblack-50 font-medium">{userData.accountId}</p>
        </div>
      </div>
      
        <div className="bg-gray-100 dark:bg-richblack-800 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] rounded-lg p-4 mt-6">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-600 dark:text-richblack-5">Member Since</span>
          </div>
          <p className="text-gray-900 dark:text-richblack-50 font-medium mt-1">{userData.memberSince}</p>
        </div>

        <div className="mt-6 flex justify-end">
          {/* <Link to="/edit-profile"> */}
            <button onClick={()=>setActiveTab("edit-profile")} className="flex items-center mb-2 rounded-2xl p-2 border border-gray-200 dark:border-yellow-50 dark:hover:bg-yellow-100 dark: bg-yellow-50 cursor-pointer">
                <SquarePen className="w-4 h-4 text-gray-500 mr-2 dark:text-richblack-900" />
                <span className="text-sm text-gray-800 dark:text-richblack-900 font-semibold">Edit Information</span>
            </button>
          {/* </Link> */}
        </div>

        <div className='mt-4'>
          {/* Bank Cards Section */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <div className="text-gray-700 font-semibold dark:text-richblack-200">
                Bank Cards
              </div>

              {/* View More logic */}
              {/* {bankDetails.length > 0 && (
                <div
                  onClick={() => setShowAll(!showAll)}
                  className="text-[12px] text-gray-600 font-semibold hover:bg-gray-200 hover:text-gray-800 mt-1 border border-gray-200 px-2 py-1 rounded-lg cursor-pointer shadow-sm dark:text-richblack-400 dark:hover:text-richblack-200 dark:hover:bg-richblack-700 dark:bg-richblack-800 dark:border-richblack-800"
                >
                  {showAll ? "View Less" : "View More"}
                </div>
              )} */}
              {bankDetails.length > 0 && (
                <div
                  onClick={() => setShowAll(!showAll)}
                  className="text-[12px] text-gray-600 font-semibold hover:text-gray-800 mt-1 border border-gray-200 px-2 py-1 rounded-lg cursor-pointer dark:text-richblack-400 dark:hover:text-richblack-200 dark:border-richblack-800"
                >
                  {showAll ? "View Less" : "View More"}
                </div>
              )}
            </div>

            <div className="mt-2">
              {/* CASE 1: No banks */}
              {bankDetails.length === 0 && (
                <div
                  className="mb-2 flex items-center bg-white dark:bg-richblack-800 border border-dashed border-gray-200 dark:border-richblack-700 p-1 rounded-lg cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <div className="bg-gray-200 dark:bg-richblack-700 p-2 rounded-full mr-3">
                    <Plus className="w-4 h-4 text-gray-600 dark:text-richblack-300" />
                  </div>
                  <p className="text-gray-700 dark:text-richblack-300 font-medium text-[14px]">
                    Add New Bank Account
                  </p>
                </div>
              )}

              {/* CASE 2: One bank */}
              {bankDetails.length === 1 && (
                <>
                  <BankCard bank={bankDetails[0]} />
                  {showAll && (
                    <div>
                      {/* Add New */}
                      <div
                        className="mb-2 flex items-center bg-white dark:bg-richblack-800 border border-dashed border-gray-200 dark:border-richblack-700 p-1 rounded-lg cursor-pointer"
                        onClick={() => setShowModal(true)}
                      >
                        <div className="bg-gray-200 dark:bg-richblack-700 p-2 rounded-full mr-3">
                          <Plus className="w-4 h-4 text-gray-600 dark:text-richblack-300" />
                        </div>
                        <p className="text-gray-700 dark:text-richblack-300 font-medium text-[14px]">
                          Add New Bank Account
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* CASE 3: Multiple banks */}
              {bankDetails.length > 1 && (
                <>
                  {/* ✅ Sirf selected bank dikhao */}
                  {bankDetails
                    .filter((bank) => bank.id === selectedBankId) // sirf selected bank
                    .map((bank) => (
                      <BankCard key={bank.id} bank={bank} />
                    ))}

                  {/* ✅ View More pe baki banks dikhao */}
                  {showAll &&
                    bankDetails
                      .filter((bank) => bank.id !== selectedBankId) // selected ko chhod ke baki sab
                      .map((bank) => <BankCard key={bank.id} bank={bank} />)}

                  {/* ✅ Add New bhi sirf View More me */}
                  {showAll && (
                    <div
                      className="mb-2 flex items-center bg-white dark:bg-richblack-800 border border-dashed border-gray-200 dark:border-richblack-700 p-1 rounded-lg cursor-pointer"
                      onClick={() => setShowModal(true)}
                    >
                      <div className="bg-gray-200 dark:bg-richblack-700 p-2 rounded-full mr-3">
                        <Plus className="w-4 h-4 text-gray-600 dark:text-richblack-300" />
                      </div>
                      <p className="text-gray-700 dark:text-richblack-300 font-medium text-[14px]">
                        Add New Bank Account
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Modal */}
            {showModal && <AddBankAccountDeteils setShowModal={setShowModal} />}
          </div>
        </div>

    </div>
  );
};

export default Overview