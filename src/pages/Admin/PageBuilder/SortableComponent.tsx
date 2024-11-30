import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card } from '../../../components/Card';
import { Text } from '../../../components/Typography';

interface SortableComponentProps {
  component: {
    id: string;
    type: string;
    props: any;
  };
  onSelect: () => void;
}

export function SortableComponent({ component, onSelect }: SortableComponentProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: component.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card className="cursor-move hover:shadow-lg transition-shadow duration-200" onClick={onSelect}>
        <div className="flex items-center justify-between">
          <Text className="font-medium">{component.type}</Text>
          <button
            className="p-1 hover:bg-gray-100 rounded"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            <Text>Edit</Text>
          </button>
        </div>
        <div className="mt-2">
          <pre className="text-sm text-gray-600 overflow-hidden">
            {JSON.stringify(component.props, null, 2)}
          </pre>
        </div>
      </Card>
    </div>
  );
}