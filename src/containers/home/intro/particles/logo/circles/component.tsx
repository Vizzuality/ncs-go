import { useMemo } from 'react';

import { useHomeStore } from 'store/home';

import { useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

import Circle from './circle';
import { STEPS } from './constants';
export interface CirclesProps {
  count: number;
  radius: number;
  color: number;
  size: number;
  startAngle?: number;
}

const Circles = ({ count, radius, color, size, startAngle }: CirclesProps) => {
  const step = useHomeStore((state) => state.step);
  const { width, height } = useThree((state) => state.viewport);

  const positions = useMemo(() => {
    return STEPS[step].getPositions({ count, radius, startAngle, width, height });
  }, [step, count, radius, startAngle, width, height]);

  const noise = useMemo(() => {
    return STEPS[step].getNoise();
  }, [step]);

  const animations = useMemo(() => {
    return STEPS[step].getAnimations();
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
