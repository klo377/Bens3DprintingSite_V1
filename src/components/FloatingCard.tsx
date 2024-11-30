import React from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
}

export function FloatingCard({ children, className = '' }: FloatingCardProps) {
  return (
    <div className="relative transform transition-all duration-500 hover:scale-105">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-75" />
      <div className={`relative bg-black rounded-lg p-6 ${className}`}>
        {children}
      </div>
    </div>
  );
}