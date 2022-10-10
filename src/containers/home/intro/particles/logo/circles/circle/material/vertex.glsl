#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)
#pragma glslify: ease = require(glsl-easings/exponential-out)

uniform vec3 uPrevPos;
uniform vec3 uCurrentPos;

uniform float uTime;

uniform float uStep;
uniform float uPrevStep;

uniform float uNoise;
uniform float uPrevNoise;

uniform float uStartTime;
uniform float uDuration;
uniform float uProgress;

uniform vec2 uVelocity;
uniform vec2 uPrevVelocity;

varying vec2 vUv;

float PI = 3.1415926535897932384626433832795;

float easeOutExpo(float x) {
  return 1.0 - pow(2.0, -10.0 * x);;
}

vec2 pos() {
  if (uStep != uPrevStep) {
    float t = ease(uProgress);

    vec2 prev = vec2(uPrevPos.x + position.x, uPrevPos.y + position.y);
    vec2 current = vec2(uCurrentPos.x + position.x, uCurrentPos.y + position.y);

    return mix(prev, current, t);
  }

  return vec2(uCurrentPos.x + position.x, uCurrentPos.y + position.y);
}

vec2 noise() {
  if (uStep != uPrevStep) {
    float t = ease(uProgress);

    float prevX = snoise3(vec3(uPrevPos.xy, uTime * 0.25 * uPrevVelocity.x)) * uPrevNoise;
    float prevY = snoise3(vec3(uPrevPos.xy, uTime * 0.1 * uPrevVelocity.y)) * uPrevNoise;

    float x = snoise3(vec3(uCurrentPos.xy, uTime * 0.25 * uVelocity.x)) * uNoise;
    float y = snoise3(vec3(uCurrentPos.xy, uTime * 0.1 * uVelocity.y)) * uNoise;


    return mix(vec2(prevX, prevY), vec2(x, y), t);
  }

  if (uStep == uPrevStep) {
    float step0x = snoise3(vec3(uCurrentPos.xy, uTime * 0.25 * uVelocity.x)) * uNoise;
    float step0y = snoise3(vec3(uCurrentPos.xy, uTime * 0.1 * uVelocity.y)) * uNoise;
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