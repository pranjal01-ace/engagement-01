import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitation';
import CornerOrnaments from './CornerOrnaments';
import GoldenDivider from './common/GoldenDivider';

export default function GaneshOpening({ onScrollNext }) {
  const [imageSrc, setImageSrc] = useState(INVITATION_DATA.ganeshOpening.image);

  const handleImageError = () => {
    // If user has not yet dropped the PNG, fallback cleanly to the devotional SVG artwork
    if (imageSrc !== INVITATION_DATA.ganeshOpening.svgFallback) {
      setImageSrc(INVITATION_DATA.ganeshOpening.svgFallback);
    }
  };

  return (
    <section
      id="ganesh-opening"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-radial-gradient from-navy-800 via-navy-900 to-navy-950 text-ivory-100 px-4 py-16 overflow-hidden select-none"
    >
      {/* Golden Corner Ornamental Borders with progressive delay */}
      <CornerOrnaments size="w-20 h-20 sm:w-28 sm:h-28" opacity="opacity-80" />

      {/* Large Traditional Golden Mandala Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
        animate={{ opacity: 0.22, scale: 1, rotate: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/assets/images/decorations/mandala.svg"
          alt=""
          className="w-[450px] h-[450px] sm:w-[700px] sm:h-[700px] lg:w-[820px] lg:h-[820px] object-contain animate-spin-slow filter drop-shadow-[0_0_50px_rgba(212,175,55,0.3)]"
        />
      </motion.div>

      {/* Radiant Aura Glow behind Ganesh Ji */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-radial-gradient from-gold-400/25 via-gold-500/10 to-transparent blur-3xl pointer-events-none"
      />

      {/* Center Devotional Stage */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto">
        
        {/* Sanskrit Mantra Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mb-4"
        >
          <span className="inline-block text-gold-400 font-cinzel text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold">
            {INVITATION_DATA.ganeshOpening.sanskritMantra}
          </span>
        </motion.div>

        {/* Shri Ganesh Ji Idol / Artwork with Divine Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-56 h-64 sm:w-72 sm:h-80 lg:w-80 lg:h-92 my-2 flex items-center justify-center drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
        >
          {/* Ornate Frame Halo */}
          <div className="absolute inset-0 rounded-full border border-gold-400/30 scale-95 animate-pulse-glow pointer-events-none" />
          
          <img
            src={imageSrc}
            alt="Bhagwan Shri Ganesh Ji"
            onError={handleImageError}
            className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition-all duration-700"
          />
        </motion.div>

        {/* Golden Ornamental Divider */}
        <GoldenDivider className="my-3 sm:my-5" width="w-44 sm:w-64" />

        {/* Shree Ganeshay Namaha Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-royal font-bold gold-text-shimmer tracking-wider sm:tracking-widest drop-shadow-md mb-3"
        >
          {INVITATION_DATA.ganeshOpening.englishMantra}
        </motion.h1>

        {/* Sacred Shloka Inscription */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.2 }}
          className="space-y-2 px-4"
        >
          <p className="text-sm sm:text-base font-cormorant font-medium text-gold-200/90 tracking-wide sm:tracking-widest">
            {INVITATION_DATA.ganeshOpening.shloka}
          </p>
          <p className="text-[11px] sm:text-xs font-sans text-ivory-300/60 max-w-md mx-auto italic tracking-wider">
            "{INVITATION_DATA.ganeshOpening.shlokaMeaning}"
          </p>
        </motion.div>

        {/* Smooth Transition Indicator Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="mt-8 sm:mt-12"
        >
          <button
            onClick={onScrollNext}
            className="group flex flex-col items-center gap-1 text-gold-400/80 hover:text-gold-300 transition-colors duration-300 focus:outline-none"
            aria-label="Scroll to Royal Welcome"
          >
            <span className="text-[10px] font-cinzel uppercase tracking-[0.25em] group-hover:tracking-[0.3em] transition-all">
              Begin Journey
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
            </motion.div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

