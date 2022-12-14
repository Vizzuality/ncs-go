import { Canvas } from '@react-three/fiber';
import { NoToneMapping } from 'three';

// import Images from './images';
import Logo from './logo';

const Particles = () => {
  return (
    <div className="w-full h-full bg-gray-900">
      <Canvas
        orthographic
        camera={{ zoom: 100 }}
        gl={{ antialias: true, toneMapping: NoToneMapping }}
        linear
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
