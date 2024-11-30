import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heading, Text } from '../components/Typography';
import { FloatingCard } from '../components/FloatingCard';
import { PageLayout } from '../layouts';
import { tutorials } from '../data/tutorials';
import { useAuthStore } from '../store/authStore';
import { PageNavigation } from '../components/PageNavigation';

export function Tutorial() {
  const { id } = useParams();
  const user = useAuthStore((state) => state.user);
  const tutorial = tutorials.find(t => t.id === id);
  const currentIndex = tutorials.findIndex(t => t.id === id);
  const prevTutorial = currentIndex > 0 ? tutorials[currentIndex - 1] : undefined;
  const nextTutorial = currentIndex < tutorials.length - 1 ? tutorials[currentIndex + 1] : undefined;

  if (!tutorial) {
    return (
      <PageLayout>
        <div className="text-center">
          <Heading>Tutorial Not Found</Heading>
          <Link to="/tutorials" className="text-red-400 hover:text-red-300">
            ← Back to Tutorials
          </Link>
        </div>
      </PageLayout>
    );
  }

  if (!tutorial.free && !user) {
    return (
      <PageLayout>
        <FloatingCard className="text-center">
          <Heading className="text-2xl mb-4">Premium Tutorial</Heading>
          <Text className="mb-6">
            This tutorial is available for members only. Sign up for free to access all tutorials.
          </Text>
          <Link to="/login" className="btn-primary">
            Join Free Now
          </Link>
        </FloatingCard>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="space-y-8">
        <div className="text-center mb-12">
          <Link to="/tutorials" className="text-red-400 hover:text-red-300 mb-6 inline-block">
            ← Back to Tutorials
          </Link>
          
          <Heading className="text-4xl mb-4">{tutorial.title}</Heading>
          <div className="flex justify-center space-x-4 mb-4">
            <span className="text-sm bg-red-600/20 text-red-400 px-2 py-1 rounded">
              {tutorial.difficulty}
            </span>
            <span className="text-sm bg-dark-700 text-gray-300 px-2 py-1 rounded">
              {tutorial.duration}
            </span>
          </div>
          <Text className="text-xl max-w-2xl mx-auto">{tutorial.description}</Text>
        </div>

        {tutorial.requirements && (
          <FloatingCard>
            <Heading className="text-xl mb-4">Requirements</Heading>
            <ul className="list-disc list-inside space-y-2">
              {tutorial.requirements.map((req, index) => (
                <li key={index} className="text-gray-300">{req}</li>
              ))}
            </ul>
          </FloatingCard>
        )}

        <div className="space-y-8">
          {tutorial.steps.map((step) => (
            <FloatingCard key={step.number}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-red-400">{step.number}</span>
                </div>
                <div className="flex-1">
                  <Heading className="text-xl mb-2">{step.title}</Heading>
                  <Text className="mb-4">{step.description}</Text>
                  {step.tips && (
                    <div className="bg-dark-800/50 rounded-lg p-4">
                      <Heading className="text-lg mb-2">Tips</Heading>
                      <ul className="list-disc list-inside space-y-1">
                        {step.tips.map((tip, index) => (
                          <li key={index} className="text-gray-300 text-sm">{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>

        {tutorial.videoUrl && (
          <FloatingCard>
            <Heading className="text-xl mb-4">Video Tutorial</Heading>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={tutorial.videoUrl}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </FloatingCard>
        )}

        <PageNavigation
          prevLink={prevTutorial ? `/tutorials/${prevTutorial.id}` : undefined}
          nextLink={nextTutorial ? `/tutorials/${nextTutorial.id}` : undefined}
          prevText={prevTutorial?.title}
          nextText={nextTutorial?.title}
        />
      </div>
    </PageLayout>
  );
}