import React from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';

import { IN_VIEW_PROPS } from 'constants/motion';

import type { HeroProps } from './types';

export const Hero = ({ className, subtitle, title }: HeroProps) => (
  <div
    className={cx({
      'font-sans': true,
      [className]: !!className,
    })}
  >
    <div className="space-y-4">
      <motion.h2 className="text-base font-semibold tracking-widest uppercase" {...IN_VIEW_PROPS}>
        {title}
      </motion.h2>
      <motion.h3 className="text-lg md:text-2xl" {...IN_VIEW_PROPS}>
        {subtitle}
      </motion.h3>
    </div>
  </div>
);

export default Hero;
