import { FC } from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';

import Icon from 'components/icon';

import CLOSE_SVG from 'svgs/close.svg?sprite';

import type { FullScreenModalProps } from './types';

export const FullScreenModal: FC<FullScreenModalProps> = ({
  children,
  className,
  theme = 'light',
  floating,
  getFloatingProps,
  onOpenChange,
}: FullScreenModalProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className={cx({
        'pointer-events-auto w-full h-full outline-none bg-white flex flex-col overflow-hidden lg:5/5':
          true,
        [className]: !!className,
      })}
      {...getFloatingProps({
        ref: floating,
      })}
    >
      <div className="relative flex flex-col overflow-hidden grow">
        <button
          type="button"
          onClick={() => {
            onOpenChange(false);
          }}
          className="absolute z-50 flex items-center text-sm text-gray-300 top-8 right-9"
        >
          <Icon
            icon={CLOSE_SVG}
            className={cx({
              'inline-block w-7 h-7': true,
              'stroke-black': theme === 'light',
              'stroke-white': theme === 'dark',
            })}
          />
        </button>

        {children}
      </div>
    </motion.div>
  );
};

export default FullScreenModal;
