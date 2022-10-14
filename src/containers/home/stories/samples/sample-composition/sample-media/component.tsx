import React, { useEffect, useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import type { SampleMediaProps } from './types';

export const SampleMedia = ({ backgroundImage }: SampleMediaProps) => {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const bgPos = useTransform(scrollYProgress, [0, 1], [`50% 70%`, `50% 30%`]);

  useEffect(() => {
    const el = document.getElementById('scroll-container');
    containerRef.current = el;
  });

  return (
    <motion.div
      ref={targetRef}
      className="overflow-hidden bg-center bg-no-repeat bg-cover aspect-video"
      style={{
        backgroundImage,
        backgroundPosition: bgPos,
      }}
    />
  );
};

export default SampleMedia;
