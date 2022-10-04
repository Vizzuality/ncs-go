uniform float uTime;

uniform float uStartTime;
uniform float uDuration;

uniform vec3 uColor;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  float opacity = 1.0;

  gl_FragColor = vec4(uColor, opacity);
}