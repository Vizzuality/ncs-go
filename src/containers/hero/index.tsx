import React from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';

import { IN_VIEW_PROPS } from 'constants/motion';

export const Hero = ({
  className,
  subtitle,
  title,
}: {
  className?: string;
  subtitle?: string;
  title?: string;
}) => (
  <div
    className={cx({
      'font-sans': true,
      [className]: !!className,
    })}
  >
    <motion.div className="space-y-4 text-gray-800 pb-4 md:pb-10" {...IN_VIEW_PROPS}>
      {title && <h2 className="text-sm font-bold tracking-widest uppercase">{title}</h2>}
      {subtitle && <h3 className="text-lg md:text-xl font-sans">{subtitle}</h3>}
    </motion.div>
  </div>
);

export default Hero;
