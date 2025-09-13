import React from 'react'
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import TransactionHistory from '../components/TransactionHistory';

const SecureWallet = () => {
  return (
    <>
        <div>
            <Header/>
        </div>
        
        <div>
            <Dashboard/>
        </div>

        <div>
            <TransactionHistory/>
        </div>
    </>
  )
}

export default SecureWallet