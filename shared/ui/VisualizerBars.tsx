'use client';
import { motion } from 'framer-motion';

export function VisualizerBars({ scales }: {scales: number[]}) {
  return (
    <div className="flex items-center justify-center gap-2 h-10 w-40 p-5 bg-slate-950 rounded-2xl border border-slate-800 shadow-inner">
      {scales.map((scale, index) => (
        <motion.div
          key={index}
          className="w-2 bg-cyan-400 rounded-full h-6 origin-center"
          animate={{ scaleY: scale }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      ))}
    </div>
  );
}