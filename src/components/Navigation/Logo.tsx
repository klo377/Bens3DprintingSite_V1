import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div 
      onClick={handleClick}
      className="flex items-center py-4 cursor-pointer"
    >
      <img 
        src="/logo.png" 
        alt="3D Printing Hub" 
        className="h-8 w-auto"
      />
    </div>
  );
}