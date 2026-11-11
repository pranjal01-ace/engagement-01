import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitation';
import CornerOrnaments from './CornerOrnaments';
import GoldenDivider from './common/GoldenDivider';

export default function VenueSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(INVITATION_DATA.venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenDirections = () => {
    window.open(INVITATION_DATA.venue.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="venue-section"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-radial-gradient from-navy-850 via-navy-900 to-navy-950 text-ivory-100 px-4 py-20 overflow-hidden"
    >
      <CornerOrnaments size="w-16 h-16 sm:w-24 sm:h-24" opacity="opacity-70" />

      {/* Background Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <img
          src="/assets/images/decorations/mandala.svg"
          alt=""
          className="w-[850px] h-[850px] object-contain animate-spin-slow"
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
            The Auspicious Destination
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
          Join Us for the Celebration
        </motion.h2>

        <p className="text-sm sm:text-base font-cormorant italic text-gold-200/90 max-w-lg mx-auto mb-10">
          We eagerly await your presence to grace our celebration with warmth and joy.
        </p>

        {/* Venue Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          
          {/* VENUE DETAILS COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl royal-box-border text-left shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-400/40 flex items-center justify-center text-gold-300">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <span className="text-[11px] font-cinzel uppercase tracking-widest text-gold-400 block font-semibold">
                    Venue Location
                  </span>
                  <h3 className="text-lg sm:text-xl font-royal font-bold text-ivory-100">
                    {INVITATION_DATA.venue.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 mt-6 text-sm sm:text-base font-cormorant text-ivory-200/90 leading-relaxed pl-2 border-l-2 border-gold-400/50">
                <p className="font-semibold text-gold-300">
                  {INVITATION_DATA.venue.addressLine1}
                </p>
                <p>{INVITATION_DATA.venue.addressLine2}</p>
                <p>
                  {INVITATION_DATA.venue.city}, {INVITATION_DATA.venue.state} – {INVITATION_DATA.venue.pincode}
                </p>
                <p className="text-xs font-sans text-gold-300/80 tracking-wider uppercase pt-1">
                  {INVITATION_DATA.venue.country}
                </p>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-navy-950/70 border border-gold-500/20 text-xs font-sans space-y-1">
                <p className="text-gold-300 font-semibold font-cinzel tracking-wider uppercase">
                  Time &amp; Muhurat
                </p>
                <p className="text-ivory-200">
                  Sunday, 22 November 2026 at 12:00 PM (Noon)
                </p>
                <p className="text-[11px] text-gold-400/80 italic font-cormorant">
                  Lunch &amp; Ring Ceremony to follow auspiciously
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gold-500/20 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleOpenDirections}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 font-cinzel font-bold text-xs tracking-wider uppercase shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-[1.02] transition-all"
              >
                <Navigation className="w-4 h-4 fill-navy-950" />
                <span>Get Directions</span>
              </button>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-navy-900/80 border border-gold-400/50 hover:border-gold-300 text-gold-300 text-xs font-cinzel tracking-wider uppercase transition-all"
                title="Copy Full Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* EMBEDDED MAP COLUMN */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden royal-box-border shadow-2xl relative min-h-[340px] sm:min-h-[420px]">
            {/* Map Frame Header */}
            <div className="p-3.5 bg-navy-950/80 border-b border-gold-500/20 flex items-center justify-between text-xs font-cinzel tracking-wider text-gold-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Google Maps Location Preview</span>
              </div>
              <a
                href={INVITATION_DATA.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-200 transition-colors"
              >
                <span>Open in App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map iframe using standard search embed */}
            <div className="relative flex-1 w-full h-full min-h-[300px]">
              <iframe
                title="Venue Location - M.G. Polytechnic College, Hathras"
                src={`https://maps.google.com/maps?q=Gate+No.+2+MG+Polytechnic+College+Agra+Road+Hathras+Uttar+Pradesh+204101&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[0.85] hue-rotate-180 contrast-125"
              />
            </div>
          </div>

        </motion.div>

        <GoldenDivider className="my-10" width="w-48 sm:w-72" />

      </div>
    </section>
  );
}

