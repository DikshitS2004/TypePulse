import React from 'react';
import themeClasses from '../Constants/themeClasses';

function Stats({ wpm, accuracy, timeLeft, theme }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  lg:mt-[5vw] mt-[20vw] gap-4 mb-6">
      <div className={`${themeClasses.card[theme]} p-4 rounded shadow-lg text-center`}>
        <div className="text-sm opacity-70">WPM</div>
        <div className="text-2xl font-bold">{wpm}</div>
      </div>
      <div className={`${themeClasses.card[theme]} p-4 rounded shadow-lg text-center`}>
        <div className="text-sm opacity-70">Accuracy</div>
        <div className="text-2xl font-bold">{accuracy}%</div>
      </div>
      <div className={`${themeClasses.card[theme]} p-4 rounded shadow-lg text-center`}>
        <div className="text-sm opacity-70">Time</div>
        <div className="text-2xl font-bold">{timeLeft}s</div>
      </div>
    </div>
  );
}

export default Stats;