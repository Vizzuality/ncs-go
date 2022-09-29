import { useMemo } from 'react';

import { extend, useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

import CircleMaterial from './circleMaterial';

extend({ CircleMaterial });
export interface CirclesProps {
  count: number;
  radius: number;
  color: number;
  size: number;
  startAngle?: number;
  progress: number;
}

const Circles = ({ count, radius, color, size, startAngle, progress }: CirclesProps) => {
  const { width, height } = useThree((state) => state.viewport);

  const { positions } = useMemo(() => {
    let pos = [];
    const p = 1 - progress;

    for (let i = 0; i < count; i++) {
      const angle = i * (360 / count) - 90 + startAngle;
      const randomX = (Math.random() * width - width / 2) * p;
      const x = (radius / 100) * Math.cos((-angle * Math.PI) / 180) + randomX;
      const randomY = ((Math.random() * height) / 2 - height / 2 / 2) * p;
      const y = (radius / 100) * Math.sin((-angle * Math.PI) / 180) + randomY;
      const z = 0;
      pos.push({ id: i, x, y, z });
    }
    return {
      positions: pos,
    };
  }, [count, radius, startAngle, progress, height, width]);

  return (
    <>
      {positions.map((p) => (
        <motion.mesh
          key={`${p.id}`}
          initial={{ x: p.x, y: p.y, z: p.z }}
          animate={{ x: p.x, y: p.y, z: p.z }}
        >
          <circleGeometry args={[size / 100, 32]} />
          <motion.meshBasicMaterial
            color={color}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </motion.mesh>
      ))}
    </>
  );
};

export default Circles;
