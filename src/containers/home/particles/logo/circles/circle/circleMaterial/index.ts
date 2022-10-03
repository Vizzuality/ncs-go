import { shaderMaterial } from '@react-three/drei';
import FRAGMENT from 'raw-loader!glslify-loader!./fragment.glsl';
import VERTEX from 'raw-loader!glslify-loader!./vertex.glsl';

export const CircleMaterial = shaderMaterial(
  {
    uPosX: 0,
    uPosY: 0,
    uPrevPos: [0, 0, 0],
    uCurrentPos: [0, 0, 0],

    uTime: 0,
    uStartTime: 0,
    uDuration: 1000,

    uRadius: 0,
    uColor: [1, 1, 0],

    uStep: 0,
    uPrevStep: 0,

    uNoise: 0,
    uPrevNoise: 0,

    uVelocity: 0,
  },
  VERTEX,
  FRAGMENT
);

export default CircleMaterial;