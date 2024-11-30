import React, { ReactNode } from 'react';

interface CenteredLayoutProps {
  children: ReactNode;
}

export function CenteredLayout({ children }: CenteredLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {children}
    </div>
  );
}