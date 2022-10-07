import { FC } from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';

import Icon from 'components/icon';

import CLOSE_SVG from 'svgs/ui/close.svg?sprite';

import { CONTENT_CLASSES } from './constants';
import type { ModalContentProps } from './types';

export const ModalContent: FC<ModalContentProps> = ({
  size = 'default',
  children,
  className,
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
          className="absolute z-50 flex items-center px-4 py-4 text-sm text-gray-300 top-6 right-6"
        >
          <Icon icon={CLOSE_SVG} className="inline-block w-3 h-3 text-black" />
        </button>

        {children}
      </div>
    </motion.div>
  );
};

export default ModalContent;
