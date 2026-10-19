'use client';
import Image from 'next/image';
import { Portal } from '@/shared/ui/Portal';
import { useModalEffect } from '@/shared/hooks/useModalEffect';

interface ImageLightboxProps {
  src: string | null;
  onClose: () => void;
}

export default function ImageLightbox({ src, onClose }: ImageLightboxProps) {
  useModalEffect({ 
    isOpen: Boolean(src), 
    onClose 
  });

  if (!src) return null;

  return (
    <Portal>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 cursor-zoom-out"
        role="dialog"
        aria-modal="true"
        aria-label="Просмотр изображения"
        onClick={onClose}
      >
        <div 
          className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          onClick={(event) => event.stopPropagation()} 
        >
          <Image 
            src={src} 
            alt="Project preview"
            width={700}
            height={700}
            priority
            className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl animate-fade-in"
          />
        </div>
      </div>
    </Portal>
  );
}