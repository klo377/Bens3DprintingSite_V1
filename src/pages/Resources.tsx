import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Text } from '../components/Typography';
import { useAuthStore } from '../store/authStore';
import { CTACard } from '../components/CTACard';
import { FloatingCard } from '../components/FloatingCard';
import { PageLayout } from '../layouts';

const resourceCategories = {
  modeling: {
    title: "3D Modeling for Beginners",
    description: "Get started with 3D modeling software",
    resources: [
      {
        title: "Blender Basics",
        description: "Free, powerful 3D modeling software",
        link: "https://www.blender.org",
        free: true
      },
      {
        title: "TinkerCAD",
        description: "Browser-based 3D design tool for beginners",
        link: "https://www.tinkercad.com",
        free: true
      },
      {
        title: "FreeCAD",
        description: "Open-source parametric 3D modeler",
        link: "https://www.freecadweb.org",
        free: true
      },
      {
        title: "Fusion 360",
        description: "Professional CAD software with free personal license",
        link: "https://www.autodesk.com/products/fusion-360",
        requiresLogin: true
      }
    ]
  },
  slicing: {
    title: "3D Slicing for Beginners",
    description: "Essential slicing software and settings",
    resources: [
      {
        title: "Bambu Studio",
        description: "Official slicer for Bambu Lab printers",
        link: "https://bambulab.com/en/download/studio",
        free: true
      },
      {
        title: "PrusaSlicer",
        description: "Feature-rich open-source slicer",
        link: "https://www.prusa3d.com/prusaslicer",
        free: true
      },
      {
        title: "Cura",
        description: "Popular slicer with extensive features",
        link: "https://ultimaker.com/software/ultimaker-cura",
        free: true
      },
      {
        title: "Advanced Bambu P1S Profiles",
        description: "Optimized printing profiles for various materials",
        requiresLogin: true
      }
    ]
  },
  stlFiles: {
    title: "STL Files for Testing",
    description: "Free STL files to test your printer",
    resources: [
      {
        title: "Thingiverse",
        description: "Largest 3D printing community and file repository",
        link: "https://www.thingiverse.com",
        free: true
      },
      {
        title: "Printables",
        description: "Modern 3D model database by Prusa",
        link: "https://www.printables.com",
        free: true
      },
      {
        title: "Cults3D",
        description: "Premium and free 3D models",
        link: "https://cults3d.com",
        free: true
      },
      {
        title: "MyMiniFactory",
        description: "Curated 3D printable objects",
        link: "https://www.myminifactory.com",
        requiresLogin: true
      }
    ]
  }
};

export function Resources() {
  const user = useAuthStore((state) => state.user);

  return (
    <PageLayout>
      <div className="space-y-16">
        <div className="text-center mb-12">
          <Heading className="text-4xl mb-4">3D Printing Resources</Heading>
          <Text className="text-xl">Essential tools and resources for 3D printing</Text>
        </div>

        {Object.entries(resourceCategories).map(([key, category]) => (
          <section key={key} className="space-y-8">
            <div className="text-center mb-8">
              <Heading className="text-2xl mb-2">{category.title}</Heading>
              <Text className="text-lg">{category.description}</Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.resources.map((resource, index) => {
                const isLocked = !resource.free && !user && index >= 3;

                return (
                  <FloatingCard key={index}>
                    <div className={`relative ${isLocked ? 'opacity-75' : ''}`}>
                      <Heading className="text-xl mb-2">{resource.title}</Heading>
                      <Text className="mb-4">{resource.description}</Text>
                      {resource.link && !isLocked ? (
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-400 hover:text-red-300"
                        >
                          Visit Resource →
                        </a>
                      ) : isLocked && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Link to="/login" className="btn-primary">
                            Login to Access
                          </Link>
                        </div>
                      )}
                    </div>
                  </FloatingCard>
                );
              })}
            </div>
          </section>
        ))}

        {!user && (
          <CTACard
            title="Access All Resources"
            description="Sign up for free to access our complete library of resources, including advanced guides, optimized printer profiles, and premium STL file collections."
            buttonText="Join Free Now"
            buttonLink="/login"
          />
        )}
      </div>
    </PageLayout>
  );
}