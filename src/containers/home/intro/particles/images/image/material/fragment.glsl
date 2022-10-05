uniform float uTime;
uniform float uVelocity;
uniform sampler2D uTexture;

varying vec2 vUv;

vec4 getFromColor(vec2 uv) {
  return texture2D(uTexture, uv);
}

vec4 getToColor(vec2 uv) {
  return texture2D(uTexture, uv);
}

vec4 burn (vec2 uv) {
  vec3 burnColor = vec3(0.9, 0.4, 0.2);
  float progress = (sin(uTime * uVelocity) * 0.5 + 0.5);

  return mix(
    getFromColor(uv) + vec4(progress*burnColor, 1.0),
    getToColor(uv) + vec4((1.0-progress)*burnColor, 1.0),
    progress
  );
}

vec4 ripple (vec2 uv) {
  float amplitude = 100.0;
  float speed = 50.0;
  float progress = (sin(uTime * uVelocity) * 0.5 + 0.5);

  vec2 dir = uv - vec2(0.5);
  float dist = length(dir);
  vec2 offset = dir * (sin(progress * dist * amplitude - progress * speed) + 0.5) / 30.0;

  return mix(
    getFromColor(uv + offset),
    getToColor(uv),
    smoothstep(0.2, 1.0, progress)
  );
}

vec4 warp (vec2 p) {
  float progress = (sin(uTime * uVelocity) * 0.5 + 0.5);
  progress = smoothstep(0.0, 1.0, (progress * 2.0 + p.x - 1.0));
  return mix(getFromColor((p - 0.5)*(1.0 - progress) + 0.5), getToColor((p - 0.5) * progress + 0.5), progress);
}

void main() {
  vec2 uv = vUv;
  vec4 color = ripple(uv);

  gl_FragColor = color;
}