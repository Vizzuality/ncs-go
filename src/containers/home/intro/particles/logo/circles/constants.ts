export const STEPS = {
  '0': {
    getPositions: ({ width, height, count }) => {
      let pos = [];

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width - width / 2;
        const y = Math.random() * height - height / 2;
        const z = 0;
        pos.push({ id: i, x, y, z });
      }
      return pos;
    },
    getAnimations: () => {
      return {
        animate: {
          y: 0,
          rotateZ: 0,
        },
        transition: {
          duration: 0.1,
        },
      };
    },
    getNoise: () => {
      return 0.5;
    },
  },
  '1': {
    getPositions: ({ radius, count }) => {
      let pos = [];

      for (let i = 0; i < count; i++) {
        const randomAngle = i * (360 / count) - 90 + Math.random() * 180;
        const x = (radius / 100) * Math.cos((-randomAngle * Math.PI) / 180);
        const y = (radius / 100) * Math.sin((-randomAngle * Math.PI) / 180);
        const z = 0;
        pos.push({ id: i, x, y, z });
      }
      return pos;
    },
    getAnimations: () => {
      return {
        animate: {
          y: 0.75,
          rotateZ: -360 * (Math.PI / 180),
        },
        transition: {
          rotateZ: {
            duration: 50,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          },
        },
      };
    },
    getNoise: () => {
      return 0.075;
    },
  },
  '2': {
    getPositions: ({ count }) => {
      let pos = [];

      for (let i = 0; i < count; i++) {
        const randomAngle = i * (360 / count) - 90 + Math.random() * 180;
        const x = Math.cos((-randomAngle * Math.PI) / 180);
        const y = Math.sin((-randomAngle * Math.PI) / 180);
        const z = 0;
        pos.push({ id: i, x, y, z });
      }
      return pos;
    },
    getAnimations: () => {
      return {
        animate: {
          y: 0.75,
          rotateZ: -360 * (Math.PI / 180),
        },
        transition: {
          rotateZ: {
            duration: 50,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          },
        },
      };
    },
    getNoise: () => {
      return 0.075;
    },
  },
  '3': {
    getPositions: ({ count, width, height }) => {
      let pos = [];

      for (let i = 0; i < count; i++) {
        const randomAngle = i * (360 / count) - 90 + Math.random() * 180;

        const xCenter = [width / 5 - width / 2, (width * 4) / 5 - width / 2];
        const yCenter = [height / 5 - height / 2, (height * 4) / 5 - height / 2];

        const x = xCenter[Math.round(Math.random())] + Math.cos((-randomAngle * Math.PI) / 180);
        const y = yCenter[Math.round(Math.random())] + Math.sin((-randomAngle * Math.PI) / 180);
        const z = 0;
        pos.push({ id: i, x, y, z });
      }
      return pos;
    },
    getAnimations: () => {
      return {
        animate: {
          y: 0,
          rotateZ: 0,
        },
        transition: {
          duration: 0.1,
        },
      };
    },
    getNoise: () => {
      return 0.1;
    },
  },
  '4': {
    getPositions: ({ radius, count, startAngle }) => {
      let pos = [];

      for (let i = 0; i < count; i++) {
        const angle = i * (360 / count) - 90 + startAngle;

        const x = (radius / 100) * Math.cos((-angle * Math.PI) / 180);
        const y = (radius / 100) * Math.sin((-angle * Math.PI) / 180);
        const z = 0;
        pos.push({ id: i, x, y, z });
      }
      return pos;
    },
    getAnimations: () => {
      return {
        animate: {
          y: 0.75,
          rotateZ: 0,
        },
        transition: {
          duration: 0.1,
        },
      };
    },
    getNoise: () => {
      return 0.0;
    },
  },
  '5': {
    getPositions: ({ radius, count, startAngle }) => {
      let pos = [];

      for (let i = 0; i < count; i++) {
        const angle = i * (360 / count) - 90 + startAngle;

        const x = (radius / 100) * Math.cos((-angle * Math.PI) / 180);
        const y = (radius / 100) * Math.sin((-angle * Math.PI) / 180);
        const z = 0;
        pos.push({ id: i, x, y, z });
      }
      return pos;
    },
    getAnimations: () => {
      return {
        animate: {
          y: 0.75,
          rotateZ: 0,
        },
        transition: {
          duration: 0.1,
        },
      };
    },
    getNoise: () => {
      return 0.0;
    },
  },
};
