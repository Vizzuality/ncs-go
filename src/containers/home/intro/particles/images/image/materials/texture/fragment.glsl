uniform float uTime;
uniform float uVelocity;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec4 color = texture2D(uTexture, uv);
  float opacity = smoothstep(0.0, 0.5, uv.y) + 0.1;

  gl_FragColor = vec4(color);
}