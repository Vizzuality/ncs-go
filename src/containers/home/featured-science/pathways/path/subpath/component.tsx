import React, { useMemo } from 'react';

import { motion } from 'framer-motion';

const SubPath = ({ id, title, color, index, width, height, lenght, center, onClick }) => {
  const VARIANTS = useMemo(() => {
    const angle = index * (360 / lenght) - 90;

    const x = center.x + width / 2 + ((width + width / 2) / 2) * Math.cos((angle * Math.PI) / 180);
    const y =
      center.y + height / 2 + ((height + width / 2) / 2) * Math.sin((angle * Math.PI) / 180);

    return {
      initial: {
        x: center.x + width / 2,
        y: center.y + height / 2,
        opacity: 0,
      },
      animate: {
        x,
        y,
        opacity: 1,
        transition: {
          type: 'spring',
          delay: 0.25 + index * 0.05,
          bounce: 0.4,
          duration: 0.75,
        },
      },
      exit: {
        x: center.x + width / 2,
        y: center.y + height / 2,
        opacity: 0,
        transition: {
          delay: 0,
          duration: 0.1,
        },
      },
    };
  }, [width, height, index, center, lenght]);

  return (
    <motion.div
      key={id}
      className="absolute top-0 left-0 z-0 flex items-center justify-center cursor-pointer"
      variants={VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={onClick}
    >
      <div
        className="flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 120,
          height: 120,
          backgroundColor: color,
        }}
      >
        <h3 className="px-5 text-sm text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

export default SubPath;
