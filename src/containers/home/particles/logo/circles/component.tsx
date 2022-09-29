import { useMemo } from 'react';

export interface CirclesProps {
  count: number;
  radius: number;
  color: number;
  size: number;
  startAngle?: number;
}

const Circles = ({ count, radius, color, size, startAngle }: CirclesProps) => {
  const { positions } = useMemo(() => {
    let pos = [];

    for (let i = 0; i < count; i++) {
      const angle = i * (360 / count) - 90 + startAngle;
      const x = (radius / 100) * Math.cos((-angle * Math.PI) / 180);
      const y = (radius / 100) * Math.sin((-angle * Math.PI) / 180);
      const z = 0;
      pos.push({ x, y, z });
    }
    return {
      positions: pos,
    };
  }, [count, radius, startAngle]);

  return (
    <>
      {positions.map((p) => (
        <mesh key={`${p.x}-${p.y}-${p.z}`} position={[p.x, p.y, p.z]}>
          <circleGeometry args={[size / 100, 32]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </>
  );
};

export default Circles;
