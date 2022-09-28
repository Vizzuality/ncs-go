import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Logo from './logo';

const Particles = () => {
  return (
    <div className="w-screen h-screen" style={{ background: '#011426' }}>
      <Canvas camera={{ position: [20, 0, 0], fov: 75 }}>
        <OrbitControls />
        <ambientLight />

        <Logo />
      </Canvas>
    </div>
  );
};

export default Particles;
