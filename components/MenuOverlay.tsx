
import React from 'react';
import { X, Instagram, Mail, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigateTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onClose();
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const links = [
    { label: 'Startseite', href: '#' },
    { label: 'Das Studio', href: '#info' },
    { label: 'Artists', href: '#artists' },
    { label: 'Termin Buchen', href: '#booking', primary: true, onClick: () => { onClose(); window.dispatchEvent(new CustomEvent('open-booking')); } },
  ];

  return (
    <div className="fixed inset-0 z-[300] bg-white flex flex-col transition-all duration-700 animate-slide-in h-[100dvh]">
      {/* Header inside Menu */}
      <div className="flex-none flex justify-between items-center p-8 md:p-12">
        <button onClick={(e) => navigateTo(e, '#')} className="font-brand text-5xl text-orange-500 hover:scale-105 transition-transform">
          3dots
        </button>
        <button 
          onClick={onClose} 
          className="p-4 bg-gray-50 hover:bg-red-50 hover:text-red-900 rounded-full transition-all group"
        >
          <X size={32} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Navigation - scrollable */}
      <nav className="flex-grow min-h-0 overflow-y-auto px-8 md:px-24 flex flex-col justify-center space-y-4 md:space-y-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              if (link.onClick) {
                e.preventDefault();
                link.onClick();
              } else {
                navigateTo(e, link.href);
              }
            }}
            className={`group flex items-center justify-between text-5xl md:text-8xl font-black tracking-tighter transition-all hover:translate-x-4 ${
              link.primary ? 'text-orange-500 italic' : 'text-gray-900 hover:text-red-900'
            }`}
          >
            <span className="relative overflow-hidden">
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-2 bg-orange-400 group-hover:w-full transition-all duration-500 opacity-30"></span>
            </span>
            <ArrowRight size={48} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-12 group-hover:translate-x-0 hidden md:block" />
          </a>
        ))}
      </nav>

      {/* Footer inside Menu */}
      <div className="flex-none p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 border-t border-gray-100">
        <div className="group cursor-default">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 font-sans-ui">Location</p>
          <p className="text-lg font-bold group-hover:text-orange-500 transition-colors">{CONTACT_INFO.address}</p>
        </div>
        <div className="group cursor-default">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 font-sans-ui">Get in touch</p>
          <p className="text-lg font-bold group-hover:text-red-900 transition-colors">{CONTACT_INFO.email}</p>
        </div>
        <div className="flex gap-4 items-center md:justify-end">
          <a 
            href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
            target="_blank"
            className="w-14 h-14 bg-white border border-gray-100 rounded-[1.5rem] flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 hover:shadow-xl transition-all"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
