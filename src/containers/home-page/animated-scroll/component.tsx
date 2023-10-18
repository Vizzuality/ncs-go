import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import type { AnimatedScrollProps } from './types';

const AnimatedScroll = ({ children, className, xOptions, yOptions }: AnimatedScrollProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [xOptions.start, xOptions.end]);
  const y = useTransform(scrollYProgress, [0, 1], [yOptions.start, yOptions.end]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x: x,
        y: y,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedScroll;
