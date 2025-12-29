
import React from 'react';
import { ARTISTS, ExtendedArtist } from '../constants';
import { Eye, HandIcon } from 'lucide-react';

interface ArtistSectionProps {
  onSelectArtist: (artist: ExtendedArtist) => void;
}

const ArtistSection: React.FC<ArtistSectionProps> = ({ onSelectArtist }) => {
  return (
    <section id="artists" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex flex-col items-center mb-24 space-y-6">
        <div className="p-4 bg-orange-100 rounded-3xl text-orange-600 mb-2">
          <HandIcon size={32} />
        </div>
        <h3 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter text-center">
          Unsere <span className="rough-underline text-orange-500">Hände</span>
        </h3>
        <p className="text-gray-500 max-w-xl text-center font-sans-ui text-xl font-medium leading-relaxed">
          Künstlerische Unikate statt Massenware. <br className="hidden md:block"/>
          Finde den passenden Stil für deine Geschichte.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
        {ARTISTS.map((artist) => (
          <button 
            key={artist.id} 
            className="group flex flex-col space-y-10 text-left w-full outline-none focus:ring-4 focus:ring-orange-100 rounded-[4rem]"
            onClick={() => onSelectArtist(artist)}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[4rem] shadow-2xl transition-all duration-700 group-hover:shadow-orange-200/60 group-hover:-rotate-2">
              <img 
                src={artist.imageUrl} 
                alt={artist.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-red-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white text-gray-900 px-10 py-5 rounded-[2rem] font-black text-xl shadow-2xl flex items-center gap-3 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 font-sans-ui">
                  <Eye size={24} className="text-orange-500" /> Portfolio
                </div>
              </div>
            </div>
            
            <div className="text-center px-6">
              <h4 className="text-5xl font-black text-gray-900 mb-2 font-brand group-hover:text-orange-500 transition-colors tracking-tight">{artist.name}</h4>
              <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-6 font-sans-ui">{artist.handle}</p>
              <div className="w-16 h-1 bg-gray-100 mx-auto mb-6 group-hover:w-32 group-hover:bg-orange-300 transition-all rounded-full"></div>
              <p className="text-gray-500 text-lg leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                "{artist.description.split('.')[0]}."
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ArtistSection;
