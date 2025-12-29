
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900 text-white py-12 px-6 mb-20 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h4 className="font-brand text-4xl">5dots</h4>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
          <a href="#" className="hover:underline">Impressum</a>
          <a href="#" className="hover:underline">Datenschutz</a>
          <a href="#" className="hover:underline">AGB</a>
          <a href="#" className="hover:underline">Kontakt</a>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-xs opacity-60">
          © {new Date().getFullYear()} 5dots Tattoo Studio Düsseldorf. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
