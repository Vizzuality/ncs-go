import { useMemo, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useTexture } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

import TextureMaterial from './material';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @ts-ignore
      textureMaterial: ReactThreeFiber.Object3DNode<TextureMaterial, typeof TextureMaterial>;
    }
  }
}
extend({ TextureMaterial });

export interface CircleImageProps {
  p: {
    id: number;
    x: number;
    y: number;
    z: number;
  };
  img: string;
  radius: number;
}

const CircleImage = ({ p, radius, img }: CircleImageProps) => {
  const textureMaterialRef = useRef(null);
  const step = useHomeStore((state) => state.step);
  const texture = useTexture(img);

  const ring = radius + radius * 0.05;

  const velocity = useMemo(() => {
    return Math.random();
  }, []);

  useFrame(() => {
    textureMaterialRef.current.uTime = performance.now() / 1000;
  });

  return (
    <motion.group
      position-x={p.x}
      position-y={p.y}
      position-z={p.z}
      initial={{ scale: 0 }}
      animate={{ scale: step === 3 ? 1 : 0 }}
      transition={{
        delay: step === 3 ? 0.4 : 0,
      }}
    >
      <mesh>
        <circleGeometry args={[radius / 100, 64]} />
        <textureMaterial
          ref={textureMaterialRef}
          uTime={0}
          uTexture={texture}
          uVelocity={velocity}
        />
      </mesh>

      <mesh>
        <ringGeometry args={[ring / 100, (ring + ring * 0.01) / 100, 64]} />
        <meshBasicMaterial color="#AAAAAA" />
      </mesh>
    </motion.group>
  );
};

export default CircleImage;
