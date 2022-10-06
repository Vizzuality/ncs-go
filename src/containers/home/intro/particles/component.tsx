import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

// import Images from './images';
import Logo from './logo';

const Particles = () => {
  return (
    <div className="w-full h-full" style={{ background: '#011426' }}>
      <Canvas
        orthographic
        camera={{ zoom: 100 }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
      >
        {/* Light */}
        <ambientLight />

        {/* Meshes */}
        {/* <Images /> */}
        <Logo />
      </Canvas>
    </div>
  );
};

export default Particles;
