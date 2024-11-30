import React from 'react';
import { Heading, Text } from '../components/Typography';
import { PageLayout } from '../layouts';
import { FloatingCard } from '../components/FloatingCard';

export function Shop() {
  const products = [
    {
      title: "PLA Filament",
      description: "High-quality PLA filament, various colors",
      price: "$24.99",
      specs: ["1.75mm", "1kg Spool", "±0.03mm tolerance"],
      image: "https://images.unsplash.com/photo-1631544114506-c920f0c6153a"
    },
    {
      title: "PETG Filament",
      description: "Durable PETG filament for functional prints",
      price: "$29.99",
      specs: ["1.75mm", "1kg Spool", "Heat resistant"],
      image: "https://images.unsplash.com/photo-1615947191900-956e5ffa1ab6"
    },
    {
      title: "Resin",
      description: "Professional grade printing resin",
      price: "$45.99",
      specs: ["500ml", "Standard Grey", "High detail"],
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6"
    },
    {
      title: "Printer Parts",
      description: "Replacement parts and upgrades",
      price: "Various",
      specs: ["Nozzles", "Build plates", "Accessories"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
    }
  ];

  return (
    <PageLayout>
      <div className="space-y-8">
        <div className="text-center mb-12">
          <Heading className="text-4xl mb-4">3D Printing Shop</Heading>
          <Text className="text-xl">Quality materials and accessories for your 3D printing needs</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <FloatingCard key={index}>
              <img 
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <Heading className="text-xl mb-2">{product.title}</Heading>
              <Text className="mb-4">{product.description}</Text>
              <ul className="list-disc list-inside mb-4">
                {product.specs.map((spec, i) => (
                  <li key={i} className="text-gray-300 text-sm">{spec}</li>
                ))}
              </ul>
              <Text className="font-bold text-red-400">{product.price}</Text>
              <button className="mt-4 w-full btn-primary">
                Add to Cart
              </button>
            </FloatingCard>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}