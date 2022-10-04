uniform vec3 uPrevPos;
uniform vec3 uCurrentPos;

uniform float uTime;

uniform float uStep;
uniform float uPrevStep;

uniform float uNoise;
uniform float uPrevNoise;

uniform float uStartTime;
uniform float uVelocity;
uniform float uDuration;
uniform float uProgress;

varying vec2 vUv;

//
// Description : Array and textureless GLSL 2D simplex noise function.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+10.0)*x);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
  // First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  // Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  // Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  // Gradients: 41 points uniformly over a line, mapped onto a diamond.
  // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  // Normalise gradients implicitly by scaling m
  // Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  // Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float PI = 3.1415926535897932384626433832795;

float easeOutExpo(float x) {
  return 1.0 - pow(2.0, -10.0 * x);;
}

vec2 pos() {
  if (uStep != uPrevStep) {
    float t = easeOutExpo(uProgress);

    vec2 prev = vec2(uPrevPos.x + position.x, uPrevPos.y + position.y);
    vec2 current = vec2(uCurrentPos.x + position.x, uCurrentPos.y + position.y);

    return mix(prev, current, t);
  }

  return vec2(uCurrentPos.x + position.x, uCurrentPos.y + position.y);
}

vec2 noise() {
  if (uStep != uPrevStep) {
    float t = easeOutExpo(uProgress);

    float prevX = snoise(uPrevPos.xy + sin(uTime * 0.25 * uVelocity)) * uPrevNoise;
    float prevY = snoise(uPrevPos.xy + sin(uTime * 0.1 * uVelocity)) * uPrevNoise;

    float x = snoise(uCurrentPos.xy + sin(uTime * 0.25 * uVelocity)) * uNoise;
    float y = snoise(uCurrentPos.xy + sin(uTime * 0.1 * uVelocity)) * uNoise;


    return mix(vec2(prevX, prevY), vec2(x, y), t);
  }

  if (uStep == uPrevStep) {
    float step0x = snoise(uCurrentPos.xy + sin(uTime * 0.25 * uVelocity)) * uNoise;
    float step0y = snoise(uCurrentPos.xy + sin(uTime * 0.1 * uVelocity)) * uNoise;
    return vec2(step0x, step0y);
  }
}

void main() {
  vUv = uv;

  vec2 p = pos();
  vec2 n = noise();
  vec4 final_position = projectionMatrix * modelViewMatrix * vec4(p.x + n.x, p.y + n.y, uCurrentPos.z, 1.0);

  gl_Position = final_position;
}