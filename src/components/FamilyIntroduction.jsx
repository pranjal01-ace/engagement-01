import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitation';
import CornerOrnaments from './CornerOrnaments';
import GoldenDivider from './common/GoldenDivider';

export default function FamilyIntroduction() {
  const brideFamilyData = INVITATION_DATA.families.brideFamily;
  const groomFamilyData = INVITATION_DATA.families.groomFamily;

  return (
    <section
      id="family-intro"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-radial-gradient from-[#220710] via-[#090E22] to-[#040711] text-ivory-100 px-4 py-20 overflow-hidden"
    >
      <CornerOrnaments size="w-16 h-16 sm:w-24 sm:h-24" opacity="opacity-70" />

      {/* Decorative Palace Arch Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <img
          src="/assets/images/decorations/mandala.svg"
          alt=""
          className="w-[800px] h-[800px] object-contain animate-spin-slow"
        />
      </div>

      <div className="relative z-20 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-2"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs sm:text-sm font-cinzel tracking-[0.28em] uppercase text-gold-400 font-semibold">
            Honored Lineage &amp; Heritage
          </span>
          <Sparkles className="w-4 h-4 text-gold-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-royal font-bold gold-text-shimmer tracking-wide mb-3"
        >
          The Families
        </motion.h2>

        <p className="text-sm sm:text-base font-cormorant italic text-gold-200/90 max-w-lg mx-auto mb-10">
          United by tradition, bound by affection, and blessed by generations of love.
        </p>

        {/* Two Families Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
          
          {/* BRIDE'S FAMILY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative rounded-3xl royal-maroon-box p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden group hover:border-gold-400/70 transition-all duration-500"
          >
            {/* Top Ornate Banner */}
            <div className="flex items-center justify-between pb-4 border-b border-gold-500/20 mb-6">
              <div>
                <span className="text-[11px] font-cinzel uppercase tracking-[0.22em] text-gold-400 block font-semibold">
                  Bride's Family
                </span>
                <h3 className="text-xl sm:text-2xl font-royal font-bold gold-gradient-text tracking-wide mt-1">
                  {brideFamilyData.name}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-maroon-900/60 flex items-center justify-center text-gold-300">
                <Heart className="w-4 h-4 text-gold-400 fill-gold-400/30" />
              </div>
            </div>

            {/* Actual Bride Family Portrait Frame */}
            <div className="w-full h-52 sm:h-64 rounded-2xl overflow-hidden bg-maroon-950/80 border-2 border-gold-400/40 mb-6 relative shadow-lg">
              <img
                src={brideFamilyData.photo}
                alt="Bride Family - Santosh Kumar, Anju Kashyap & Anshika"
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-4 right-4 text-center">
                <span className="text-[11px] font-cinzel uppercase tracking-widest text-gold-300 font-semibold drop-shadow">
                  With Infinite Blessings &amp; Affection
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 text-center py-2">
              <p className="text-xl sm:text-2xl font-royal font-bold text-gold-200">
                {INVITATION_DATA.bride.fullName}
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-gold-400/40" />
                <span className="text-xs font-cormorant italic text-gold-300/80">Daughter of</span>
                <div className="w-8 h-px bg-gold-400/40" />
              </div>

              <div className="space-y-1">
                <p className="text-base sm:text-lg font-cinzel font-semibold text-ivory-100">
                  Shri {brideFamilyData.father}
                </p>
                <p className="text-xs font-cinzel text-gold-400/80 uppercase tracking-widest">and</p>
                <p className="text-base sm:text-lg font-cinzel font-semibold text-ivory-100">
                  Smt. {brideFamilyData.mother}
                </p>
              </div>
            </div>

            {/* Traditional Blessing Tag */}
            <div className="mt-6 pt-4 border-t border-gold-500/20 text-center">
              <p className="text-xs font-cormorant italic text-gold-300/90">
                "May our beloved daughter embark upon this sacred union surrounded by endless love and divine grace."
              </p>
            </div>
          </motion.div>

          {/* GROOM'S FAMILY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative rounded-3xl royal-box-border p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden group hover:border-gold-400/70 transition-all duration-500"
          >
            {/* Top Ornate Banner */}
            <div className="flex items-center justify-between pb-4 border-b border-gold-500/20 mb-6">
              <div>
                <span className="text-[11px] font-cinzel uppercase tracking-[0.22em] text-gold-400 block font-semibold">
                  Groom's Family
                </span>
                <h3 className="text-xl sm:text-2xl font-royal font-bold gold-gradient-text tracking-wide mt-1">
                  {groomFamilyData.name}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-navy-900/60 flex items-center justify-center text-gold-300">
                <Users className="w-4 h-4 text-gold-400" />
              </div>
            </div>

            {/* Actual Groom Family Portrait Frame */}
            <div className="w-full h-52 sm:h-64 rounded-2xl overflow-hidden bg-navy-950/80 border-2 border-gold-400/40 mb-6 relative shadow-lg">
              <img
                src={groomFamilyData.photo}
                alt="Groom Family - Dildaar Singh, Mithlesh Devi & Aman"
                className="w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-4 right-4 text-center">
                <span className="text-[11px] font-cinzel uppercase tracking-widest text-gold-300 font-semibold drop-shadow">
                  With Infinite Blessings &amp; Affection
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 text-center py-2">
              <p className="text-xl sm:text-2xl font-royal font-bold text-gold-200">
                {INVITATION_DATA.groom.fullName}
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-gold-400/40" />
                <span className="text-xs font-cormorant italic text-gold-300/80">Son of</span>
                <div className="w-8 h-px bg-gold-400/40" />
              </div>

              <div className="space-y-1">
                <p className="text-base sm:text-lg font-cinzel font-semibold text-ivory-100">
                  Shri {groomFamilyData.father}
                </p>
                <p className="text-xs font-cinzel text-gold-400/80 uppercase tracking-widest">and</p>
                <p className="text-base sm:text-lg font-cinzel font-semibold text-ivory-100">
                  Smt. {groomFamilyData.mother}
                </p>
              </div>
            </div>

            {/* Traditional Blessing Tag */}
            <div className="mt-6 pt-4 border-t border-gold-500/20 text-center">
              <p className="text-xs font-cormorant italic text-gold-300/90">
                "Welcoming Anshika into our home and hearts as our cherished daughter with boundless happiness."
              </p>
            </div>
          </motion.div>

        </div>

        <GoldenDivider className="my-10" width="w-48 sm:w-72" />

      </div>
    </section>
  );
}
