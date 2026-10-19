'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

export interface Track {
  title: string;
  url: string;
}

const LOCAL_PLAYLIST: Track[] = [
  { title: 'Sky Dancer', url: '/audio/skydancer.mp3' },
  { title: 'Last Summer', url: '/audio/lastsummer.mp3' },
  { title: 'No Love', url: '/audio/nolove.mp3' }
];

export function useAudioPlayer(barsCount: number) {
  const [trackTitle, setTrackTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scales, setScales] = useState<number[]>(() => new Array(barsCount).fill(1));

  const localIndexRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playNextLocalTrack = useCallback(() => {
    const currentTrack = LOCAL_PLAYLIST[localIndexRef.current];
    setTrackTitle(currentTrack.title);
    playAudio(currentTrack.url);
    localIndexRef.current = (localIndexRef.current + 1) % LOCAL_PLAYLIST.length;
    setIsLoading(false);
  }, []);

  const updateMouthMovement = useCallback(() => {
    if (!analyserRef.current) return;
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);

    const newScales = [];
    for (let i = 0; i < barsCount; i++) {
      const audioByteValue = dataArray[i] || 0;
      newScales.push(0.4 + (audioByteValue / 255) * 1.2);
    }
    setScales(newScales);
    animationRef.current = requestAnimationFrame(updateMouthMovement);
  }, [barsCount]);

  const playAudio = useCallback((url: string) => {
    if (!audioRef.current) return;
    audioRef.current.src = url;
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
        if (!animationRef.current) updateMouthMovement();
      })
      .catch(err => console.warn('Autoplay blocked by browser policy:', err));
  }, [updateMouthMovement]);

  const initAudioContext = useCallback(() => {
    if (analyserRef.current || !audioRef.current) return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContextClass();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 32;
    const source = ctx.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(ctx.destination);
    
    audioContextRef.current = ctx;
    analyserRef.current = analyser;
  }, []);

  const fetchAndPlayMusic = useCallback(async () => {
    setIsLoading(true);
    initAudioContext();
    const clientID = process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID;
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${clientID}&format=json&limit=50&include=musicinfo&audioformat=mp32&tags=Classical+Jazz`;

    const res = await fetch(url).catch(() => null);
    
    if (!res) {
      playNextLocalTrack();
      return;
    }

    const data = await res.json();
    
    if (data?.results?.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const track = data.results[randomIndex];
      setTrackTitle(`${track.artist_name} - ${track.name}`);
      playAudio(track.audio);
      setIsLoading(false);
    } else {
      playNextLocalTrack();
    }
  }, [initAudioContext, playAudio, playNextLocalTrack]);

  useEffect(() => {
    const audio = new Audio();
    audio.crossOrigin = 'anonymous';
    audioRef.current = audio;
    return () => {
      audio.pause();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener('ended', fetchAndPlayMusic);
    return () => audio.removeEventListener('ended', fetchAndPlayMusic);
  }, [fetchAndPlayMusic]);

  const resumeAudio = async () => {
    if (!audioRef.current) return;
    if (audioContextRef.current?.state === 'suspended') {
      await audioContextRef.current.resume();
    }
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
        if (!animationRef.current) updateMouthMovement();
      });
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setScales(new Array(barsCount).fill(1));
  };

  return {
    trackTitle,
    isLoading,
    isPlaying,
    scales,
    fetchAndPlayMusic,
    resumeAudio,
    pauseMusic
  };
}