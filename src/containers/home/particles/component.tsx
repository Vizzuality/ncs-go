import { useState } from 'react';

import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import Logo from './logo';

const Particles = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="w-screen h-screen" style={{ background: '#011426' }}>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={progress}
        onChange={(e) => {
          setProgress(parseFloat(e.target.value));
        }}
      />
      <Canvas
        orthographic
        camera={{ zoom: 100 }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
      >
        {/* Light */}
        <ambientLight />

        {/* Meshes */}
        <Logo progress={progress} />
      </Canvas>
    </div>
  );
};

export default Particles;
