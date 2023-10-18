import { shaderMaterial } from '@react-three/drei';
import glslify from 'glslify';
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
    uDuration: 5,
    uProgress: 0,

    uRadius: 0,
    uColor: [1, 1, 0],

    uStep: 0,
    uPrevStep: 0,

    uNoise: 0,
    uPrevNoise: 0,

    uVelocity: [0, 0],
    uPrevVelocity: [0, 0],
  },
  glslify(VERTEX),
  glslify(FRAGMENT)
);

export default CircleMaterial;
