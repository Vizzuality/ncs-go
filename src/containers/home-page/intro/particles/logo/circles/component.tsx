import { useMemo } from 'react';

import { useHomeStore } from 'store/home';

import { useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

import { STEPS } from 'containers/home_old/intro/constants';

import Circle from './circle';
export interface CirclesProps {
  count: number;
  radius: number;
  color: number;
  size: number;
  startAngle?: number;
}

const Circles = ({ count, radius, color, size, startAngle }: CirclesProps) => {
  const step = useHomeStore((state) => state.animationStep);
  const { width, height } = useThree((state) => state.viewport);

  const positions = useMemo(() => {
    const { getPositions } = STEPS.find((s) => s.id === step);
    return getPositions({ count, radius, startAngle, width, height });
  }, [step, count, radius, startAngle, width, height]);

  const noise = useMemo(() => {
    const { getNoise } = STEPS.find((s) => s.id === step);
    return getNoise();
  }, [step]);

  const animations = useMemo(() => {
    const { getAnimations } = STEPS.find((s) => s.id === step);
    return getAnimations();
  }, [step]);

  return (
    <motion.group {...animations}>
      {positions.map((p) => (
        <Circle key={`${p.id}`} p={p} color={color} size={size} noise={noise} />
      ))}
    </motion.group>
  );
};

export default Circles;
