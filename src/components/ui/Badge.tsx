import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'primary',
  className = '' 
}: BadgeProps) {
  const variants = {
    primary: 'bg-red-600/20 text-red-400',
    secondary: 'bg-dark-700 text-gray-300',
    outline: 'border border-red-500 text-red-400'
  };

  return (
    <span className={`
      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
}