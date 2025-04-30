import React from 'react';
import { Clock } from 'lucide-react';
import themeClasses from '../Constants/themeClasses';

function TimerOptions({ timerMode, changeTimerMode, theme }) {
  return (
    <div className="mb-6 flex justify-center space-x-4 lg:pt-[2vw]">
      <button 
        onClick={() => changeTimerMode('15')} 
        className={`flex items-center px-4 py-2 rounded  lg:w-[5vw] lg:h-[2vw] text-black`}
      >
        <Clock className="w-4 h-4 mr-2" /> 15s
      </button>
      <button 
        onClick={() => changeTimerMode('30')} 
        className={`flex items-center px-4 py-2 rounded  lg:w-[5vw] lg:h-[2vw] text-black`}
      >
        <Clock className="w-4 h-4 mr-2" /> 30s
      </button>
      <button 
        onClick={() => changeTimerMode('60')} 
        className={`flex items-center px-4 py-2 rounded lg:w-[5vw] lg:h-[2vw] text-black `}
      >
        <Clock className="w-4 h-4 mr-2" /> 60s
      </button>
    </div>
  );
}

export default TimerOptions;