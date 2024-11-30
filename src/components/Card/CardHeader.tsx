import React from 'react';
import { Heading } from '../Typography';

interface CardHeaderProps {
  title: string;
  subtitle?: string;
}

export function CardHeader({ title, subtitle }: CardHeaderProps) {
  return (
    <div className="mb-4">
      <Heading className="text-xl mb-2">{title}</Heading>
      {subtitle && <p className="text-gray-400">{subtitle}</p>}
    </div>
  );
}