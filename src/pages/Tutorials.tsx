import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Text } from '../components/Typography';
import { useAuthStore } from '../store/authStore';
import { CTACard } from '../components/CTACard';
import { FloatingCard } from '../components/FloatingCard';
import { PageLayout } from '../layouts';

const tutorials = [
  {
    id: "getting-started-bambu-p1s",
    title: "Getting Started with Bambu P1S",
    difficulty: "Beginner",
    duration: "30 minutes",
    topics: ["Unboxing", "Initial Setup", "First Print"],
    free: true
  },
  {
    id: "basic-bed-leveling",
    title: "Basic Bed Leveling",
    difficulty: "Beginner",
    duration: "20 minutes",
    topics: ["Auto-leveling", "Z-offset", "First Layer"],
    free: true
  },
  {
    id: "filament-loading-guide",
    title: "Filament Loading Guide",
    difficulty: "Beginner",
    duration: "15 minutes",
    topics: ["Loading", "Unloading", "Storage Tips"],
    free: true
  },
  {
    id: "advanced-print-quality",
    title: "Advanced Print Quality Tuning",
    difficulty: "Intermediate",
    duration: "45 minutes",
    topics: ["Temperature Tower", "Retraction Settings", "Speed Optimization"],
    requiresLogin: true
  },
  {
    id: "custom-material-profiles",
    title: "Custom Material Profiles",
    difficulty: "Advanced",
    duration: "60 minutes",
    topics: ["Profile Creation", "Testing Methods", "Fine-tuning"],
    requiresLogin: true
  },
  {
    id: "multi-material-printing",
    title: "Multi-Material Printing",
    difficulty: "Advanced",
    duration: "90 minutes",
    topics: ["AMS Setup", "Purge Settings", "Color Management"],
    requiresLogin: true
  },
  {
    id: "maintenance-troubleshooting",
    title: "Maintenance and Troubleshooting",
    difficulty: "Intermediate",
    duration: "40 minutes",
    topics: ["Regular Maintenance", "Common Issues", "Solutions"],
    requiresLogin: true
  },
  {
    id: "advanced-bambu-studio",
    title: "Advanced Bambu Studio Features",
    difficulty: "Intermediate",
    duration: "50 minutes",
    topics: ["Custom Supports", "Paint-on Seam", "Variable Layer Height"],
    requiresLogin: true
  }
];

export function Tutorials() {
  const user = useAuthStore((state) => state.user);

  return (
    <PageLayout>
      <div className="space-y-12">
        <div className="text-center mb-12">
          <Heading className="text-4xl mb-4">3D Printing Tutorials</Heading>
          <Text className="text-xl">Step-by-step guides to master your Bambu P1S printer</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tutorials.map((tutorial, index) => {
            const isLocked = !tutorial.free && !user && index >= 3;

            return (
              <Link 
                key={tutorial.id} 
                to={isLocked ? "/login" : `/tutorials/${tutorial.id}`}
                className="block"
              >
                <FloatingCard>
                  <div className={`relative ${isLocked ? 'opacity-75' : ''}`}>
                    <Heading className="text-xl mb-4">{tutorial.title}</Heading>
                    <div className="mb-4 flex space-x-4">
                      <span className="text-sm bg-red-600/20 text-red-400 px-2 py-1 rounded">
                        {tutorial.difficulty}
                      </span>
                      <span className="text-sm bg-dark-700 text-gray-300 px-2 py-1 rounded">
                        {tutorial.duration}
                      </span>
                    </div>
                    <Text className="mb-4">Topics covered:</Text>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      {tutorial.topics.map((topic, i) => (
                        <li key={i} className="text-gray-300">{topic}</li>
                      ))}
                    </ul>
                    {isLocked && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="btn-primary">
                          Login to Access
                        </span>
                      </div>
                    )}
                  </div>
                </FloatingCard>
              </Link>
            );
          })}
        </div>

        {!user && (
          <CTACard
            title="Access All Tutorials"
            description="Sign up for free to unlock our complete collection of tutorials, including advanced techniques, optimization guides, and expert tips for your Bambu P1S printer."
            buttonText="Join Free Now"
            buttonLink="/login"
          />
        )}
      </div>
    </PageLayout>
  );
}