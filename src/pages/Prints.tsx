import React from 'react';
import { Card } from '../components/Card';
import { Heading, Text } from '../components/Typography';
import { PageLayout } from '../layouts';

export function Prints() {
  const prints = [
    {
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6",
      title: "Mechanical Parts",
      description: "High-precision functional components"
    },
    {
      image: "https://images.unsplash.com/photo-1631544114506-c920f0c6153a",
      title: "Architectural Models",
      description: "Detailed architectural prototypes"
    },
    {
      image: "https://images.unsplash.com/photo-1615947191900-956e5ffa1ab6",
      title: "Custom Props",
      description: "Movie and cosplay replicas"
    },
    {
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      title: "Miniatures",
      description: "Detailed gaming miniatures"
    },
    {
      image: "https://images.unsplash.com/photo-1609873963505-a5061290ec5c",
      title: "Prototype Designs",
      description: "Rapid prototyping examples"
    },
    {
      image: "https://images.unsplash.com/photo-1631544114506-c920f0c6153a",
      title: "Engineering Parts",
      description: "Functional mechanical components"
    },
    {
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6",
      title: "Art Sculptures",
      description: "Creative 3D printed art"
    },
    {
      image: "https://images.unsplash.com/photo-1615947191900-956e5ffa1ab6",
      title: "Home Decor",
      description: "Decorative prints and holders"
    },
    {
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      title: "Custom Tools",
      description: "Specialized tool prints"
    }
  ];

  return (
    <PageLayout>
      <div className="space-y-16">
        <div className="text-center mb-12">
          <Heading className="text-4xl mb-4">Our 3D Prints Gallery</Heading>
          <Text className="text-xl">A showcase of our finest 3D printed creations</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prints.map((print, index) => (
            <div 
              key={index}
              className={`
                relative transform transition-all duration-500 hover:scale-105
                ${index >= 3 && index < 6 ? 'fade-mask' : ''}
              `}
            >
              <Card className="overflow-hidden h-[300px] relative">
                <div className="absolute inset-0">
                  <img 
                    src={print.image}
                    alt={print.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Heading className="text-xl mb-2">{print.title}</Heading>
                  <Text className="text-gray-300">{print.description}</Text>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}