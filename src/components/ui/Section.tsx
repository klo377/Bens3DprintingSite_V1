import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  container?: boolean;
}

export function Section({ 
  children, 
  className = '', 
  gradient = false,
  container = true 
}: SectionProps) {
  const content = (
    <div className={`
      py-12
      ${gradient ? 'section-gradient' : ''}
      ${className}
    `}>
      {children}
    </div>
  );

  if (container) {
    return (
      <section className="relative">
        <Container>
          {content}
        </Container>
      </section>
    );
  }

  return <section className="relative">{content}</section>;
}