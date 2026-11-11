import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export default function AutoScrollControl({ isEntered }) {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [isExplicitlyPaused, setIsExplicitlyPaused] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const isAutoScrollingRef = useRef(false);
  const isExplicitlyPausedRef = useRef(false);
  const isAtEndRef = useRef(false);
  const lastTimeRef = useRef(null);
  const animationFrameRef = useRef(null);
  const autoResumeTimerRef = useRef(null);
  const enterTimeRef = useRef(0);

  // Fast, cinematic video scroll speed: 140px/sec base speed
  const SCROLL_SPEED = 140;

  // Sync refs with state
  useEffect(() => {
    isAutoScrollingRef.current = isAutoScrolling;
  }, [isAutoScrolling]);

  useEffect(() => {
    isExplicitlyPausedRef.current = isExplicitlyPaused;
  }, [isExplicitlyPaused]);

  useEffect(() => {
    isAtEndRef.current = isAtEnd;
  }, [isAtEnd]);

  // Start video-scroll automatically when user clicks "Open Royal Invitation"
  useEffect(() => {
    if (isEntered) {
      enterTimeRef.current = Date.now();
      setIsAtEnd(false);
      isAtEndRef.current = false;
      setIsExplicitlyPaused(false);

      // Start scrolling immediately as the curtain opens (after 500ms)
      const startTimer = setTimeout(() => {
        lastTimeRef.current = performance.now();
        setIsAutoScrolling(true);
      }, 500);

      return () => clearTimeout(startTimer);
    }
  }, [isEntered]);

  // Main 60fps / 120fps video-scroll playback loop
  useEffect(() => {
    const scrollLoop = (currentTime) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }
      const deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const currentScrollY = window.scrollY;

      // Update video progress percentage (0 - 100%)
      const progress = Math.min(100, Math.max(0, (currentScrollY / maxScroll) * 100));
      setScrollProgress(progress);

      // Perform frame-by-frame instantaneous scroll
      if (isAutoScrollingRef.current && deltaTime > 0 && deltaTime < 0.1) {
        if (currentScrollY >= maxScroll - 4) {
          // Reached the end of the invitation video
          setIsAutoScrolling(false);
          isAutoScrollingRef.current = false;
          setIsAtEnd(true);
        } else {
          const nextY = currentScrollY + SCROLL_SPEED * deltaTime;
          window.scrollTo(0, nextY);
        }
      }

      animationFrameRef.current = requestAnimationFrame(scrollLoop);
    };

    animationFrameRef.current = requestAnimationFrame(scrollLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Handle manual user interactions (wheel / touch)
  useEffect(() => {
    const handleUserInteraction = () => {
      // Ignore interactions during the first 1.8 seconds of entering to prevent the button click from pausing
      if (Date.now() - enterTimeRef.current < 1800) {
        return;
      }

      if (isAutoScrollingRef.current) {
        setIsAutoScrolling(false);
      }

      // Auto-resume video after 2.5 seconds of idle, unless explicitly paused
      if (!isExplicitlyPausedRef.current && !isAtEndRef.current) {
        if (autoResumeTimerRef.current) {
          clearTimeout(autoResumeTimerRef.current);
        }
        autoResumeTimerRef.current = setTimeout(() => {
          if (!isExplicitlyPausedRef.current && !isAtEndRef.current) {
            lastTimeRef.current = performance.now();
            setIsAutoScrolling(true);
          }
        }, 2500);
      }
    };

    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      if (autoResumeTimerRef.current) {
        clearTimeout(autoResumeTimerRef.current);
      }
    };
  }, []);

  const toggleAutoScroll = () => {
    lastTimeRef.current = performance.now();
    if (autoResumeTimerRef.current) {
      clearTimeout(autoResumeTimerRef.current);
    }

    if (isAtEnd) {
      // Replay from top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsAtEnd(false);
      setIsExplicitlyPaused(false);
      setTimeout(() => {
        lastTimeRef.current = performance.now();
        setIsAutoScrolling(true);
      }, 700);
    } else if (isAutoScrolling) {
      // Pause
      setIsAutoScrolling(false);
      setIsExplicitlyPaused(true);
    } else {
      // Play
      setIsExplicitlyPaused(false);
      setIsAutoScrolling(true);
    }
  };

  return (
    <>
      {/* Top Video Progress Scrubber Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-black/40 backdrop-blur-xs pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-gold-600 via-gold-300 to-gold-500 shadow-[0_0_12px_rgba(212,175,55,0.9)] transition-[width] duration-100 ease-linear"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Compact Circular Auto-Scroll Button (Top-Left) */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={toggleAutoScroll}
          className={`group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border transition-all duration-300 shadow-xl backdrop-blur-md ${
            isAutoScrolling
              ? 'bg-navy-900/90 border-gold-400 text-gold-300 shadow-gold-500/30 ring-1 ring-gold-400/50'
              : 'bg-navy-950/85 border-gold-600/40 text-ivory-200 hover:border-gold-400 hover:text-gold-300'
          }`}
          aria-label={isAtEnd ? 'Replay film from beginning' : isAutoScrolling ? 'Pause auto scroll' : 'Play auto scroll'}
          title={isAtEnd ? 'Replay Film' : isAutoScrolling ? 'Pause Film' : 'Play Film'}
        >
          {isAtEnd ? (
            <RotateCcw className="w-4 h-4 text-gold-300" />
          ) : isAutoScrolling ? (
            <Pause className="w-4 h-4 text-gold-300 fill-gold-300" />
          ) : (
            <Play className="w-4 h-4 text-gold-400 fill-gold-400 ml-0.5" />
          )}

          {/* Active playing indicator glow */}
          {isAutoScrolling && (
            <span className="absolute inset-0 rounded-full bg-gold-400/15 animate-ping pointer-events-none" />
          )}
        </button>
      </div>
    </>
  );
}





