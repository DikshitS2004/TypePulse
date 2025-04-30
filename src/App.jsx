import React from 'react';
import useTypingTest from './Hooks/useTypingTest';
import themeClasses from './Constants/themeClasses';
import Header from './Components/Header';
import TimerOptions from './Components/TimerOptions';
import Stats from './Components/Stats';
import TypingArea from './Components/TypingArea';
import TestHistory from './Components/TestHistory';

export default function App() {
  const {
    text,
    userInput,
    startTime,
    endTime,
    currentIndex,
    errors,
    timerMode,
    timeLeft,
    isActive,
    wordCount,
    accuracy,
    theme,
    completedTests,
    inputRef,
    wordRef,
    handleInputChange,
    resetTest,
    changeTimerMode,
    changeTheme,
    renderText,
    calculateWPM
  } = useTypingTest();

  return (
    <div className={`min-h-screen w-[100vw] p-4 md:p-8 transition-colors duration-300 ${themeClasses.container[theme]}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Header theme={theme} changeTheme={changeTheme} />

        {/* Timer options */}
        <TimerOptions 
          timerMode={timerMode} 
          changeTimerMode={changeTimerMode} 
          theme={theme} 
        />

     

        {/* Typing area */}
        <TypingArea 
          renderText={renderText}
          wordRef={wordRef}
          endTime={endTime}
          timeLeft={timeLeft}
          userInput={userInput}
          handleInputChange={handleInputChange}
          inputRef={inputRef}
          theme={theme}
          completedTests={completedTests}
          resetTest={resetTest}
        />
           {/* Stats */}
           <Stats 
          wpm={calculateWPM()} 
          accuracy={accuracy} 
          timeLeft={timeLeft} 
          theme={theme} 
        />

        {/* History */}
        <TestHistory completedTests={completedTests} theme={theme} />
      </div>
    </div>
  );
}