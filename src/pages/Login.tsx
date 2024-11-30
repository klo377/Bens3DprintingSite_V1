import React from 'react';
import { AuthModal } from '../components/Auth/AuthModal';
import { Heading, Text } from '../components/Typography';

export function Login() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center">
        <Heading>Member Login</Heading>
        <Text className="mb-6">Access exclusive tutorials and resources</Text>
      </div>
      <AuthModal />
    </div>
  );
}