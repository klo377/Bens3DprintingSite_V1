import React, { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export function Heading({ children, className = '' }: HeadingProps) {
  return (
    <h1 className={`text-2xl font-bold text-gray-100 ${className}`}>
      {children}
    </h1>
  );
}