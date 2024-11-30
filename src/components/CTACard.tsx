import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Text } from './Typography';
import { FloatingCard } from './FloatingCard';

interface CTACardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function CTACard({ title, description, buttonText, buttonLink }: CTACardProps) {
  return (
    <div className="w-[60%] mx-auto">
      <FloatingCard className="p-12 text-center">
        <Heading className="text-2xl mb-4">{title}</Heading>
        <Text className="mb-6 max-w-2xl mx-auto">{description}</Text>
        <Link to={buttonLink} className="btn-primary inline-block">
          {buttonText}
        </Link>
      </FloatingCard>
    </div>
  );
}