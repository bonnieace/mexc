'use client'
import React, { useState } from 'react';
import LottieAnimation from '../components/LottieAnimation';
import animationData from '../../../src/app/components/Animation-1713011295861.json';
import Lottie from 'lottie-react';
import TradingForm from '../settings/tradingform';
import kline from 'klinecharts'
const WelcomePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex items-stretch h-screen">
      <div className="flex-1 flex justify-center items-center">
        <Lottie animationData={animationData} />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-md text-white text-center">
          {!showForm ? (
            <>
              <h1 className="text-4xl font-bold mb-4">Welcome to Mexc Trading Bot!</h1>
              <p className="text-lg mb-8">Empower your trading journey with Mexc Trading Bot – your reliable partner in navigating futures trading.</p>
              <p className="text-lg mb-8">Automate the renowned Martingale strategy and trade confidently while minimizing emotional bias.</p>
              <button onClick={() => setShowForm(true)} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Setup Trade</button>
            </>
          )  : (
            <TradingForm/>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
