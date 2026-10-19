'use client';
import { Button } from '@/shared';
import { useAudioPlayer } from '@/shared/hooks/useAudioPlayer';
import { VisualizerBars } from './VisualizerBars';

const BARS_COUNT = 9;

export default function RobotMouth() {
  const {
    trackTitle,
    isLoading,
    isPlaying,
    scales,
    fetchAndPlayMusic,
    resumeAudio,
    pauseMusic
  } = useAudioPlayer(BARS_COUNT);

  const handlePlayClick = isPlaying 
    ? fetchAndPlayMusic 
    : trackTitle 
      ? resumeAudio 
      : fetchAndPlayMusic;

  return (
    <div className="flex flex-col justify-center items-center gap-1 p-2 select-none">
      <div className="flex gap-2 p-1">
        <Button
          className="border-4 border-purple-400 px-3 py-2 cursor-pointer text-text-primary"
          onClick={handlePlayClick}
          disabled={isLoading}
          variant="ghost"
          size="xs"
        >
          {isLoading ? 'Loading...' : isPlaying ? 'Next Track' : trackTitle ? 'Resume' : 'Play'}
        </Button>
        <Button
          className="border-4 border-purple-400 px-3 py-2 cursor-pointer text-text-primary"
          onClick={pauseMusic}
          variant="ghost"
          size="xs"
          disabled={!isPlaying}
        >
          Pause
        </Button>
      </div>
      <VisualizerBars 
        scales={scales}
      />
      {trackTitle && (
        <p className="text-sm text-cyan-400 truncate text-center max-w-40 mt-2 font-mono animate-pulse">
          {trackTitle}
        </p>
      )}
    </div>
  );
}