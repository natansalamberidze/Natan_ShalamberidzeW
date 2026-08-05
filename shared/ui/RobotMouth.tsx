'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/shared/ui';

const BARS_COUNT = 9;

export default function AutoRobotMouth() {
  const [trackTitle, setTrackTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scales, setScales] = useState<number[]>(new Array(BARS_COUNT).fill(1));
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null); 

  useEffect(() => {
    const audio = new Audio();
    audio.crossOrigin = 'anonymous';
    audioRef.current = audio;
    return () => {
      audio.pause();
      if (animationRef.current) 
        cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) 
      return;
    const handleEnded = () => fetchAndPlayMusic();
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [trackTitle]);

  const initAudioContext = () => {
    if (analyserRef.current || !audioRef.current) 
      return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContextClass();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 32;
    const source = ctx.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(ctx.destination);
    analyserRef.current = analyser;
  };

  const fetchAndPlayMusic = async () => {
    setIsLoading(true);
    initAudioContext();
    const clientID = process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID;
    if (!clientID) {
      console.log('Jamendo ID missing. Using fallback.');
      setTrackTitle('Paul Kalkbrenner - Sky and Sand (Local)');
      playAudio('/audio/kalkbrenner.mp3');
      setIsLoading(false);
      return;
    }

    try {
      // Using the Next.js route stopper to bypass CORS in the future
      const res = await fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${clientID}&format=json&limit=50&include=musicinfo&audioformat=mp32&tags=Classical+Jazz`);
      const data = await res.json();
      if (!data.results?.length) 
        throw new Error('No tracks found');
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const track = data.results[randomIndex];
      setTrackTitle(`${track.artist_name} - ${track.name}`);
      playAudio(track.audio);
    } catch (err) {
      console.error('API Error, standard fallback:', err);
      setTrackTitle('Local Track - Fallback');
      playAudio('/audio/track.mp3');
    } finally {
      setIsLoading(false);
    }
  };

  const playAudio = (url: string) => {
    if (!audioRef.current) 
      return;
    audioRef.current.src = url;
    audioRef.current.play();
    setIsPlaying(true);
    if (!animationRef.current) {
      updateMouthMovement();
    }
  };

  const resumeAudio = async () => {
    if (!audioRef.current) 
      return;
    if (audioContextRef.current?.state === 'suspended') {
      await audioContextRef.current.resume();
    }
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
        if (!animationRef.current) 
          updateMouthMovement();
      })
      .catch(err => console.error("Resume failed:", err));
  };

  const pauseMusic = () => {
    if (!audioRef.current) 
      return;
    audioRef.current.pause();
    setIsPlaying(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setScales(new Array(BARS_COUNT).fill(1));
  };

  const updateMouthMovement = () => {
    if (!analyserRef.current) 
      return;
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);
    const newScales = [];
    for (let i = 0; i < BARS_COUNT; i++) {
      const audioByteValue = dataArray[i] || 0;
      newScales.push(0.4 + (audioByteValue / 255) * 1.2);
    }
    setScales(newScales);
    animationRef.current = requestAnimationFrame(updateMouthMovement);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-1 p-2">
      <div className="flex items-center justify-center gap-2 h-10 w-40 p-5 bg-slate-950 rounded-2xl border border-slate-800 shadow-inner">
        {scales.map((scale, index) => (
          <motion.div
            key={index}
            className="w-2 bg-cyan-400 rounded-full h-6"
            animate={{ scaleY: scale }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        ))}
      </div>

      {trackTitle && (
        <p className="text-sm text-cyan-400 truncate animate-pulseitems-left max-w-40 mt-2">
          {trackTitle}
        </p>
      )}

      <div className="flex gap-2 w-full mt-2">
        <Button 
          onClick={isPlaying ? fetchAndPlayMusic : trackTitle ? resumeAudio : fetchAndPlayMusic} 
          disabled={isLoading} 
          variant="ghost" 
          size="xs"
        >
          {isLoading ? 'Loading...' : isPlaying ? 'Next Track' : trackTitle ? 'Resume' : 'Play'}
        </Button>
        <Button 
          onClick={pauseMusic} 
          variant="ghost" 
          size="xs" 
          disabled={!isPlaying}
        >
          Pause
        </Button>
      </div>
    </div>
  );
}