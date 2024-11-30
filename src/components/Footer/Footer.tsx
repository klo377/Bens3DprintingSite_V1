import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { FaGithub, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaDiscord, href: '#', label: 'Discord' }
];

const siteMap = [
  { label: 'Home', href: '/' },
  { label: 'Prints', href: '/prints' },
  { label: 'Shop', href: '/shop' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tutorials', href: '/tutorials' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
  { label: 'Member Login', href: '/login' }
];

export function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-red-900/20 mt-auto">
      <Container>
        <div className="py-8">
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-red-500 hover:text-red-400 transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex justify-center flex-wrap gap-4 mb-6">
            {siteMap.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className="text-red-500 hover:text-red-400 transition-colors duration-300 text-sm"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="text-center text-red-500/80">
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}