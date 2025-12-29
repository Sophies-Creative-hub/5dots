
import React from 'react';
import { Instagram, Menu } from 'lucide-react';

interface HeaderProps {
  onToggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleMenu }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-50 flex items-center px-4 md:px-8 border-b border-gray-100">
      <div className="flex items-center w-1/3">
        <a 
          href="https://instagram.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-red-900 hover:text-orange-500 transition-all hover:scale-110"
        >
          <Instagram size={24} />
        </a>
      </div>
      
      <div className="flex justify-center w-1/3">
        <a href="#" className="font-brand text-3xl md:text-4xl text-orange-500 select-none">5dots</a>
      </div>
      
      <div className="flex justify-end w-1/3">
        <button 
          onClick={onToggleMenu}
          className="text-red-900 p-2 hover:bg-gray-100 rounded-full transition-all"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
