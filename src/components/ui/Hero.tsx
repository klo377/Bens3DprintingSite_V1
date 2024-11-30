import React from 'react';
import { Container } from './Container';

interface HeroProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

export function Hero({ children, className = '', backgroundImage }: HeroProps) {
  return (
    <div className="relative h-[500px] overflow-hidden mb-12">
      <div className="absolute inset-0">
        <img 
          src={backgroundImage || "https://images.unsplash.com/photo-1631544114506-c920f0c6153a"}
          alt="3D Printer"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 hero-gradient" />
      <Container className="relative h-full flex items-center justify-center">
        <div className={`max-w-3xl ${className}`}>
          {children}
        </div>
      </Container>
    </div>
  );
}