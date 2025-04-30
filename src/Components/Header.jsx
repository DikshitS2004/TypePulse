
import React from 'react';
import themeClasses from '../Constants/themeClasses';

function Header({ theme, changeTheme }) {
  return (
    <header className="mb-8 flex flex-col lg:gap-[20vw] md:flex-row justify-between items-center gap-4">
      <h1 className="text-3xl ml-[10vw]  font-bold">TypePulse</h1>
      
      <div className="flex space-x-2 lg:gap-[2vw]">

        <button 
          onClick={() => changeTheme('light')} 
          className={`px-3 py-1 rounded text-sm text-black `}
        >
          Light
        </button>
        <button 
          onClick={() => changeTheme('sepia')} 
          className={`px-3 py-1 rounded text-sm text-black `}
        >
          Sepia
        </button>
        <button 
          onClick={() => changeTheme('dark')} 
          className={`px-3 py-1 rounded text-sm text-green-900 `}
        >
          Dark
        </button>
      </div>
    </header>
  );
}

export default Header;