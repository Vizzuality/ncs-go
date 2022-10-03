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
          rotateZ: 0,
        },
        transition: {
          duration: 1000,
        },
      };
    },
    getNoise: () => {
      return 0.2;
    },
  },
  '1': {
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
          rotateZ: 360,
        },
        transition: {
          duration: 1000,
          // loop: Infinity,
          // ease: 'linear',
        },
      };
    },
    getNoise: () => {
      return 0.075;
    },
  },
  '2': {
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
          rotateZ: 90,
        },
        transition: {
          duration: 1000,
          // loop: Infinity,
          // ease: 'linear',
        },
      };
    },
    getNoise: () => {
      return 0.05;
    },
  },
  '3': {
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
          rotateZ: 0,
        },
        transition: {
          duration: 1000,
        },
      };
    },
    getNoise: () => {
      return 0.0;
    },
  },
};
