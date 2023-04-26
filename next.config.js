const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')(['three']);
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // ? https://github.com/vercel/next.js/issues/7755#issuecomment-812805708
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });

    return config;
  },

  // ? https://nextjs.org/docs/advanced-features/compiler#why-swc
  swcMinify: false,
  // ? https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files
  output: 'standalone',
};

module.exports = withPlugins(
  [
    withTM(),
    withOptimizedImages({
      optimizeImages: false,
    }),
  ],
  nextConfig
);
