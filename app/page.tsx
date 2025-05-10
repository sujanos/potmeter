"use client";

import { useState } from 'react';

export default function Home() {
  const [potmeterValue, setPotmeterValue] = useState(50);

  const handleIncrease = () => {
    setPotmeterValue(Math.min(100, potmeterValue + 10));
  };

  const handleDecrease = () => {
    setPotmeterValue(Math.max(0, potmeterValue - 10));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="bg-white p-16 rounded-xl shadow-2xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Potmeter Value</h1>
        <div className="text-8xl font-extrabold text-blue-600">{potmeterValue}%</div>
        <div className="flex items-center justify-center space-x-6">
          <button 
            onClick={handleDecrease} 
            className="bg-red-500 hover:bg-red-600 text-white text-2xl px-6 py-3 rounded-lg transition-colors"
          >
            -
          </button>
          <button 
            onClick={handleIncrease} 
            className="bg-green-500 hover:bg-green-600 text-white text-2xl px-6 py-3 rounded-lg transition-colors"
          >
            +
          </button>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div 
            className="bg-blue-600 h-4 rounded-full transition-all duration-300" 
            style={{ width: `${potmeterValue}%` }}
          ></div>
        </div>
      </div>
    </main>
  );
}
