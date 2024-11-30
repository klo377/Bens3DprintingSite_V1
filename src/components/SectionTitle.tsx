import React from 'react';
import { Heading, Text } from './Typography';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="section-title">
      <Heading className="text-3xl mb-2">{title}</Heading>
      {subtitle && <Text className="text-xl">{subtitle}</Text>}
    </div>
  );
}