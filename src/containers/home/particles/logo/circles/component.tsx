import { useMemo } from 'react';

import { useThree } from '@react-three/fiber';

import Circle from './circle';
import { STEPS } from './constants';
export interface CirclesProps {
  count: number;
  radius: number;
  color: number;
  size: number;
  startAngle?: number;
  step: number;
}

const Circles = ({ count, radius, color, size, startAngle, step }: CirclesProps) => {
  const { width, height } = useThree((state) => state.viewport);

  const positions = useMemo(() => {
    return STEPS[step].getPositions({ count, radius, startAngle, width, height });
  }, [step, count, radius, startAngle, width, height]);

  return (
    <>
      {positions.map((p) => (
        <Circle key={`${p.id}`} p={p} color={color} size={size} step={step} />
      ))}
    </>
  );
};

export default Circles;
