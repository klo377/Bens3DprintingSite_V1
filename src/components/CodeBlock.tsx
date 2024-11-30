import React from 'react';

interface CodeBlockProps {
  children: string;
}

export function CodeBlock({ children }: CodeBlockProps) {
  return (
    <code className="bg-gray-100 p-1 rounded">
      {children}
    </code>
  );
}