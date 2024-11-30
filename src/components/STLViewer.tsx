import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

interface STLViewerProps {
  url: string;
}

function Model({ url }: { url: string }) {
  const [geometry, setGeometry] = React.useState<THREE.BufferGeometry | null>(null);

  React.useEffect(() => {
    const loader = new STLLoader();
    loader.load(url, (geometry) => {
      setGeometry(geometry);
    });
  }, [url]);

  if (!geometry) {
    return null;
  }

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="#888888" />
    </mesh>
  );
}

export function STLViewer({ url }: STLViewerProps) {
  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model url={url} />
      <OrbitControls />
    </Canvas>
  );
}