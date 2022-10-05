uniform float uTime;
uniform float uVelocity;
uniform vec3 uColor;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  float opacity = smoothstep(0.0, 0.5, uv.y) + 0.1;

  gl_FragColor = vec4(uColor, opacity);
}