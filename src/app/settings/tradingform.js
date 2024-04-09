import React from 'react';
import Link from 'next/link';

const TradingForm = () => {
  return (
    <div className="max-w-lg mx-auto">
    <h2 className="text-2xl text-grey font-bold">Trading Form</h2>

      <form id="tradingForm" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div className="mb-4">
            <label htmlFor="tradingPair" className="block text-gray-700 text-sm font-bold mb-2">Trading Pair (Futures):</label>
            <input type="text" id="tradingPair" name="tradingPair" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="leverage" className="block text-gray-700 text-sm font-bold mb-2">Leverage (1 - 200x):</label>
            <input type="number" id="leverage" name="leverage" min="1" max="200" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Type (Long or Short):</label>
            <select id="type" name="type" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="long">Long</option>
              <option value="short">Short</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="orderSize" className="block text-gray-700 text-sm font-bold mb-2">Order Size (USDT):</label>
            <input type="number" id="orderSize" name="orderSize" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="stoploss" className="block text-gray-700 text-sm font-bold mb-2">Stoploss (%):</label>
            <input type="number" id="stoploss" name="stoploss" step="0.01" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="takeProfit" className="block text-gray-700 text-sm font-bold mb-2">Take Profit (%):</label>
            <input type="number" id="takeProfit" name="takeProfit" step="0.01" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="directionAfterStoploss" className="block text-gray-700 text-sm font-bold mb-2">Direction after Stoploss (Same or Opposite):</label>
            <select id="directionAfterStoploss" name="directionAfterStoploss" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="same">Same</option>
              <option value="opposite">Opposite</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="martingaleMultiplier" className="block text-gray-700 text-sm font-bold mb-2">Multiplier of Martingale Order Size (1.00 - 2.00):</label>
            <input type="number" id="martingaleMultiplier" name="martingaleMultiplier" min="1" max="2" step="0.01" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="maxRepeat" className="block text-gray-700 text-sm font-bold mb-2">Number of Max. Repeat Open Position (1 - 100):</label>
            <input type="number" id="maxRepeat" name="maxRepeat" min="1" max="100" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="afterTargetAchieved" className="block text-gray-700 text-sm font-bold mb-2">After Target Achieved, Automatically Open New Trade for Actual Market Price:</label>
            <select id="afterTargetAchieved" name="afterTargetAchieved" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-span-2 mb-4">
            <Link href="/settings">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TradingForm;
