import { useRef } from 'react';

import { extend, ReactThreeFiber, useFrame } from '@react-three/fiber';
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
  };
  color: number;
  size: number;
  progress: number;
}

const Circles = ({ p, size, color, progress }: CirclesProps) => {
  const materialRef = useRef(null);

  const COLOR = new Color(color);

  useFrame(({ clock }) => {
    materialRef.current.uTime = clock.elapsedTime;
  });

  return (
    <motion.mesh
      key={`${p.id}`}
      initial={{ x: p.x, y: p.y, z: p.z }}
      animate={{ x: p.x, y: p.y, z: p.z }}
    >
      <circleGeometry args={[size / 100, 32]} />
      <circleMaterial ref={materialRef} uColor={COLOR} uTime={0} uProgress={progress} transparent />
    </motion.mesh>
  );
};

export default Circles;
