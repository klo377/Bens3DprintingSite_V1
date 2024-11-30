import React from 'react';
import { Card } from '../../../components/Card';
import { Heading, Text } from '../../../components/Typography';

interface ComponentEditorProps {
  component: {
    id: string;
    type: string;
    props: any;
  };
  onChange: (updatedComponent: any) => void;
}

export function ComponentEditor({ component, onChange }: ComponentEditorProps) {
  const handlePropChange = (propName: string, value: any) => {
    onChange({
      ...component,
      props: {
        ...component.props,
        [propName]: value
      }
    });
  };

  return (
    <Card>
      <Heading className="text-lg mb-4">Edit {component.type}</Heading>
      <div className="space-y-4">
        {Object.entries(component.props).map(([propName, value]) => (
          <div key={propName}>
            <Text className="font-medium mb-1">{propName}</Text>
            {typeof value === 'string' ? (
              <input
                type="text"
                value={value as string}
                onChange={(e) => handlePropChange(propName, e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            ) : typeof value === 'number' ? (
              <input
                type="number"
                value={value as number}
                onChange={(e) => handlePropChange(propName, Number(e.target.value))}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <Text className="text-gray-500">Complex property type</Text>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}