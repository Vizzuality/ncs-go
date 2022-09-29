import { useMemo } from 'react';

import Circle from './circle';
export interface CirclesProps {
  count: number;
  radius: number;
  color: number;
  size: number;
  startAngle?: number;
  progress: number;
}

const Circles = ({ count, radius, color, size, startAngle, progress }: CirclesProps) => {
  const positions = useMemo(() => {
    let pos = [];

    for (let i = 0; i < count; i++) {
      const angle = i * (360 / count) - 90 + startAngle;
      const randomAngle = i * (360 / count) - 90 + Math.random() * 180;
      const randomX = (radius / 100) * Math.cos((-randomAngle * Math.PI) / 180);
      const randomY = (radius / 100) * Math.sin((-randomAngle * Math.PI) / 180);

      const x = (radius / 100) * Math.cos((-angle * Math.PI) / 180);
      const y = (radius / 100) * Math.sin((-angle * Math.PI) / 180);
      const z = 0;
      pos.push({ id: i, x, y, z, initialX: randomX, initialY: randomY });
    }
    return pos;
  }, [count, radius, startAngle]);

  return (
    <>
      {positions.map((p) => (
        <Circle key={`${p.id}`} p={p} color={color} size={size} progress={progress} />
      ))}
    </>
  );
};

export default Circles;
