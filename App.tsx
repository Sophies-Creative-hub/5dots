
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ArtistSection from './components/ArtistSection';
import InfoSection from './components/InfoSection';
import BottomBar from './components/BottomBar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MenuOverlay from './components/MenuOverlay';
import PortfolioModal from './components/PortfolioModal';
import { ExtendedArtist } from './constants';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<ExtendedArtist | null>(null);

  // Listen for custom trigger from menu or other components
  useEffect(() => {
    const handleOpenBooking = () => setIsBookingOpen(true);
    window.addEventListener('open-booking', handleOpenBooking);
    return () => window.removeEventListener('open-booking', handleOpenBooking);
  }, []);

  // Body scroll lock when modal is open
  useEffect(() => {
    if (isBookingOpen || isMenuOpen || selectedArtist) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isBookingOpen, isMenuOpen, selectedArtist]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-100 selection:text-orange-900 font-sans-ui">
      <Header onToggleMenu={() => setIsMenuOpen(true)} />
      
      <main className="flex-grow overflow-x-hidden">
        <Hero />
        <ArtistSection onSelectArtist={(artist) => setSelectedArtist(artist)} />
        <InfoSection />
      </main>
      
      <Footer />
      
      <BottomBar onOpenBooking={() => setIsBookingOpen(true)} />
      
      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      <PortfolioModal 
        artist={selectedArtist} 
        onClose={() => setSelectedArtist(null)} 
      />
    </div>
  );
};

export default App;
