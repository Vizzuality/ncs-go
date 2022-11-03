import React from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';

import Media from 'containers/media';

const SampleComposition = ({ media, card, align = 'right' }) => {
  return (
    <div className="pt-4 lg:pt-0 lg:grid lg:grid-cols-12">
      <div
        className={cx({
          'relative lg:col-span-10 border border-transparent lg:col-start-2': true,
        })}
      >
        <Media greaterThanOrEqual="md">
          <div
            className={cx({
              'aspect-video w-[70%] absolute top-0 left-0': true,
              'ml-[30%]': align === 'right',
            })}
          >
            {media}
          </div>
        </Media>

        <Media lessThan="md">
          <div className="aspect-video w-[96%] absolute top-0 left-0">{media}</div>
        </Media>

        <Media greaterThanOrEqual="md">
          <motion.div
            className={cx({
              'mt-[18%] max-w-[320px] lg:max-w-[450px] xl:max-w-[500px]': true,
              'mr-auto lg:ml-[5%] xl:ml-[5%]': align === 'right',
              'ml-auto lg:mr-[5%] xl:mr-[5%]': align === 'left',
            })}
            initial={{ opacity: 0, x: align === 'left' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.25,
              delay: 0.25,
            }}
          >
            <div className="w-full">{card}</div>
          </motion.div>
        </Media>

        <Media lessThan="md">
          <motion.div
            className={cx({
              'mt-[48%]': true,
              'ml-[4%]': align === 'right',
              'mr-[4%]': align === 'left',
            })}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.25,
              delay: 0.25,
            }}
          >
            <div className="w-full">{card}</div>
          </motion.div>
        </Media>
      </div>
    </div>
  );
};

export default SampleComposition;
