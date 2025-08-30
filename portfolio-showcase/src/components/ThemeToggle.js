import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-all duration-300 group"
      aria-label="Toggle theme"
      type="button"
    >
      <div className="relative w-5 h-5">
        {isDark ? (
          <Moon className="w-5 h-5 text-blue-400 transition-all duration-300" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500 transition-all duration-300" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
