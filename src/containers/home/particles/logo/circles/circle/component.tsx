import { useEffect, useMemo, useRef } from 'react';

import { extend, ReactThreeFiber, useFrame } from '@react-three/fiber';
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

  const velocity = useMemo(() => {
    return Math.random();
  }, []);

  useFrame(() => {
    if (step !== materialRef.current.uStep) {
      materialRef.current.uProgress = 0;
    }

    materialRef.current.uStep = step;
    materialRef.current.uCurrentPos = [p.x, p.y, p.z];
    materialRef.current.uTime = performance.now() / 1000;

    if (step !== materialRef.current.uPrevStep) {
      materialRef.current.uProgress = materialRef.current.uProgress + 0.01 / (DURATION / 1000);
    }

    if (materialRef.current.uProgress > 1) {
      materialRef.current.uPrevPos = [p.x, p.y, p.z];
      materialRef.current.uPrevStep = step;
      materialRef.current.uProgress = 0;
      prevStep.current = step;
    }
  });

  useEffect(() => {
    materialRef.current.uProgress = 0;
  }, [step]);

  return (
    <mesh ref={meshRef} key={`${p.id}`}>
      <circleGeometry args={[size / 100, 32]} />
      <circleMaterial
        ref={materialRef}
        // Position
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
        uProgress={0}
        uStartTime={0}
        uVelocity={velocity}
        uDuration={DURATION / 1000}
        // Misc
        transparent
      />
    </mesh>
  );
};

export default Circles;
