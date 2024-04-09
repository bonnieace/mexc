'use client'
import React, { useState } from 'react';
import TradingForm from './tradingform';

const TradingFormPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex justify-center">
      <button onClick={togglePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Open Trading Form
      </button>
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

export default TradingFormPopup;
