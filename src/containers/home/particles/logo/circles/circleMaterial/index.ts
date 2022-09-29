import { shaderMaterial } from '@react-three/drei';
import FRAGMENT from 'raw-loader!glslify-loader!./fragment.glsl';
import VERTEX from 'raw-loader!glslify-loader!./vertex.glsl';

export const CircleMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  VERTEX,
  FRAGMENT
);

export default CircleMaterial;
