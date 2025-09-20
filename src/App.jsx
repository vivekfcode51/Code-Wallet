import { useState } from 'react'
import React from 'react'
import {Route, Routes } from "react-router-dom";
import AuthForm from './components/AuthForm';
import WithdrawalRequest from './pages/withdrawal/WithdrawalRequest';
import DepositRequest from './pages/Deposit/DepositRequest';
import SecureWallet from './pages/SecureWallet';
import ProfileTabs from './pages/profile/ProfileTabs'
import EditProfile from './pages/profile/EditProfile';
import './App.css'
import QrUsdtPayment from './pages/Deposit/QrUsdtPayment';
import TotalDepositTransition from './pages/Deposit/TotalDepositTransition';
import TotalWithdrawalTransition from './pages/withdrawal/TotalWithdrawalTransition';
import TotalTransition from './pages/TotalTransition';

function App() {

  return (
    <>
      <div className='w-screen min-h-screen dark:bg-richblack-800'>

        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route
            path="/"
            element={<AuthForm />}
          />

          {/* Source route */}
          <Route
            path="/wallet"
            element={<SecureWallet />}
          />

          {/* WithdrawalRequest */}
          <Route
            path='/withdrawal-request'
            element={<WithdrawalRequest/>}
          />

          {/* DepositRequest */}
          <Route
            path='/deposit-request'
            element={<DepositRequest/>}
          />  

          {/* Profile */}
          <Route
            path='/profile'
            element={<ProfileTabs/>}
          />  

          {/* QrUsdt payment */}
          <Route 
            path="/qr-usdt-payment" 
            element={<QrUsdtPayment />} />

          {/* TotalDepositTransition */}
          <Route 
            path="/deposit-transactions" 
            element={<TotalDepositTransition />} 
          />

          {/* TotalWithdrawalTransition */}
          <Route 
            path="/withdrawal-transactions" 
            element={<TotalWithdrawalTransition />} 
          />

           {/* TotalTransition */}
          <Route 
            path="/wallet/total-transactions" 
            element={<TotalTransition />} 
          />

        </Routes>
      
      </div>
    </>
  )
}

export default App
