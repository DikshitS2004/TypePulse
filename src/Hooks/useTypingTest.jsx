import { useState, useEffect, useRef } from 'react';
import sampleTexts from '../Constants/SampleTexts';

export default function useTypingTest() {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState(0);
  const [timerMode, setTimerMode] = useState('30');
  const [timeLeft, setTimeLeft] = useState(parseInt(timerMode));
  const [isActive, setIsActive] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [theme, setTheme] = useState('dark');
  const [completedTests, setCompletedTests] = useState([]);
  
  const inputRef = useRef(null);
  const wordRef = useRef(null);
  
  useEffect(() => {
    
    const randomIndex = Math.floor(Math.random() * sampleTexts.length);
    setText(sampleTexts[randomIndex]);
  
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    let interval = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            finishTest();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    
    if (!isActive && value.length === 1) {
    
      setStartTime(Date.now());
      setIsActive(true);
      setTimeLeft(parseInt(timerMode));
    }
    if (value.length > 0 && value[value.length - 1] !== text[value.length - 1]) {
      setErrors(errors + 1);
    }
    
    setCurrentIndex(value.length);
    
    const totalCharacters = value.length;
    const accuracyPercentage = totalCharacters > 0 
      ? Math.max(0, 100 - (errors / totalCharacters * 100)) 
      : 100;
    setAccuracy(Math.round(accuracyPercentage));
    
    setUserInput(value);
    
    const words = value.trim().split(/\s+/);
    setWordCount(value.trim().endsWith(' ') ? words.length : words.length - 1);
    
    if (value === text) {
      finishTest();
    }
  };

  const finishTest = () => {
    setEndTime(Date.now());
    setIsActive(false);
    
    const minutes = (Date.now() - startTime) / 60000;
    const wpm = Math.round(wordCount / minutes);
    
    setCompletedTests([
      ...completedTests, 
      { wpm, accuracy, timeSpent: parseInt(timerMode) - timeLeft }
    ]);
  };

  const resetTest = () => {
    const randomIndex = Math.floor(Math.random() * sampleTexts.length);
    setText(sampleTexts[randomIndex]);
    setUserInput('');
    setStartTime(null);
    setEndTime(null);
    setCurrentIndex(0);
    setErrors(0);
    setIsActive(false);
    setTimeLeft(parseInt(timerMode));
    setWordCount(0);
    setAccuracy(100);
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const changeTimerMode = (newMode) => {
    setTimerMode(newMode);
    setTimeLeft(parseInt(newMode));
    resetTest();
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const renderText = () => {
    return text.split('').map((char, index) => {
      let className = '';
      
      if (index < currentIndex) {
        className = userInput[index] === char ? 'text-green-500' : 'text-red-500';
      } else if (index === currentIndex) {
        className = 'bg-gray-400 bg-opacity-40';
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };
  
  const calculateWPM = () => {
    if (!startTime || !isActive) return 0;
    
    const minutes = (Date.now() - startTime) / 60000;
    return Math.round(wordCount / minutes) || 0;
  };

  return {
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
    finishTest,
    resetTest,
    changeTimerMode,
    changeTheme,
    renderText,
    calculateWPM
  };
}