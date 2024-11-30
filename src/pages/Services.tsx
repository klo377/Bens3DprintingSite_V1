import React from 'react';
import { Card } from '../components/Card';
import { Heading, Text } from '../components/Typography';

export function Services() {
  const services = [
    {
      title: "FDM Printing",
      description: "Perfect for prototypes, functional parts, and large models",
      specs: ["Layer height: 0.1-0.3mm", "Build volume: 250x250x300mm", "Various materials available"],
      price: "Starting at $10/hour",
      image: "https://images.unsplash.com/photo-1631544114506-c920f0c6153a"
    },
    {
      title: "Resin Printing",
      description: "Ideal for high-detail models and miniatures",
      specs: ["Layer height: 0.025-0.05mm", "Build volume: 130x80x160mm", "Smooth surface finish"],
      price: "Starting at $15/hour",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6"
    },
    {
      title: "3D Design Services",
      description: "Custom 3D modeling and design solutions",
      specs: ["CAD design", "Model optimization", "File preparation"],
      price: "Starting at $40/hour",
      image: "https://images.unsplash.com/photo-1615947191900-956e5ffa1ab6"
    },
    {
      title: "Rapid Prototyping",
      description: "Quick iteration for product development",
      specs: ["Fast turnaround", "Multiple iterations", "Design feedback"],
      price: "Custom quotes available",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="relative h-64 rounded-xl overflow-hidden mb-8">
        <img 
          src="https://images.unsplash.com/photo-1609873963505-a5061290ec5c"
          alt="3D Printing Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/80 to-dark-950/40 flex items-center">
          <div className="max-w-2xl mx-8">
            <Heading>Our Printing Services</Heading>
            <Text className="text-lg">Professional 3D printing services tailored to your needs</Text>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden">
            <img 
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <Heading className="text-xl mb-2">{service.title}</Heading>
            <Text className="mb-4">{service.description}</Text>
            <ul className="list-disc list-inside mb-4">
              {service.specs.map((spec, i) => (
                <li key={i} className="text-gray-300 mb-1">{spec}</li>
              ))}
            </ul>
            <Text className="font-bold text-purple-400">{service.price}</Text>
          </Card>
        ))}
      </div>
    </div>
  );
}