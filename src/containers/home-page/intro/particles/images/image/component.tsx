import { useMemo, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useTexture } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { Color } from 'three';

import { TextureMaterial, RingMaterial } from './materials';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @ts-ignore
      textureMaterial: ReactThreeFiber.Object3DNode<TextureMaterial, typeof TextureMaterial>;
      // @ts-ignore
      ringMaterial: ReactThreeFiber.Object3DNode<RingMaterial, typeof RingMaterial>;
    }
  }
}
extend({ TextureMaterial, RingMaterial });

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
  const ringMaterialRef = useRef(null);

  const step = useHomeStore((state) => state.step);
  const texture = useTexture(img);

  const ring = radius + radius * 0.05;

  const velocity = useMemo(() => {
    return Math.random();
  }, []);

  const U_COLOR = useMemo(() => {
    return new Color(0xaaaaaa);
  }, []);

  useFrame(() => {
    textureMaterialRef.current.uTime = performance.now() / 1000;
    ringMaterialRef.current.uTime = performance.now() / 1000;
  });

  return (
    <motion.group
      initial={{ x: 0, y: 0.75, z: 0, scale: 0 }}
      animate={{
        ...(step === 3 && {
          x: p.x,
          y: p.y,
          z: p.z,
          scale: 1,
        }),

        ...(step !== 3 && {
          x: 0,
          y: 0.75,
          z: 0,
          scale: 0,
        }),
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <motion.group
        initial={{ scale: 0.95 }}
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 10 + velocity * 10,
          ease: 'linear',
        }}
      >
        <motion.mesh
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: Math.PI * 2 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10 + velocity * 10,
            ease: 'linear',
          }}
        >
          <ringGeometry args={[ring / 100, (ring + ring * 0.01) / 100, 64]} />
          <ringMaterial
            ref={ringMaterialRef}
            uTime={0}
            uVelocity={velocity}
            uNoise={0.1}
            uRadius={radius / 100}
            uCurrentPos={[p.x, p.y, p.z]}
            uColor={U_COLOR}
            transparent
          />
        </motion.mesh>

        <mesh>
          <circleGeometry args={[radius / 100, 64]} />
          <textureMaterial
            ref={textureMaterialRef}
            uTime={0}
            uTexture={texture}
            uVelocity={velocity}
            uRadius={radius / 100}
            uCurrentPos={[p.x, p.y, p.z]}
            uNoise={0.1}
            uTextureScale={[1, 1]}
            transparent
          />
        </mesh>
      </motion.group>
    </motion.group>
  );
};

export default CircleImage;
