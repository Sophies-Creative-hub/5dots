
import React from 'react';
import { MapPin, Mail, Instagram, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="py-24 px-6 bg-gray-50 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-extrabold text-gray-900">Das Studio</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Inmitten von Düsseldorf schaffen wir einen Ort, an dem Kunst unter die Haut geht. 
              Wir legen Wert auf höchste Hygienestandards, individuelle Beratung und eine Atmosphäre, 
              in der du dich vollkommen wohlfühlen kannst.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-400 tracking-widest">Adresse</p>
                  <p className="font-semibold text-gray-800">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-red-800 group-hover:scale-110 transition-transform">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-400 tracking-widest">Öffnungszeiten</p>
                  <p className="font-semibold text-gray-800">Mo – Sa: Termine nach Vereinbarung</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800" 
                alt="Studio Atmosphere" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 aspect-square w-32 bg-orange-400 rounded-[2rem] -rotate-6 z-[-1]"></div>
            <div className="absolute -top-6 -right-6 aspect-square w-24 bg-red-900 rounded-[2rem] rotate-12 z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
