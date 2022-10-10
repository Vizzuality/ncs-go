import { FC } from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';

import Icon from 'components/icon';

import CLOSE_SVG from 'svgs/close.svg?sprite';

import { CONTENT_CLASSES } from './constants';
import type { ModalContentProps } from './types';

export const ModalContent: FC<ModalContentProps> = ({
  size = 'default',
  children,
  className,
  theme = 'light',
  floating,
  getFloatingProps,
  onOpenChange,
}: ModalContentProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className={cx({ [CONTENT_CLASSES[size]]: true, [className]: !!className })}
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

export default ModalContent;
