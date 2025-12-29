
import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface BottomBarProps {
  onOpenBooking: () => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ onOpenBooking }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t-2 border-gray-100 z-50 flex items-center justify-around px-4 pb-2">
      <a 
        href={`tel:${CONTACT_INFO.phone}`}
        className="flex flex-col items-center justify-center space-y-1 group"
      >
        <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
          <Phone size={20} />
        </div>
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Anrufen</span>
      </a>

      <button 
        onClick={onOpenBooking}
        className="flex flex-col items-center justify-center -mt-8 relative group"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-800 text-white rounded-full flex items-center justify-center shadow-xl transition-all group-hover:scale-110 group-active:scale-95">
          <Calendar size={32} />
        </div>
        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mt-2">Termin</span>
      </button>

      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center space-y-1 group"
      >
        <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
          <MessageCircle size={20} />
        </div>
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">WhatsApp</span>
      </a>
    </nav>
  );
};

export default BottomBar;
