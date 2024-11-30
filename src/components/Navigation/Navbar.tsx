import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { useAuthStore } from '../../store/authStore';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex-1 flex justify-center">
            <NavLinks />
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Welcome, {user.email}</span>
                <button
                  onClick={() => useAuthStore.getState().setUser(null)}
                  className="btn-primary"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}