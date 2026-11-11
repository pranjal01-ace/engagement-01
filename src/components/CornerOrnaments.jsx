import React from 'react';
import { motion } from 'framer-motion';

// Royal Palace Decorative Filigree Corner Borders for Anshika & Aman Invitation
// Properly frames each section: "opens" at the top corners, and "closes" at the bottom corners.
export default function CornerOrnaments({ size = "w-16 h-16 sm:w-24 sm:h-24", opacity = "opacity-75" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      {/* Top Left - Opens the section from top-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`absolute top-2 left-2 sm:top-3 sm:left-3 ${size} ${opacity} pointer-events-none`}
      >
        <img
          src="/assets/images/decorations/corner-ornament.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Top Right - Opens the section from top-right (horizontally flipped) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.08, ease: "easeOut" }}
        className={`absolute top-2 right-2 sm:top-3 sm:right-3 ${size} ${opacity} pointer-events-none`}
      >
        <img
          src="/assets/images/decorations/corner-ornament.svg"
          alt=""
          className="w-full h-full object-contain"
          style={{ transform: 'scaleX(-1)' }}
        />
      </motion.div>

      {/* Bottom Left - Closes the section at bottom-left (vertically flipped) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.16, ease: "easeOut" }}
        className={`absolute bottom-2 left-2 sm:bottom-3 sm:left-3 ${size} ${opacity} pointer-events-none`}
      >
        <img
          src="/assets/images/decorations/corner-ornament.svg"
          alt=""
          className="w-full h-full object-contain"
          style={{ transform: 'scaleY(-1)' }}
        />
      </motion.div>

      {/* Bottom Right - Closes the section at bottom-right (horizontally & vertically flipped) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.24, ease: "easeOut" }}
        className={`absolute bottom-2 right-2 sm:bottom-3 sm:right-3 ${size} ${opacity} pointer-events-none`}
      >
        <img
          src="/assets/images/decorations/corner-ornament.svg"
          alt=""
          className="w-full h-full object-contain"
          style={{ transform: 'scale(-1, -1)' }}
        />
      </motion.div>
    </div>
  );
}


