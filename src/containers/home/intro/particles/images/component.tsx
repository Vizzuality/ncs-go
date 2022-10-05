import { useMemo } from 'react';

import { useThree } from '@react-three/fiber';

import { IMAGES } from 'containers/home/intro/constants';

import CircleImage from './image';

const CircleImages = () => {
  const { width, height } = useThree((state) => state.viewport);

  const STEP_IMAGES = useMemo(() => {
    return IMAGES({ width, height });
  }, [width, height]);

  return (
    <group>
      {STEP_IMAGES.map(({ id, x, y, img, radius }) => (
        <CircleImage key={id} p={{ id: 1, x, y, z: 0.01 }} img={img} radius={radius} />
      ))}
    </group>
  );
};

export default CircleImages;
