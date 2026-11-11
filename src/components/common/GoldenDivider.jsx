import React from 'react';
import { motion } from 'framer-motion';

export default function GoldenDivider({ className = "my-4 sm:my-6", width = "w-48 sm:w-72" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.7 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={`mx-auto flex items-center justify-center ${className}`}
    >
      <img
        src="/assets/images/decorations/floral-divider.svg"
        alt=""
        className={`${width} h-auto object-contain pointer-events-none select-none`}
        aria-hidden="true"
      />
    </motion.div>
  );
}

