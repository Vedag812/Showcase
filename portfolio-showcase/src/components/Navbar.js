// src/components/Navbar.js (FIXED VERSION)
import React from 'react';
import { Home, User, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ onHomeClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            onClick={onHomeClick}
          >
            Portfolio<span className="text-blue-600 dark:text-cyan-400">.dev</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={onHomeClick}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </button>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center">
              <User className="w-4 h-4 mr-2" />
              About
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </a>
            {/* Theme Toggle - Desktop */}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
