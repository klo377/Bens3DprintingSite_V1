import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Card } from '../../../components/Card';
import { Heading, Text } from '../../../components/Typography';
import { ComponentPalette } from './ComponentPalette';
import { SortableComponent } from './SortableComponent';
import { ComponentEditor } from './ComponentEditor';

export function PageBuilder() {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      setComponents((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="flex h-full gap-4">
      <div className="w-64">
        <ComponentPalette onAddComponent={(component) => setComponents([...components, component])} />
      </div>
      
      <div className="flex-1">
        <Card>
          <Heading className="mb-4">Page Editor</Heading>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={components}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-4">
                {components.map((component) => (
                  <SortableComponent
                    key={component.id}
                    component={component}
                    onSelect={() => setSelectedComponent(component)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </Card>
      </div>

      <div className="w-80">
        {selectedComponent && (
          <ComponentEditor
            component={selectedComponent}
            onChange={(updatedComponent) => {
              setComponents(components.map((c) =>
                c.id === updatedComponent.id ? updatedComponent : c
              ));
            }}
          />
        )}
      </div>
    </div>
  );
}