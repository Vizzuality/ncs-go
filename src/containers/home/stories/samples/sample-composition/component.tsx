import React from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import { IN_VIEW_PROPS } from 'constants/motion';
import { BREAKPOINTS } from 'styles/styles.config';

const SampleComposition = ({ media, card, align = 'right' }) => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  return (
    <div className="pt-4 lg:pt-0 lg:grid lg:grid-cols-12">
      <div
        className={cx({
          'relative lg:col-span-7': true,
          'lg:col-start-2': align === 'left',
          'lg:col-start-5': align === 'right',
        })}
      >
        {/* {minWidth >= BREAKPOINTS.lg && (
          <motion.div className="aspect-video" {...IN_VIEW_PROPS}>
            {media}
          </motion.div>
        )} */}

        {minWidth < BREAKPOINTS.lg && (
          <motion.div
            className="aspect-video w-[96%] absolute top-0 left-0"
            {...IN_VIEW_PROPS}
            initial={{ opacity: 0.5, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            {media}
          </motion.div>
        )}

        {/* {minWidth >= BREAKPOINTS.lg && (
          <motion.div
            className={cx({
              'w-full lg:w-[408px] lg:absolute top-1/3': true,
              'left-full': align === 'left',
              'left-0': align === 'right',
            })}
            initial={{ opacity: 0.6, x: align === 'left' ? 70 : -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <div className="w-full lg:max-w-[400px] lg:-translate-x-1/2">{card}</div>
          </motion.div>
        )} */}

        {minWidth < BREAKPOINTS.lg && (
          <motion.div
            className={cx({
              'mt-[48%]': true,
              'ml-[4%]': align === 'right',
              'mr-[4%]': align === 'left',
            })}
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <div className="w-full">{card}</div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SampleComposition;
