import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function NavLink({ to, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`py-4 px-2 ${
        isActive
          ? 'text-red-400 border-b-2 border-red-400 font-semibold'
          : 'text-gray-300 font-semibold hover:text-red-400 transition duration-300'
      }`}
    >
      {children}
    </Link>
  );
}