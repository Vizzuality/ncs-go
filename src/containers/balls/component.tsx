import React, { useCallback } from 'react';

import Particles from 'react-tsparticles';

import { loadFull } from 'tsparticles';

const Balls: React.FC = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#011426',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'attract',
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 100,
              duration: 5,
              rotate: {
                x: 5,
                y: 20,
              },
            },
          },
        },
        particles: {
          color: {
            value: ['#24BFFF', '#0080FF'],
          },
          opacity: {
            value: { min: 0.25, max: 1 },
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 0.25,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 8 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Balls;
