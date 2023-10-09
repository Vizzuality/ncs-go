uniform float uTime;
uniform float uVelocity;
uniform vec3 uColor;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  float opacity1 = smoothstep(0.0, 0.15, uv.y) * smoothstep(0.85, 1.0, uv.y);
  float opacity2 = smoothstep(0.0, 0.15, 1.0 - uv.y) * smoothstep(0.85, 1.0, 1.0 - uv.y);
  gl_FragColor = vec4(uColor, opacity1 + opacity2);
}