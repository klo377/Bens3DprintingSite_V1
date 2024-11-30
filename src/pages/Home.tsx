import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Text } from '../components/Typography';
import { useAuthStore } from '../store/authStore';

export function Home() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-24">
      <div className="text-center py-24">
        <Heading className="text-5xl mb-4">Welcome to Ben's 3D Printing Hub</Heading>
        <Text className="text-xl">Your One-Stop Shop for All Things 3D Printing</Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="feature-card">
          <img 
            src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6"
            alt="3D Prints Gallery"
            className="feature-card-image"
          />
          <div className="feature-card-content">
            <Heading className="text-2xl mb-4">3D Prints Gallery</Heading>
            <Text className="mb-6">Explore our collection of amazing 3D prints.</Text>
            <Link to="/prints" className="btn-primary">View Gallery</Link>
          </div>
        </div>

        <div className="feature-card">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
            alt="3D Printing Shop"
            className="feature-card-image"
          />
          <div className="feature-card-content">
            <Heading className="text-2xl mb-4">3D Printing Shop</Heading>
            <Text className="mb-6">Quality filaments, parts, and accessories for sale.</Text>
            <Link to="/shop" className="btn-primary">Visit Shop</Link>
          </div>
        </div>

        <div className="feature-card">
          <img 
            src="https://images.unsplash.com/photo-1615947191900-956e5ffa1ab6"
            alt="Member Resources"
            className="feature-card-image"
          />
          <div className="feature-card-content">
            <Heading className="text-2xl mb-4">Member Resources</Heading>
            <Text className="mb-6">Access exclusive tutorials and resources.</Text>
            <Link to="/resources" className="btn-primary">Learn More</Link>
          </div>
        </div>
      </div>

      {!user && (
        <div className="cta-section">
          <div className="cta-content">
            <Heading className="text-2xl mb-4">Free Membership Benefits</Heading>
            <Text className="mb-6">
              Join our free membership program to access exclusive content including 
              step-by-step video tutorials, premium printing profiles, and community support.
            </Text>
            <Link to="/login" className="btn-primary">
              Join Free Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}