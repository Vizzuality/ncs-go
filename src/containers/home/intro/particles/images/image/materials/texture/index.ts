import { shaderMaterial } from '@react-three/drei';
import FRAGMENT from 'raw-loader!glslify-loader!./fragment.glsl';
import VERTEX from 'raw-loader!glslify-loader!./vertex.glsl';

export const TextureMaterial = shaderMaterial(
  {
    uTexture: null,

    uPosX: 0,
    uPosY: 0,
    uPrevPos: [0, 0, 0],
    uCurrentPos: [0, 0, 0],

    uTime: 0,

    uNoise: 0,

    uVelocity: 0,
  },
  VERTEX,
  FRAGMENT
);

export default TextureMaterial;
