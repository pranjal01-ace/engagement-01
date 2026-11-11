import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  currentImage,
  currentIndex,
  totalImages,
  onClose,
  onPrev,
  onNext
}) {
  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-navy-900/80 border border-gold-400/40 text-gold-300 hover:text-white hover:bg-gold-500/20 transition-all duration-300"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Counter Badge */}
        <div className="absolute top-5 left-5 z-50 px-4 py-1.5 rounded-full bg-navy-900/80 border border-gold-400/30 text-gold-300 text-xs font-cinzel tracking-widest">
          {currentIndex + 1} / {totalImages}
        </div>

        {/* Prev Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-navy-900/70 border border-gold-400/40 text-gold-300 hover:text-white hover:bg-gold-500/20 transition-all duration-300 focus:outline-none"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-navy-900/70 border border-gold-400/40 text-gold-300 hover:text-white hover:bg-gold-500/20 transition-all duration-300 focus:outline-none"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Stage Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
        >
          <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400/60 shadow-[0_0_50px_rgba(212,175,55,0.3)] bg-navy-950 p-1">
            <img
              src={currentImage.image}
              alt={currentImage.title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <h4 className="text-lg sm:text-xl font-royal font-bold gold-gradient-text tracking-wide">
              {currentImage.title}
            </h4>
            <p className="text-xs sm:text-sm font-cormorant italic text-gold-200/80">
              {currentImage.subtitle}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

