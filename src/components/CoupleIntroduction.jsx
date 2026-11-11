import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Image as ImageIcon } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitation';
import CornerOrnaments from './CornerOrnaments';
import GoldenDivider from './common/GoldenDivider';

export default function CoupleIntroduction({ onOpenGallery }) {
  const [brideIndex, setBrideIndex] = useState(0);
  const [groomIndex, setGroomIndex] = useState(0);

  const bridePhotos = INVITATION_DATA.bride.images;
  const groomPhotos = INVITATION_DATA.groom.images;

  return (
    <section
      id="couple-intro"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-radial-gradient from-navy-850 via-navy-900 to-navy-950 text-ivory-100 px-4 py-20 overflow-hidden"
    >
      <CornerOrnaments size="w-16 h-16 sm:w-24 sm:h-24" opacity="opacity-70" />

      {/* Decorative Rotating Mandala Behind Couple */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
        <img
          src="/assets/images/decorations/mandala.svg"
          alt=""
          className="w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] object-contain animate-spin-slow"
        />
      </div>

      <div className="relative z-20 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Subtitle / Ceremony Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-2"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs sm:text-sm font-cinzel tracking-[0.3em] uppercase text-gold-400 font-semibold">
            {INVITATION_DATA.celebrationTitle}
          </span>
          <Sparkles className="w-4 h-4 text-gold-400" />
        </motion.div>

        {/* Cinematic Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-royal font-bold gold-text-shimmer tracking-wide mb-3"
        >
          The Royal Couple
        </motion.h2>

        <p className="text-sm sm:text-base font-cormorant italic text-gold-200/90 max-w-md mx-auto mb-8">
          Two souls destined by divine grace, stepping into forever together.
        </p>

        {/* Couple Showcase Layout: Anshika First, Aman Second */}
        <div className="w-full grid grid-cols-1 md:grid-cols-11 gap-6 lg:gap-8 items-center mt-4">
          
          {/* BRIDE CARD (Anshika) - FIRST */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="md:col-span-5 flex flex-col items-center"
          >
            <div className="group relative w-64 sm:w-72 lg:w-80 aspect-[3/4] rounded-3xl p-2.5 bg-gradient-to-b from-maroon-700/60 via-gold-500/20 to-gold-400/40 shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(212,175,55,0.25)]">
              {/* Inner Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-navy-950 relative border-2 border-gold-400/60">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={bridePhotos[brideIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    src={bridePhotos[brideIndex]}
                    alt={INVITATION_DATA.bride.fullName}
                    className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="text-[11px] font-cinzel uppercase tracking-[0.25em] text-gold-300 font-semibold drop-shadow">
                    {INVITATION_DATA.bride.tagline}
                  </span>
                </div>

                {/* Photo Switcher Dots */}
                {bridePhotos.length > 1 && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10 bg-navy-950/70 px-2 py-1 rounded-full border border-gold-400/30 backdrop-blur-sm">
                    {bridePhotos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setBrideIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          brideIndex === i ? 'bg-gold-400 w-4' : 'bg-gold-500/40 hover:bg-gold-400'
                        }`}
                        aria-label={`View Bride photo ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bride Name Reveal */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-royal font-bold gold-gradient-text tracking-wider"
            >
              {INVITATION_DATA.bride.fullName}
            </motion.h3>

            <p className="text-xs sm:text-sm font-cormorant text-ivory-300/90 tracking-wide mt-1">
              {INVITATION_DATA.bride.parents.description}
            </p>
          </motion.div>

          {/* CENTER DIVIDER / AMPERSAND */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="md:col-span-1 flex flex-col items-center justify-center my-4 md:my-0"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gold-400/70 bg-navy-900/95 flex items-center justify-center shadow-lg shadow-gold-500/25 backdrop-blur-md">
              <span className="font-script text-3xl sm:text-4xl text-gold-300 leading-none pt-1">
                &amp;
              </span>
            </div>
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-gold-400/60 to-transparent mt-2" />
          </motion.div>

          {/* GROOM CARD (Aman) - SECOND */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.4 }}
            className="md:col-span-5 flex flex-col items-center"
          >
            <div className="group relative w-64 sm:w-72 lg:w-80 aspect-[3/4] rounded-3xl p-2.5 bg-gradient-to-b from-gold-400/50 via-gold-500/20 to-gold-400/40 shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(212,175,55,0.25)]">
              {/* Inner Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-navy-950 relative border-2 border-gold-400/60">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={groomPhotos[groomIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    src={groomPhotos[groomIndex]}
                    alt={INVITATION_DATA.groom.fullName}
                    className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
                  />
                </AnimatePresence>

                {/* Subtle Inner Gradient & Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="text-[11px] font-cinzel uppercase tracking-[0.25em] text-gold-300 font-semibold drop-shadow">
                    {INVITATION_DATA.groom.tagline}
                  </span>
                </div>

                {/* Photo Switcher Dots */}
                {groomPhotos.length > 1 && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10 bg-navy-950/70 px-2 py-1 rounded-full border border-gold-400/30 backdrop-blur-sm">
                    {groomPhotos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setGroomIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          groomIndex === i ? 'bg-gold-400 w-4' : 'bg-gold-500/40 hover:bg-gold-400'
                        }`}
                        aria-label={`View Groom photo ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Groom Name Reveal */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-royal font-bold gold-gradient-text tracking-wider"
            >
              {INVITATION_DATA.groom.fullName}
            </motion.h3>

            <p className="text-xs sm:text-sm font-cormorant text-ivory-300/90 tracking-wide mt-1">
              {INVITATION_DATA.groom.parents.description}
            </p>
          </motion.div>

        </div>

        {/* Featured Couple Photo Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 w-full max-w-2xl p-4 sm:p-5 rounded-3xl royal-box-border flex flex-col sm:flex-row items-center gap-5 shadow-2xl hover:border-gold-400/70 transition-all duration-300"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-gold-400/60 flex-shrink-0 shadow-lg">
            <img
              src={INVITATION_DATA.couple.portraitPhoto}
              alt="Anshika & Aman Together"
              className="w-full h-full object-cover object-[center_20%]"
            />
          </div>
          <div className="text-center sm:text-left flex-1">
            <span className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-gold-400 block font-semibold mb-0.5">
              Cherished Harmony
            </span>
            <h4 className="text-lg sm:text-xl font-royal font-bold text-ivory-100">
              Anshika &amp; Aman
            </h4>
            <p className="text-xs sm:text-sm font-cormorant italic text-gold-200/80 mt-1">
              "When two souls are destined to meet, the entire universe conspires to bring them together in love."
            </p>
          </div>
        </motion.div>

        {/* Golden Divider */}
        <GoldenDivider className="my-10" width="w-48 sm:w-72" />

      </div>
    </section>
  );
}
