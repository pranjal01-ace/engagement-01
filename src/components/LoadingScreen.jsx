import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Music } from 'lucide-react';

export default function LoadingScreen({ onEnter, isEntered }) {
  return (
    <AnimatePresence>
      {!isEntered && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040711] text-ivory-100 overflow-hidden px-4"
        >
          {/* Subtle Rotating Mandala in Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
            <img
              src="/assets/images/decorations/mandala.svg"
              alt=""
              className="w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] object-contain animate-spin-slow"
            />
          </div>

          {/* Golden Corner Accents - Opens top corners, closes bottom corners */}
          <div className="absolute top-4 left-4 w-16 h-16 sm:w-24 sm:h-24 opacity-60">
            <img src="/assets/images/decorations/corner-ornament.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-4 right-4 w-16 h-16 sm:w-24 sm:h-24 opacity-60">
            <img src="/assets/images/decorations/corner-ornament.svg" alt="" className="w-full h-full object-contain" style={{ transform: 'scaleX(-1)' }} />
          </div>
          <div className="absolute bottom-4 left-4 w-16 h-16 sm:w-24 sm:h-24 opacity-60">
            <img src="/assets/images/decorations/corner-ornament.svg" alt="" className="w-full h-full object-contain" style={{ transform: 'scaleY(-1)' }} />
          </div>
          <div className="absolute bottom-4 right-4 w-16 h-16 sm:w-24 sm:h-24 opacity-60">
            <img src="/assets/images/decorations/corner-ornament.svg" alt="" className="w-full h-full object-contain" style={{ transform: 'scale(-1, -1)' }} />
          </div>

          {/* Central Royal Gate Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto"
          >
            {/* Royal Wax Seal Monogram */}
            <motion.div
              initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="w-24 h-24 sm:w-28 sm:h-28 mb-6 drop-shadow-2xl"
            >
              <img
                src="/assets/images/decorations/royal-seal.svg"
                alt="A & A Royal Seal"
                className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(212,175,55,0.35)]"
              />
            </motion.div>

            {/* Inscription */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xs sm:text-sm font-cinzel tracking-[0.3em] uppercase text-gold-400 mb-2"
            >
              || श्री गणेशाय नमः ||
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-2xl sm:text-4xl font-royal font-bold tracking-wider gold-text-shimmer mb-3"
            >
              Anshika &amp; Aman
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-sm sm:text-base font-cormorant italic tracking-widest text-gold-200/90 mb-8"
            >
              The Royal Engagement Invitation
            </motion.p>

            {/* Enter Invitation Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              onClick={onEnter}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full overflow-hidden bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 font-cinzel font-bold text-sm tracking-widest uppercase shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-navy-900 animate-pulse" />
                <span>Open Royal Invitation</span>
                <Music className="w-3.5 h-3.5 text-navy-900 opacity-80" />
              </span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-5 text-[11px] font-sans tracking-widest text-gold-300/70 uppercase"
            >
              Click to begin the cinematic experience
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

