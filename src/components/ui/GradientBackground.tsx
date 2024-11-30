import React from 'react';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'hero' | 'card';
}

export function GradientBackground({ 
  children, 
  className = '', 
  variant = 'hero' 
}: GradientBackgroundProps) {
  const variants = {
    hero: 'hero-gradient',
    card: 'bg-dark-800/80 backdrop-blur-sm'
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}