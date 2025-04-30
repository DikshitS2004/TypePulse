import React from 'react';
import { RotateCcw } from 'lucide-react';
import themeClasses from '../Constants/themeClasses';

function TestComplete({ completedTests, resetTest, theme }) {
  const lastTest = completedTests.length > 0 ? completedTests[completedTests.length - 1] : null;

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Test Complete!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-3 bg-opacity-20 bg-blue-500 rounded">
          <div className="text-sm opacity-70">WPM</div>
          <div className="text-2xl font-bold">
            {lastTest ? lastTest.wpm : 0}
          </div>
        </div>
        <div className="p-3 bg-opacity-20 bg-green-500 rounded">
          <div className="text-sm opacity-70">Accuracy</div>
          <div className="text-2xl font-bold">
            {lastTest ? lastTest.accuracy : 0}%
          </div>
        </div>
        <div className="p-3 bg-opacity-20 bg-purple-500 rounded">
          <div className="text-sm opacity-70">Time Spent</div>
          <div className="text-2xl font-bold">
            {lastTest ? lastTest.timeSpent : 0}s
          </div>
        </div>
      </div>
      <button 
        onClick={resetTest} 
        className={`flex items-center text-black mx-auto px-6 py-2 rounded `}
      >
        <RotateCcw className="w-4 h-4 mr-2" /> Try Again
      </button>
    </div>
  );
}

export default TestComplete;