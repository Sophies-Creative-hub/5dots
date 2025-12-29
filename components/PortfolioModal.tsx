
import React from 'react';
import { X, Instagram } from 'lucide-react';
import { ExtendedArtist } from '../constants';

interface PortfolioModalProps {
  artist: ExtendedArtist | null;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ artist, onClose }) => {
  if (!artist) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm animate-ink">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2.5rem] flex flex-col relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Sidebar Info */}
          <div className="md:w-1/3 p-8 md:p-12 bg-gray-50 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-5xl font-extrabold tracking-tighter text-gray-900">{artist.name}</h3>
              <p className="text-red-900 font-bold uppercase tracking-widest text-sm">{artist.handle}</p>
              <p className="text-gray-600 leading-relaxed italic">{artist.description}</p>
            </div>
            
            <a 
              href={`https://instagram.com/${artist.handle.replace('@', '')}`}
              target="_blank"
              className="mt-8 flex items-center justify-center gap-3 bg-red-950 text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition-colors shadow-lg"
            >
              <Instagram size={20} /> Instagram Portfolio
            </a>
          </div>

          {/* Gallery Area */}
          <div className="md:w-2/3 overflow-y-auto p-6 md:p-12 space-y-8 no-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artist.portfolio.map((img, idx) => (
                <div key={idx} className="aspect-square rounded-3xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
                  <img src={img} alt={`Work by ${artist.name}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-center text-gray-400 py-12 border-t border-gray-100">
              <p className="text-sm">Viele weitere Arbeiten findest du in unserem Studio vor Ort.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
