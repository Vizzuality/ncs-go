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
      <div className="space-y-10">
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
  {
    id: 1,
    content: (
      <div className="space-y-10">
        <div className="w-48 h-48 mx-auto" />
        <div className="max-w-2xl">
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
          duration: 0.5,
          ease: 'easeInOut',
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
      <div className="space-y-10">
        <div className="w-48 h-48 mx-auto" />
        <div className="max-w-2xl">
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
      <div className="space-y-10">
        <div className="max-w-2xl">
          <p>
            To protect, manage and restore our natural ecosystems, creating jobs, protecting
            livelihoods, increasing biodiversity - and absorbing carbon from the atmosphere.
          </p>
        </div>
      </div>
    ),
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

    // getPositions: ({ count, width, height }) => {
    //   let pos = [];

    //   for (let i = 0; i < count; i++) {
    //     // const randomAngle = i * (360 / count) - 90 + Math.random() * 180;

    //     const randomPositions = IMAGES({ width, height });
    //     const randomImg = randomPositions[Math.floor(Math.random() * 4)];

    //     const x = randomImg.x; // + (randomImg.radius / 100) * Math.cos((-randomAngle * Math.PI) / 180);
    //     const y = randomImg.y; // + (randomImg.radius / 100) * Math.sin((-randomAngle * Math.PI) / 180);
    //     const z = 0;
    //     pos.push({ id: i, x, y, z });
    //   }
    //   return pos;
    // },
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
      return 0.2;
    },
  },
  {
    id: 4,
    content: (
      <div className="space-y-10">
        <div className="w-48 h-48 mx-auto" />
        <div className="max-w-2xl">
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
      <div className="space-y-10">
        <div className="w-48 h-48 mx-auto" />
        <div className="max-w-2xl text-center">
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
