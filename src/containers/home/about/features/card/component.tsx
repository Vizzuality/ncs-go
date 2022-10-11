import React from 'react';

import { motion } from 'framer-motion';

import Icon from 'components/icon';
import { IN_VIEW_PROPS } from 'constants/motion';

import type { FeatureCardProps } from './types';

export const FeatureCard = ({ description, icon }: FeatureCardProps) => (
  <motion.div
    className="p-10 space-y-2 text-base text-left text-white bg-gray-900 md:space-y-6 md:text-lg md:h-96 lg:h-80 xl:h-96 md:pt-20 outline outline-1 outline-gray-800"
    {...IN_VIEW_PROPS}
  >
    <motion.div {...IN_VIEW_PROPS}>
      <Icon className="w-12 h-12 md:w-16 md:h-16" icon={icon} />
    </motion.div>
    <motion.h3 className="font-sans" {...IN_VIEW_PROPS}>
      {description}
    </motion.h3>
  </motion.div>
);

export default FeatureCard;
