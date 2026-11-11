import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MusicControl from './components/MusicControl';
import AutoScrollControl from './components/AutoScrollControl';
import CinematicParticles from './components/CinematicParticles';
import GaneshOpening from './components/GaneshOpening';
import RoyalWelcome from './components/RoyalWelcome';
import CoupleIntroduction from './components/CoupleIntroduction';
import FamilyIntroduction from './components/FamilyIntroduction';
import PhotoGallery from './components/PhotoGallery';
import Countdown from './components/Countdown';
import VenueSection from './components/VenueSection';
import FinalInvitation from './components/FinalInvitation';
import NavigationPills from './components/NavigationPills';
// Headers
export default function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [musicRequested, setMusicRequested] = useState(false);

  const handleEnterInvitation = () => {
    setIsEntered(true);
    setMusicRequested(true);
  };

  const handleScrollToWelcome = () => {
    const el = document.getElementById('royal-welcome');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#040711] text-ivory-100 overflow-x-hidden selection:bg-gold-500 selection:text-navy-950 font-sans">
      {/* Royal Opening Curtain / Preloader */}
      <LoadingScreen onEnter={handleEnterInvitation} isEntered={isEntered} />

      {/* Background Floating Golden Particles */}
      <CinematicParticles />

      {/* Floating Auto-Scroll Control */}
      <AutoScrollControl isEntered={isEntered} />

      {/* Floating Music Toggle */}
      <MusicControl autoStartRequested={musicRequested} />

      {/* Floating Quick Navigation Pills */}
      <NavigationPills />

      {/* Main Continuous Cinematic Scrolling Experience */}
      <main className="relative z-10 w-full flex flex-col">
        {/* SCENE 1: SHRI GANESH JI – OPENING */}
        <GaneshOpening onScrollNext={handleScrollToWelcome} />

        {/* SCENE 2: ROYAL WELCOME */}
        <RoyalWelcome />

        {/* SCENE 3: COUPLE INTRODUCTION */}
        <CoupleIntroduction />

        {/* SCENE 4: FAMILY INTRODUCTION */}
        <FamilyIntroduction />

        {/* SCENE 5: PHOTO GALLERY */}
        <PhotoGallery />

        {/* SCENE 6: SAVE THE DATE & LIVE COUNTDOWN */}
        <Countdown />

        {/* SCENE 7: VENUE AND GOOGLE MAPS */}
        <VenueSection />

        {/* SCENE 8: FINAL INVITATION */}
        <FinalInvitation onBackToTop={handleBackToTop} />
      </main>
    </div>
  );
}
