// src/contexts/ThemeContext.js (SIMPLIFIED VERSION)
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Start with light mode by default for easier debugging
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Try to load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDarkSaved = savedTheme === 'dark';
      setIsDark(isDarkSaved);
      updateDocumentClass(isDarkSaved);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      updateDocumentClass(prefersDark);
    }
  }, []);

  const updateDocumentClass = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    updateDocumentClass(newIsDark);
    
    // Debug log
    console.log('Theme toggled to:', newIsDark ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
