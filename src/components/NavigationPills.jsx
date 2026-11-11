import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'ganesh-opening', label: 'Ganesh Ji' },
  { id: 'royal-welcome', label: 'Welcome' },
  { id: 'couple-intro', label: 'Couple' },
  { id: 'family-intro', label: 'Families' },
  { id: 'photo-gallery', label: 'Moments' },
  { id: 'save-the-date', label: 'Date' },
  { id: 'venue-section', label: 'Venue' },
  { id: 'final-invitation', label: 'Blessings' },
];

export default function NavigationPills() {
  const [activeId, setActiveId] = useState('ganesh-opening');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hidden on mobile screens to maintain clean, unobstructed video presentation
  return (
    <div className="hidden md:block fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] overflow-x-auto no-scrollbar">
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-navy-950/90 border border-gold-400/40 shadow-2xl backdrop-blur-md whitespace-nowrap"
        aria-label="Scene navigation"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-cinzel tracking-wider uppercase transition-all duration-300 ${
                isActive
                  ? 'text-navy-950 font-bold'
                  : 'text-ivory-200/70 hover:text-gold-300'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 shadow-md shadow-gold-500/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
}
