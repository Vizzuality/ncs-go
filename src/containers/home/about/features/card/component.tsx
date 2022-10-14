import React, { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import Icon from 'components/icon';
import { IN_VIEW_PROPS } from 'constants/motion';

import type { FeatureCardProps } from './types';

export const FeatureCard = ({ description, icon }: FeatureCardProps) => {
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  const opacity = inView ? 1 : 0;
  const y = inView ? 0 : -20;

  return (
    <motion.div
      ref={ref}
      className="p-10 space-y-2 text-base text-left text-white bg-gray-900 md:space-y-6 md:text-lg md:h-96 lg:h-80 xl:h-96 md:pt-20 outline outline-1 outline-gray-800"
      {...IN_VIEW_PROPS}
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      <motion.div animate={{ opacity, y }} transition={{ delay: 0.2, bounce: 0 }}>
        <Icon className="w-12 h-12 md:w-16 md:h-16" icon={icon} />
      </motion.div>
      <motion.h3
        className="font-sans"
        animate={{ opacity, y }}
        transition={{ delay: 0.3, bounce: 0 }}
      >
        {description}
      </motion.h3>
    </motion.div>
  );
};

export default FeatureCard;
