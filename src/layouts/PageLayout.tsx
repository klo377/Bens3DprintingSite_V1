import React, { useEffect, useState } from 'react';
import { Container } from '../components/ui';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Fixed Background with Parallax Effect */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      >
        <div className="absolute inset-0 bg-black" />
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 50% 150%,
                var(--red-glow) 0%,
                rgba(255, 0, 0, 0.2) 30%,
                transparent 70%
              )
            `
          }}
        />
      </div>

      {/* Content */}
      <Container className={`relative z-10 py-8 ${className}`}>
        {children}
      </Container>
    </div>
  );
}