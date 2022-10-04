import { useState } from 'react';

import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import Logo from './logo';

const Particles = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="w-screen h-screen" style={{ background: '#011426' }}>
      <input
        type="range"
        min={0}
        max={3}
        step={1}
        value={step}
        onChange={(e) => {
          setStep(parseInt(e.target.value, 10));
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
        <Logo step={step} />
      </Canvas>
    </div>
  );
};

export default Particles;
