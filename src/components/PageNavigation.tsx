import React from 'react';
import { Link } from 'react-router-dom';

interface PageNavigationProps {
  prevLink?: string;
  nextLink?: string;
  prevText?: string;
  nextText?: string;
}

export function PageNavigation({ prevLink, nextLink, prevText, nextText }: PageNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-8 mb-12">
      {prevLink ? (
        <Link 
          to={prevLink}
          className="text-red-500 hover:text-red-400 font-bold transition-colors duration-300"
        >
          ← {prevText || 'Previous'}
        </Link>
      ) : (
        <span /> // Empty span for spacing
      )}
      
      {nextLink ? (
        <Link 
          to={nextLink}
          className="text-red-500 hover:text-red-400 font-bold transition-colors duration-300"
        >
          {nextText || 'Next'} →
        </Link>
      ) : (
        <span /> // Empty span for spacing
      )}
    </div>
  );
}