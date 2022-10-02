import { useEffect, useMemo, useRef, useState } from 'react';

import { extend, ReactThreeFiber, useFrame } from '@react-three/fiber';
import { useSpring } from 'framer-motion';
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
  step: number;
}

const Circles = ({ p, size, color, step }: CirclesProps) => {
  const DURATION = 1000;

  const [prevPos, setPrevPos] = useState({ x: p.x, y: p.y });

  const meshRef = useRef(null);
  const materialRef = useRef(null);
  const lastStepRef = useRef(step);

  const COLOR = new Color(color);

  const x = useSpring(p.x, {
    duration: DURATION,
  });
  const y = useSpring(p.y, {
    duration: DURATION,
  });

  const velocity = useMemo(() => {
    return Math.random();
  }, []);

  useFrame(({ clock }) => {
    materialRef.current.uTime = clock.elapsedTime * velocity;
  });

  useEffect(() => {
    x.set(p.x);
    y.set(p.y);

    setTimeout(() => {
      lastStepRef.current = step;
      setPrevPos({ x: p.x, y: p.y });
    }, DURATION);
  }, [x, y, p]);

  return (
    <motion.mesh
      ref={meshRef}
      key={`${p.id}`}
      initial={{ x: p.x, y: p.y }}
      position-x={x}
      position-y={y}
    >
      <circleGeometry args={[size / 100, 32]} />
      <motion.circleMaterial
        ref={materialRef}
        // Position
        uPrevPos={[prevPos.x, prevPos.y, 0]}
        uCurrentPos={[p.x, p.y, 0]}
        uPosX={x}
        uPosY={y}
        // Color
        uColor={COLOR}
        // Step
        uStep={step}
        uLastStep={lastStepRef.current}
        // Time
        uTime={0}
        // Misc
        transparent
      />
    </motion.mesh>
  );
};

export default Circles;
