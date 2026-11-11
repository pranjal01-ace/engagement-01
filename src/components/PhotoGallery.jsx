import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ZoomIn, Image as ImageIcon } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitation';
import CornerOrnaments from './CornerOrnaments';
import GoldenDivider from './common/GoldenDivider';
import LightboxModal from './LightboxModal';

const CATEGORIES = [
  { id: 'all', label: 'All Photographs' },
  { id: 'couple', label: 'Couple' },
  { id: 'bride', label: 'Bride' },
  { id: 'groom', label: 'Groom' },
  { id: 'family', label: 'Families' },
];

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  // Track image fallback errors locally to preserve high visual quality
  const [imgFallbacks, setImgFallbacks] = useState({});

  const handleImageError = (id, category) => {
    setImgFallbacks((prev) => ({
      ...prev,
      [id]: `/assets/images/${category}/${id}.svg`,
    }));
  };

  const filteredItems = INVITATION_DATA.gallery.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setLightboxIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="photo-gallery"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-radial-gradient from-navy-850 via-navy-900 to-navy-950 text-ivory-100 px-4 py-20 overflow-hidden"
    >
      <CornerOrnaments size="w-16 h-16 sm:w-24 sm:h-24" opacity="opacity-70" />

      {/* Decorative Rotating Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <img
          src="/assets/images/decorations/mandala.svg"
          alt=""
          className="w-[850px] h-[850px] object-contain animate-spin-slow"
        />
      </div>

      <div className="relative z-20 max-w-6xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-2"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs sm:text-sm font-cinzel tracking-[0.28em] uppercase text-gold-400 font-semibold">
            Visual Chronicles
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
          Cherished Moments
        </motion.h2>

        <p className="text-sm sm:text-base font-cormorant italic text-gold-200/90 max-w-lg mx-auto mb-8">
          A glimpse into the joy, grace, and timeless milestones of Aman &amp; Anshika.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 font-bold shadow-lg shadow-gold-500/25 scale-105'
                    : 'bg-navy-900/80 border border-gold-500/30 text-gold-200/80 hover:border-gold-400 hover:text-gold-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const currentSrc = imgFallbacks[item.id] || item.image;
              const isPortrait = item.aspectRatio === 'portrait';
              const positionClass = item.objectPosition || (isPortrait ? 'object-[center_15%]' : 'object-center');

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="group relative cursor-pointer rounded-2xl p-2 bg-gradient-to-b from-gold-400/35 via-gold-500/10 to-gold-400/25 border border-gold-400/40 shadow-xl overflow-hidden hover:border-gold-300 transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Photo Container */}
                  <div
                    className={`w-full overflow-hidden rounded-xl bg-navy-950 relative ${
                      isPortrait ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={currentSrc}
                      alt={item.title}
                      loading="lazy"
                      onError={() => handleImageError(item.id, item.category)}
                      className={`w-full h-full object-cover ${positionClass} transition-transform duration-700 group-hover:scale-108`}
                    />

                    {/* Gradient overlay & hover details */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Hover Zoom Icon */}
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-navy-900/80 border border-gold-400/50 text-gold-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                    </div>

                    {/* Photo Caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-gold-400 block font-semibold mb-0.5">
                        {item.subtitle}
                      </span>
                      <h4 className="text-base sm:text-lg font-royal font-bold text-ivory-100 group-hover:text-gold-200 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Note */}
        <p className="mt-8 text-xs font-cormorant italic text-gold-300/70">
          Photographs can be viewed in full screen by clicking on any frame.
        </p>

        <GoldenDivider className="my-10" width="w-48 sm:w-72" />

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        currentImage={
          lightboxIndex !== null
            ? {
                ...filteredItems[lightboxIndex],
                image:
                  imgFallbacks[filteredItems[lightboxIndex].id] ||
                  filteredItems[lightboxIndex].image,
              }
            : null
        }
        currentIndex={lightboxIndex || 0}
        totalImages={filteredItems.length}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
