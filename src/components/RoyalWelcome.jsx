import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitation';
import CornerOrnaments from './CornerOrnaments';
import GoldenDivider from './common/GoldenDivider';

export default function RoyalWelcome() {
  return (
    <section
      id="royal-welcome"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-radial-gradient from-[#1a0a14] via-[#0b0c1e] to-[#040711] text-ivory-100 px-4 py-20 overflow-hidden"
    >
      {/* Corner Ornaments */}
      <CornerOrnaments size="w-16 h-16 sm:w-24 sm:h-24" opacity="opacity-70" />

      {/* Background Palace Arch Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <img
          src="/assets/images/decorations/royal-arch.svg"
          alt=""
          className="w-[500px] sm:w-[650px] lg:w-[750px] h-auto object-contain"
        />
      </div>

      {/* Main Royal Welcome Parchment Card */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 max-w-2xl w-full mx-auto px-6 py-12 sm:px-12 sm:py-16 rounded-3xl royal-box-border text-center shadow-2xl"
      >
        {/* Ornate Top Seal Emblem */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto -mt-16 sm:-mt-20 mb-6 drop-shadow-xl"
        >
          <img
            src="/assets/images/decorations/royal-seal.svg"
            alt="Royal Crest"
            className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(212,175,55,0.4)]"
          />
        </motion.div>

        {/* Divine Invocation Line */}
        <p className="text-xs sm:text-sm font-cinzel tracking-[0.28em] uppercase text-gold-400 font-semibold mb-3">
          {INVITATION_DATA.welcome.blessing}
        </p>

        {/* Main Section Header */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-bold gold-text-shimmer tracking-wide mb-4">
          A Royal Celebration
        </h2>

        {/* Golden Floral Divider */}
        <GoldenDivider className="my-3 sm:my-5" width="w-40 sm:w-60" />

        {/* Emotional Quote */}
        <blockquote className="my-6">
          <p className="text-xl sm:text-2xl lg:text-3xl font-script text-gold-200 gold-glow leading-relaxed">
            "{INVITATION_DATA.welcome.quote}"
          </p>
        </blockquote>

        {/* Invitation Text */}
        <p className="text-sm sm:text-base font-cormorant leading-relaxed text-ivory-200/90 max-w-lg mx-auto tracking-wide mt-4">
          {INVITATION_DATA.welcome.invitationNote}
        </p>

        {/* Traditional Auspicious Muhurat Tag */}
        <div className="mt-8 pt-6 border-t border-gold-500/20 flex flex-wrap items-center justify-center gap-2 text-xs font-cinzel tracking-widest text-gold-400 uppercase">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>{INVITATION_DATA.event.muhuratNote}</span>
          <span className="hidden sm:inline mx-1">•</span>
          <span>{INVITATION_DATA.event.dateFormatted}</span>
        </div>
      </motion.div>
    </section>
  );
}

