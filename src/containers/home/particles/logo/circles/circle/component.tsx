import { useEffect, useMemo, useRef } from 'react';

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
  noise: number;
}

const Circles = ({ p, size, color, step, noise }: CirclesProps) => {
  const DURATION = 500;

  const meshRef = useRef(null);
  const materialRef = useRef(null);

  const prevPos = useRef(p);
  const prevStep = useRef(step);

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

  useFrame(() => {
    materialRef.current.uTime = performance.now() / 1000;
    materialRef.current.uStep = step;
    materialRef.current.uCurrentPos = [p.x, p.y, p.z];
  }, -1);

  useEffect(() => {
    materialRef.current.uStartTime = performance.now() / 1000;
    materialRef.current.uStep = step;
    materialRef.current.uPrevStep = prevStep.current;

    x.set(p.x);
    y.set(p.y);

    setTimeout(() => {
      materialRef.current.uPrevPos = [p.x, p.y, p.z];
      materialRef.current.uPrevStep = step;

      prevStep.current = step;
    }, DURATION);
  }, [x, y, p, step]);

  return (
    <motion.mesh ref={meshRef} key={`${p.id}`} position-x={x} position-y={y}>
      <circleGeometry args={[size / 100, 32]} />
      <motion.circleMaterial
        ref={materialRef}
        // Position
        uPosX={x}
        uPosY={y}
        uPrevPos={prevPos.current}
        uCurrentPos={[p.x, p.y, p.z]}
        // Color
        uRadius={size / 100}
        uColor={COLOR}
        // Step
        uStep={step}
        uPrevStep={prevStep.current}
        // Noise
        uNoise={noise}
        uPrevNoise={noise}
        // Time
        uTime={0}
        // Animation
        uStartTime={0}
        uVelocity={velocity}
        uDuration={DURATION / 1000}
        // Misc
        transparent
      />
    </motion.mesh>
  );
};

export default Circles;
