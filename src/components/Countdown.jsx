import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Bell, Sparkles } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitation';
import CornerOrnaments from './CornerOrnaments';
import GoldenDivider from './common/GoldenDivider';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const targetDate = new Date(INVITATION_DATA.event.isoDate).getTime();

    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: Math.max(0, days),
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
        isCompleted: false,
      });
    };

    calculateTimeRemaining();
    const timerInterval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // Generate Google Calendar Link
  const handleAddToCalendar = () => {
    // 22 Nov 2026 12:00 PM IST (GMT+5:30) is 20261122T063000Z
    const title = encodeURIComponent("Anshika & Aman - Royal Engagement Ceremony");
    const details = encodeURIComponent(
      `You are cordially invited to celebrate the Royal Engagement Ceremony of Anshika & Aman.\nVenue: ${INVITATION_DATA.venue.fullAddress}`
    );
    const location = encodeURIComponent(INVITATION_DATA.venue.fullAddress);
    const dates = "20261122T063000Z/20261122T113000Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;

    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  };

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      id="save-the-date"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-radial-gradient from-[#1b0810] via-[#080d21] to-[#040711] text-ivory-100 px-4 py-20 overflow-hidden"
    >
      <CornerOrnaments size="w-16 h-16 sm:w-24 sm:h-24" opacity="opacity-70" />

      {/* Decorative Palace Arch Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
        <img
          src="/assets/images/decorations/royal-arch.svg"
          alt=""
          className="w-[700px] h-auto object-contain"
        />
      </div>

      <div className="relative z-20 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Save The Date Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-2"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs sm:text-sm font-cinzel tracking-[0.35em] uppercase text-gold-400 font-semibold">
            Mark Your Calendar
          </span>
          <Sparkles className="w-4 h-4 text-gold-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-royal font-bold gold-text-shimmer tracking-wider mb-4"
        >
          SAVE THE DATE
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 my-4 text-gold-200"
        >
          <div className="flex items-center gap-2 text-base sm:text-lg font-cinzel tracking-wider">
            <Calendar className="w-5 h-5 text-gold-400" />
            <span>{INVITATION_DATA.event.dateFormatted}</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gold-400" />
          <div className="flex items-center gap-2 text-base sm:text-lg font-cinzel tracking-wider">
            <Clock className="w-5 h-5 text-gold-400" />
            <span>{INVITATION_DATA.event.timeFormatted}</span>
          </div>
        </motion.div>

        <GoldenDivider className="my-4 sm:my-6" width="w-44 sm:w-64" />

        {/* Live Countdown Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 my-8"
        >
          {timeBlocks.map((block, idx) => (
            <div
              key={block.label}
              className="relative p-5 sm:p-6 rounded-2xl royal-box-border text-center overflow-hidden group hover:border-gold-400 transition-all duration-300 shadow-xl"
            >
              {/* Inner glowing corner dot */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gold-400/60" />

              <div className="text-3xl sm:text-5xl font-royal font-bold gold-gradient-text tracking-wider leading-none mb-2">
                {String(block.value).padStart(2, '0')}
              </div>

              <div className="text-[11px] sm:text-xs font-cinzel uppercase tracking-[0.2em] text-gold-300/80 font-medium">
                {block.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Celebration in progress note if 0 */}
        {timeLeft.isCompleted && (
          <div className="mb-6 px-6 py-2 rounded-full bg-gold-500/20 border border-gold-400 text-gold-300 text-sm font-cinzel">
            The auspicious ceremony has commenced! Har Har Mahadev!
          </div>
        )}

        {/* Action Button: Add to Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={handleAddToCalendar}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-gold-400/70 bg-navy-900/90 hover:bg-gold-500 text-gold-300 hover:text-navy-950 font-cinzel font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-gold-500/30"
          >
            <Bell className="w-4 h-4 text-gold-400 group-hover:text-navy-950 transition-colors" />
            <span>Add to Google Calendar</span>
          </button>
        </motion.div>

        <p className="mt-6 text-xs font-cormorant italic text-gold-300/70">
          "Counting every fleeting second until we celebrate together."
        </p>

        <GoldenDivider className="my-10" width="w-48 sm:w-72" />

      </div>
    </section>
  );
}

