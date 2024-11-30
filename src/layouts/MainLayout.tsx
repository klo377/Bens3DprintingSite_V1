import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navigation/Navbar';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
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
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}