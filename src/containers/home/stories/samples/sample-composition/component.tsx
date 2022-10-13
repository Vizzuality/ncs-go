import React from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';

import { IN_VIEW_PROPS } from 'constants/motion';

const SampleComposition = ({ media, card, align = 'right' }) => (
  <div className="pt-4 lg:pt-0 lg:grid lg:grid-cols-12">
    <div
      className={cx({
        'relative lg:col-span-7': true,
        'lg:col-start-2': align === 'left',
        'lg:col-start-5': align === 'right',
      })}
    >
      <motion.div className="aspect-video" {...IN_VIEW_PROPS}>
        {media}
      </motion.div>

      <motion.div
        className={cx({
          'w-full lg:w-[408px] lg:absolute top-1/3': true,
          'left-full': align === 'left',
          'left-0': align === 'right',
        })}
        initial={{ opacity: 0.5, x: align === 'left' ? 350 : -350 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        <div className="w-full lg:max-w-[400px] lg:-translate-x-1/2">{card}</div>
      </motion.div>
    </div>
  </div>
);

export default SampleComposition;
