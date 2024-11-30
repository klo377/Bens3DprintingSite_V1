import React from 'react';
import { Card } from '../components/Card';
import { Heading, Text } from '../components/Typography';

export function About() {
  return (
    <div className="space-y-6">
      <Heading>About Us</Heading>
      <Card>
        <Text>
          We are a passionate team dedicated to creating amazing web experiences.
          Our mission is to deliver high-quality solutions that make a difference.
        </Text>
      </Card>
    </div>
  );
}