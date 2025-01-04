import React from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function AnimatedImage({ src, alt, className = '' }: AnimatedImageProps) {
  return (
    <div className="rounded-lg overflow-hidden">
      <img 
        src={src}
        alt={alt}
        className={`w-full object-cover transition-transform duration-500 hover:scale-105 ${className}`}
        loading="lazy"
      />
    </div>
  );
}
