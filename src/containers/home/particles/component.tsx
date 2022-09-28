import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import Logo from './logo';

const Particles = () => {
  return (
    <div className="w-screen h-screen" style={{ background: '#011426' }}>
      <Canvas
        orthographic
        camera={{ zoom: 100 }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
      >
        {/* Light */}
        <ambientLight />

        {/* Controls */}
        <OrbitControls />

        {/* Meshes */}
        <Logo />
      </Canvas>
    </div>
  );
};

export default Particles;
