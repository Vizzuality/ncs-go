export const getSpiralPoints = (count: number, radius: number, startAngle: number) => {
  const points = [];
  const angleStep = 0.175;
  const radiusStep = radius / count;

  for (let i = 0; i < count; i++) {
    const angle = startAngle + i * angleStep;
    const r = i * radiusStep;

    points.push({
      id: i,
      x: r * Math.cos(angle) - 0.001,
      y: r * Math.sin(angle) - 0.001,
      z: 0,
    });
  }

  return points;
};

export const IMAGES = ({ width, height }) => [
  {
    id: 1,
    img: '/images/home/img-1.jpeg',
    x: (width * 0.75) / 5 - width / 2,
    y: (height * 3.75) / 5 - height / 2,
    radius: 150,
  },
  {
    id: 2,
    img: '/images/home/img-2.jpeg',
    x: (width * 4.25) / 5 - width / 2,
    y: (height * 3.75) / 5 - height / 2,
    radius: 112,
  },
  {
    id: 3,
    img: '/images/home/img-3.jpeg',
    x: width / 5 - width / 2,
    y: height / 5 - height / 2,
    radius: 112,
  },
  {
    id: 4,
    img: '/images/home/img-4.jpeg',
    x: (width * 4) / 5 - width / 2,
    y: height / 5 - height / 2,
    radius: 150,
  },
];

export const STEPS = [
  {
    id: 0,
    content: (
      <div className="relative">
        <div className="max-w-2xl">
          <p>
            Nature can provide up to 30% of the emissions reductions needed to meet the Paris
            Agreement targets.
          </p>
        </div>
      </div>
    ),
    getPositions: ({ width, height, count }) => {
      let pos = [];

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width - width / 2;
        const y = -0.75 + Math.random() * height - height / 2;
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
      return 0.5;
    },
  },
  {
    id: 1,
    content: (
      <div className="relative -translate-y-20">
        <div className="w-48 h-48 mx-auto" />
        <div className="absolute w-screen max-w-2xl mt-10 text-center -translate-x-1/2 left-1/2 top-full">
          <p>But effective nature and climate action needs more than just commitments.</p>
        </div>
      </div>
    ),
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
          duration: 0.1,
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
  {
    id: 2,
    content: (
      <div className="relative -translate-y-20">
        <div className="w-48 h-48 mx-auto" />
        <div className="absolute w-screen max-w-2xl mt-10 text-center -translate-x-1/2 left-1/2 top-full">
          <p>Science. Policy. People.</p>
          <p>They all need to come together.</p>
        </div>
      </div>
    ),
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
  {
    id: 3,
    content: (
      <div className="relative -translate-y-20">
        <div className="w-48 h-48 mx-auto" />
        <div className="absolute w-screen max-w-2xl mt-10 text-center -translate-x-1/2 left-1/2 top-full">
          <p>
            To protect, manage and restore our natural ecosystems, creating jobs, protecting
            livelihoods, increasing biodiversity - and absorbing carbon from the atmosphere.
          </p>
        </div>
      </div>
    ),
    getPositions: ({ count }) => {
      let pos = [];

      const SPIRAL_POINTS = getSpiralPoints(120, 1.1, 0);

      for (let i = 0; i < count; i++) {
        const { x, y, z } = SPIRAL_POINTS[Math.floor(Math.random() * SPIRAL_POINTS.length)];
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
      return 0.05;
    },
  },
  {
    id: 4,
    content: (
      <div className="relative -translate-y-20">
        <div className="w-48 h-48 mx-auto" />
        <div className="absolute w-screen max-w-2xl mt-10 text-center -translate-x-1/2 left-1/2 top-full">
          <p className="uppercase tracking-[0.32em]">Coming soon</p>
        </div>
      </div>
    ),
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
  {
    id: 5,
    content: (
      <div className="relative -translate-y-20">
        <div className="w-48 h-48 mx-auto" />
        <div className="absolute w-screen max-w-2xl mt-10 text-center -translate-x-1/2 left-1/2 top-full">
          <h1 className="text-2xl font-semibold tracking-wider md:text-3xl">naturebase</h1>
          <h2 className="md:text-lg">natural climate solutions in action</h2>
        </div>
      </div>
    ),
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
];
