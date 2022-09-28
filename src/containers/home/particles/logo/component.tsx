import { useMemo, useRef } from 'react';

import { useTexture } from '@react-three/drei';
import { PointsProps, useFrame } from '@react-three/fiber';

const COLORS = ['#02C6EC', '#FFFFFF'];

const hex2rgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  // return {r, g, b} // return an object
  return [r, g, b];
};
const ParticlesLogo = () => {
  const pointsRef = useRef<PointsProps>();
  const count = 100;

  const { positions, colors } = useMemo(() => {
    let pos = [];
    let clrs = [];

    for (let i = 0; i < count; i++) {
      let x = (i % 10) - 5;
      let y = Math.floor(i / 10) - 5;
      let z = Math.random() * 5 - 2.5;
      let color = COLORS[Math.floor(Math.random() * 2)];
      pos.push(x, y, z);
      clrs.push(...hex2rgb(color));
    }
    return {
      positions: new Float32Array(pos),
      colors: new Float32Array(clrs),
    };
  }, [count]);

  const CIRCLE_PNG = useTexture('/images/circle.png');

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.005;
    }
  });

  console.log(colors);

  return (
    <points ref={pointsRef}>
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
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1}
      />
    </points>
  );
};

export default ParticlesLogo;
