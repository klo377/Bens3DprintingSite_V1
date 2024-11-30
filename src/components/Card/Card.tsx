import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  floating?: boolean;
  gradient?: boolean;
}

export function Card({ 
  children, 
  className = '', 
  floating = false,
  gradient = false 
}: CardProps) {
  return (
    <div 
      className={`
        card p-6
        ${floating ? 'floating-card' : ''} 
        ${gradient ? 'gradient-border' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
}