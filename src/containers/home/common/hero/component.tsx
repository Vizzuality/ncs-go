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
    <motion.div className="space-y-4" {...IN_VIEW_PROPS}>
      <h2 className="text-base font-semibold tracking-widest uppercase">{title}</h2>
      <h3 className="text-lg md:text-2xl">{subtitle}</h3>
    </motion.div>
  </div>
);

export default Hero;
