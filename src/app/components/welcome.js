'use client'
import React, { useState } from 'react';
import TradingForm from '../settings/tradingform';

const WelcomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className=" text-white min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Mexc Trading Bot!</h1>
        <p className="text-lg mb-8">Empower your trading journey with Mexc Trading Bot – your reliable partner in navigating the dynamic world of futures trading.</p>
        <p className="text-lg mb-8">Our bot employs sophisticated algorithms to help you optimize your trading decisions and achieve your financial goals. One such strategy is the renowned <span className="font-bold">Martingale strategy</span>.</p>
        <p className="text-lg mb-8">With Mexc Trading Bot, you can automate the execution of the Martingale strategy, allowing you to trade confidently while minimizing emotional bias.</p>
        <p className="text-lg mb-8">Start your journey today and experience the power of Mexc Trading Bot. Let's elevate your trading experience together!</p>
        <button onClick={togglePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Setup Trade</button>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={togglePopup}></div>
          <div className="bg-white p-8 rounded shadow-lg z-50">
            <button onClick={togglePopup} className="absolute top-0 right-0 m-4 focus:outline-none">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <TradingForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
