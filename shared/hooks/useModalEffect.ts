'use client';
import { useEffect } from 'react';

interface UseModalEffectProps {
  isOpen: boolean;
  onClose: () => void;
}

export function useModalEffect({ isOpen, onClose }: UseModalEffectProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
}