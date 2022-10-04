import { useMemo } from 'react';

import { useTexture } from '@react-three/drei';

export interface CirclesProps {
  count: number;
  radius: number;
  color: [number, number, number];
  size: number;
  startAngle?: number;
}

const Circles = ({ count, radius, color, size, startAngle }: CirclesProps) => {
  const { positions, colors } = useMemo(() => {
    let pos = [];
    let clrs = [];

    for (let i = 0; i < count; i++) {
      const angle = i * (360 / count) - 90 + startAngle;
      const x = (radius / 100) * Math.cos((-angle * Math.PI) / 180);
      const y = (radius / 100) * Math.sin((-angle * Math.PI) / 180);
      const z = 0;
      pos.push(x, y, z);
      clrs.push(...color);
    }
    return {
      positions: new Float32Array(pos),
      colors: new Float32Array(clrs),
    };
  }, [count, radius, color, startAngle]);

  const CIRCLE_PNG = useTexture('/images/circle.png');

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3} //
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3} //
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        map={CIRCLE_PNG}
        vertexColors
        size={size}
        sizeAttenuation
        transparent={false}
        alphaTest={0.1}
        opacity={1}
      />
    </points>
  );
};

export default Circles;
