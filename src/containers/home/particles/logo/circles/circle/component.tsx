import { useRef } from 'react';

import { extend, ReactThreeFiber, useFrame } from '@react-three/fiber';
import { useMotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { Color } from 'three';

import CircleMaterial from './circleMaterial';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @ts-ignore
      circleMaterial: ReactThreeFiber.Object3DNode<CircleMaterial, typeof CircleMaterial>;
    }
  }
}
extend({ CircleMaterial });

export interface CirclesProps {
  p: {
    id: number;
    x: number;
    y: number;
    z: number;
    initialX: number;
    initialY: number;
  };
  color: number;
  size: number;
  progress: number;
}

const Circles = ({ p, size, color, progress }: CirclesProps) => {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  const COLOR = new Color(color);

  const progressMotionValue = useMotionValue(progress);
  progressMotionValue.set(progress);
  const x = useTransform(progressMotionValue, [0, 1], [p.initialX, p.x]);
  const y = useTransform(progressMotionValue, [0, 1], [p.initialY, p.y]);

  useFrame(({ clock }) => {
    meshRef.current.rotation.z += 0.001 * (1 - progress);
    materialRef.current.uTime = clock.elapsedTime;
  });

  return (
    <motion.mesh
      ref={meshRef}
      key={`${p.id}`}
      initial={{ x: p.initialX, y: p.initialY }}
      animate={{ x: x.get(), y: y.get() }}
    >
      <circleGeometry args={[size / 100, 32]} />
      <circleMaterial
        ref={materialRef}
        uPos={[p.x, p.y, p.z]}
        uColor={COLOR}
        uProgress={progress}
        uTime={0}
        transparent
      />
    </motion.mesh>
  );
};

export default Circles;
