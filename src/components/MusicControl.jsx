import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitation';

export default function MusicControl({ autoStartRequested = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [audioSourceType, setAudioSourceType] = useState('file'); // 'file' or 'synth'
  
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const synthNodesRef = useRef([]);

  // Synthesize celestial Indian classical tanpura drone via Web Audio API if file is unavailable
  const startProceduralTanpura = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return false;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Stop previous synth if any
      stopProceduralTanpura();

      // Frequencies for a classical Indian tanpura in C# (Sa = 138.59 Hz, Pa = 207.65 Hz)
      const rootSa = 138.59;
      const fifthPa = 207.65;
      const octSa = 277.18;
      const pitches = [fifthPa, octSa, octSa, rootSa];

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);

      synthNodesRef.current = [masterGain];

      pitches.forEach((freq, idx) => {
        const osc = ctx.createGain();
        const subOsc = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();

        // Subtle gentle tremolo
        lfo.frequency.value = 0.2 + idx * 0.08;
        lfoGain.gain.value = 0.08;
        lfo.connect(lfoGain.gain);

        subOsc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        subOsc.frequency.value = freq;

        const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        if (panner) {
          panner.pan.value = (idx - 1.5) * 0.35;
          subOsc.connect(panner);
          panner.connect(masterGain);
        } else {
          subOsc.connect(masterGain);
        }

        subOsc.start();
        lfo.start();
        synthNodesRef.current.push(subOsc, lfo);
      });

      setAudioSourceType('synth');
      setIsPlaying(true);
      return true;
    } catch (e) {
      console.warn("Synthesizer fallback unavailable", e);
      return false;
    }
  };

  const stopProceduralTanpura = () => {
    if (synthNodesRef.current.length > 0) {
      synthNodesRef.current.forEach((node) => {
        try {
          if (node.stop) node.stop();
          if (node.disconnect) node.disconnect();
        } catch (_) {}
      });
      synthNodesRef.current = [];
    }
  };

  const toggleMusic = async () => {
    if (isPlaying) {
      // Pause
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      stopProceduralTanpura();
      setIsPlaying(false);
    } else {
      // Play
      let played = false;
      if (audioRef.current) {
        try {
          if (!audioRef.current.currentSrc) {
            audioRef.current.load();
          }
          await audioRef.current.play();
          setAudioSourceType('file');
          setIsPlaying(true);
          played = true;
        } catch (err) {
          console.log("Audio play with source elements failed, trying direct src...", err);
          try {
            audioRef.current.src = INVITATION_DATA.audio.src;
            await audioRef.current.play();
            setAudioSourceType('file');
            setIsPlaying(true);
            played = true;
          } catch (err2) {
            console.log("Direct audio file play failed, using ambient tanpura synthesizer...", err2);
          }
        }
      }

      if (!played) {
        const synthSuccess = startProceduralTanpura();
        if (synthSuccess) {
          setIsPlaying(true);
        }
      }
    }
  };

  // Watch for auto-start trigger from LoadingScreen "Enter" action
  useEffect(() => {
    if (autoStartRequested && !isPlaying) {
      toggleMusic();
    }
  }, [autoStartRequested]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopProceduralTanpura();
      if (audioContextRef.current) {
        try {
          audioContextRef.current.close();
        } catch (_) {}
      }
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
      >
        <source src={INVITATION_DATA.audio.src} type="audio/mpeg" />
        <source src={INVITATION_DATA.audio.mpegSrc} type="audio/mpeg" />
        <source src="/assets/audio/song.mpeg" type="audio/mpeg" />
        <source src="/assets/audio/royal-shehnai.mp3" type="audio/mpeg" />
      </audio>

      {/* Compact Circular Icon-Only Music Button */}
      <button
        onClick={toggleMusic}
        className={`group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border transition-all duration-300 shadow-xl backdrop-blur-md ${
          isPlaying
            ? 'bg-navy-900/90 border-gold-400 text-gold-300 shadow-gold-500/30 ring-1 ring-gold-400/50'
            : 'bg-navy-950/85 border-gold-600/40 text-ivory-200 hover:border-gold-400 hover:text-gold-300'
        }`}
        aria-label={isPlaying ? 'Mute background royal music' : 'Play royal wedding music'}
        title={isPlaying ? 'Mute Royal Music' : 'Play Royal Music'}
      >
        {isPlaying ? (
          <div className="flex items-end justify-center gap-0.5 h-3.5">
            <span className="w-0.5 bg-gold-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2.5" />
            <span className="w-0.5 bg-gold-300 rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.2s] h-3.5" />
            <span className="w-0.5 bg-gold-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s] h-2" />
            <span className="w-0.5 bg-gold-200 rounded-full animate-[pulse_0.7s_ease-in-out_infinite_0.1s] h-3" />
          </div>
        ) : (
          <VolumeX className="w-4 h-4 text-gold-400" />
        )}

        {/* Ambient subtle glow ring when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full bg-gold-400/15 animate-ping pointer-events-none" />
        )}
      </button>
    </div>
  );
}


