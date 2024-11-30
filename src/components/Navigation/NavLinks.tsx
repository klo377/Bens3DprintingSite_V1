import React from 'react';
import { NavLink } from './NavLink';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/prints', label: 'Prints' },
  { path: '/shop', label: 'Shop' },
  { path: '/blog', label: 'Blog' },
  { path: '/tutorials', label: 'Tutorials' },
  { path: '/resources', label: 'Resources' },
  { path: '/contact', label: 'Contact' }
];

export function NavLinks() {
  return (
    <div className="hidden md:flex items-center justify-center space-x-6">
      {navItems.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}