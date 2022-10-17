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
          'relative lg:col-span-10 border border-transparent lg:col-start-2': true,
        })}
      >
        {minWidth >= BREAKPOINTS.md && (
          <motion.div
            className={cx({
              'aspect-video w-[70%] absolute top-0 left-0': true,
              'ml-[30%]': align === 'right',
            })}
            {...IN_VIEW_PROPS}
          >
            {media}
          </motion.div>
        )}

        {minWidth < BREAKPOINTS.md && (
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

        {minWidth >= BREAKPOINTS.md && (
          <motion.div
            className={cx({
              'mt-[18%] max-w-[320px] lg:max-w-[370px] xl:max-w-[420px]': true,
              'mr-auto ml-[5%] xl:ml-[10%]': align === 'right',
              'ml-auto mr-[5%] xl:mr-[10%]': align === 'left',
            })}
            initial={{ opacity: 0.6, x: align === 'left' ? 70 : -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <div className="w-full">{card}</div>
          </motion.div>
        )}

        {minWidth < BREAKPOINTS.md && (
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
