import React from 'react';
import themeClasses from '../Constants/themeClasses';
import TestComplete from './TestComplete';

function TypingArea({ 
  renderText, 
  wordRef, 
  endTime, 
  timeLeft, 
  userInput, 
  handleInputChange, 
  inputRef, 
  theme, 
  completedTests,
  resetTest
}) {
  return (
    <div className={`${themeClasses.card[theme]} p-6 lg:mt-[4vw] mt-[25vw] lg:w-[40vw] lg:ml-[-5vw]   rounded-lg shadow-lg mb-6`}>
      <div 
        ref={wordRef}
        className="lg:text-[1vw] md:text-xl mb-6 leading-relaxed font-mono min-h-24"
      >
        {renderText()}
      </div>
      {!endTime && timeLeft > 0 ? (
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          className={`w-full p-12 rounded ${themeClasses.input[theme]} font-mono lg:mt-[2vw] text-[0.7vw] focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Start typing..."
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
      ) : (
        <TestComplete completedTests={completedTests} resetTest={resetTest} theme={theme} />
      )}
    </div>
  );
}

export default TypingArea;