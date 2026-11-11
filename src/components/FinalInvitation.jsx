import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Share2, ArrowUp, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { INVITATION_DATA } from '../data/invitation';
import CornerOrnaments from './CornerOrnaments';
import GoldenDivider from './common/GoldenDivider';

export default function FinalInvitation({ onBackToTop }) {
  // Trigger royal golden confetti celebration
  const triggerRoyalCelebration = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    // Golden and royal rose petals palette
    const colors = ['#D4AF37', '#FFF3B0', '#AA7A1E', '#E5C158', '#E53935'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `✨ Royal Engagement Invitation ✨\n\nWith the divine blessings of Shri Ganesh Ji, you are cordially invited to celebrate the Engagement Ceremony of:\n\n💍 Anshika & Aman 💍\n\n📅 Date: Sunday, 22 November 2026\n⏰ Time: 12:00 PM (Noon)\n📍 Venue: Gate No. 2 ke samne, M.G. Polytechnic College, Agra Road, Hathras (U.P.)\n\nView the Royal Invitation website here:\n${window.location.origin}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section
      id="final-invitation"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-radial-gradient from-[#28050e] via-[#0b0f24] to-[#040711] text-ivory-100 px-4 py-20 overflow-hidden"
    >
      <CornerOrnaments size="w-20 h-20 sm:w-28 sm:h-28" opacity="opacity-80" />

      {/* Decorative Rotating Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <img
          src="/assets/images/decorations/mandala.svg"
          alt=""
          className="w-[850px] h-[850px] object-contain animate-spin-slow"
        />
      </div>

      <div className="relative z-20 max-w-3xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Royal Wax Seal */}
        <motion.div
          initial={{ scale: 0, rotate: -25 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-20 h-20 sm:w-24 sm:h-24 mb-6 drop-shadow-2xl"
        >
          <img
            src="/assets/images/decorations/royal-seal.svg"
            alt="Royal Seal"
            className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(212,175,55,0.4)]"
          />
        </motion.div>

        {/* Closing Inscription */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm font-cinzel tracking-[0.3em] uppercase text-gold-400 font-semibold mb-3"
        >
          {INVITATION_DATA.finalInvitation.closingHeading}
        </motion.p>

        {/* Main Emotional Message */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-royal font-bold gold-text-shimmer tracking-wide leading-snug mb-4 px-2"
        >
          "{INVITATION_DATA.finalInvitation.mainMessage}"
        </motion.h2>

        <GoldenDivider className="my-4 sm:my-6" width="w-44 sm:w-64" />

        {/* Blessings & Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-4 my-6"
        >
          <p className="text-sm sm:text-base font-cormorant italic text-gold-200">
            {INVITATION_DATA.finalInvitation.blessingNote}
          </p>

          <h3 className="text-3xl sm:text-5xl font-royal font-bold gold-gradient-text tracking-widest drop-shadow-md">
            {INVITATION_DATA.finalInvitation.signature}
          </h3>

          <p className="text-xs sm:text-sm font-cinzel uppercase tracking-[0.22em] text-gold-400/90 font-medium">
            Together with {INVITATION_DATA.finalInvitation.rsvpFamilies}
          </p>
        </motion.div>

        {/* Parting Greeting */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl font-script text-gold-200 gold-glow my-3"
        >
          {INVITATION_DATA.finalInvitation.partingWord}
        </motion.p>

        {/* Action Buttons: Shower Blessings & WhatsApp Share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={triggerRoyalCelebration}
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 font-cinzel font-bold text-xs sm:text-sm tracking-widest uppercase shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 fill-navy-950" />
            <span>Shower Royal Blessings</span>
          </button>

          <button
            onClick={handleShareWhatsApp}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-navy-900/90 border border-gold-400/60 hover:border-gold-300 text-gold-300 hover:text-white font-cinzel font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-gold-500/20"
          >
            <Share2 className="w-4 h-4 text-emerald-400" />
            <span>Share on WhatsApp</span>
          </button>
        </motion.div>

        {/* Back To Top */}
        <div className="mt-14 pt-8 border-t border-gold-500/20 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-cormorant text-ivory-300/60 gap-4">
          <p>© 2026 Anshika &amp; Aman. All rights reserved.</p>

          <button
            onClick={onBackToTop}
            className="group flex items-center gap-1.5 text-gold-400/80 hover:text-gold-200 transition-colors uppercase font-cinzel tracking-wider text-[11px]"
          >
            <span>Back to Invocation</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}

