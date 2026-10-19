'use client';
import Image from "next/image";
import { useEffect } from "react";

export default function ImageLightbox({ src, onClose }: { src: string | null; onClose: () => void; }) {
  useEffect(() => {
    if (!src) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [src]);

  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm cursor-zoom-out"
      role="dialog"
      aria-modal="true"
      aria-label="View Image"
      onClick={onClose}
    >
    <div 
      className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
      onClick={(e) => e.stopPropagation()} 
    >
      <Image 
        src={src} 
        alt="Project preview"
        width={2000}
        height={2000}
        className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl animate-fade-in"
      />
    </div>
    </div>
  );
} 