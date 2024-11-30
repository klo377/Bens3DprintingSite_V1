import React from 'react';
import { Card } from '../components/Card';
import { Heading, Text } from '../components/Typography';

export function Gallery() {
  const projects = [
    {
      title: "Custom Miniatures",
      description: "High-detail fantasy and tabletop gaming miniatures",
      tags: ["Resin", "High Detail", "Custom Paint"],
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6"
    },
    {
      title: "Mechanical Parts",
      description: "Functional mechanical components and prototypes",
      tags: ["FDM", "Engineering", "Functional"],
      image: "https://images.unsplash.com/photo-1631544114506-c920f0c6153a"
    },
    {
      title: "Architectural Models",
      description: "Detailed architectural prototypes and presentations",
      tags: ["FDM", "Large Scale", "Professional"],
      image: "https://images.unsplash.com/photo-1615947191900-956e5ffa1ab6"
    },
    {
      title: "Custom Props",
      description: "Movie and cosplay prop replicas",
      tags: ["Mixed", "Large Format", "Detailed"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="relative h-64 rounded-xl overflow-hidden mb-8">
        <img 
          src="https://images.unsplash.com/photo-1609873963505-a5061290ec5c"
          alt="Project Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/80 to-dark-950/40 flex items-center">
          <div className="max-w-2xl mx-8">
            <Heading>Project Gallery</Heading>
            <Text className="text-lg">Explore our previous work and successful projects</Text>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <Heading className="text-xl mb-2">{project.title}</Heading>
            <Text className="mb-4">{project.description}</Text>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-purple-900/50 text-purple-200 text-sm px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}