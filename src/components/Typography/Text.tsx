import React, { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
}

export function Text({ children, className = '' }: TextProps) {
  return (
    <p className={`text-gray-300 ${className}`}>
      {children}
    </p>
  );
}