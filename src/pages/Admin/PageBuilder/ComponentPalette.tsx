import React from 'react';
import { Card } from '../../../components/Card';
import { Heading, Text } from '../../../components/Typography';
import { nanoid } from 'nanoid';

const componentTypes = [
  {
    type: 'heading',
    label: 'Heading',
    defaultProps: { text: 'New Heading', level: 'h2' }
  },
  {
    type: 'text',
    label: 'Text Block',
    defaultProps: { content: 'Add your content here' }
  },
  {
    type: 'image',
    label: 'Image',
    defaultProps: { src: '', alt: '', caption: '' }
  },
  {
    type: 'button',
    label: 'Button',
    defaultProps: { text: 'Click Me', url: '#', variant: 'primary' }
  },
  {
    type: 'grid',
    label: 'Grid Layout',
    defaultProps: { columns: 2, gap: 4 }
  }
];

interface ComponentPaletteProps {
  onAddComponent: (component: any) => void;
}

export function ComponentPalette({ onAddComponent }: ComponentPaletteProps) {
  const handleAddComponent = (type: string, defaultProps: any) => {
    onAddComponent({
      id: nanoid(),
      type,
      props: defaultProps
    });
  };

  return (
    <Card>
      <Heading className="text-lg mb-4">Components</Heading>
      <div className="space-y-2">
        {componentTypes.map((component) => (
          <button
            key={component.type}
            className="w-full p-2 text-left hover:bg-gray-50 rounded transition duration-200"
            onClick={() => handleAddComponent(component.type, component.defaultProps)}
          >
            <Text className="font-medium">{component.label}</Text>
          </button>
        ))}
      </div>
    </Card>
  );
}