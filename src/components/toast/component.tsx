import { useCallback, useEffect } from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import Icon from 'components/icon';
import { BREAKPOINTS } from 'styles/styles.config';

import CLOSE_SVG from 'svgs/ui/close.svg?sprite';

import { THEME } from './constants';
import type { ToastProps } from './types';

export const Toast: React.FC<ToastProps> = ({
  id,
  content,
  level = 'info',
  onDismiss,
}: ToastProps) => {
  const { minWidth } = useBreakpoint(BREAKPOINTS);

  const ICON = THEME[level || 'info'].icon;

  const handleDismiss = useCallback(() => {
    if (onDismiss) {
      onDismiss(id);
    }
  }, [id, onDismiss]);

  useEffect(() => {
    setTimeout(() => {
      handleDismiss();
    }, 5000);
  }, [handleDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: minWidth >= BREAKPOINTS.md && 25 }}
      animate={{ opacity: 1, x: minWidth >= BREAKPOINTS.md && 0 }}
      exit={{ opacity: 0, x: minWidth >= BREAKPOINTS.md && 50 }}
      transition={{
        ease: 'anticipate',
        duration: 0.5,
      }}
    >
      <div
        className={cx({
          'flex w-full px-4 py-3 text-white text-sm sm:text-base md:text-lg font-sans transition shadow-md rounded-xl':
            true,
          [THEME[level]?.bg]: true,
        })}
      >
        <div className="flex grow space-x-2.5 items-center">
          <Icon icon={ICON} className="w-7 h-7" />
          <div className="leading-10 grow">{content}</div>
        </div>

        <button
          aria-label="close"
          type="button"
          className="flex items-center justify-center flex-shrink-0 w-10 h-10 ml-5"
          onClick={handleDismiss}
        >
          <Icon icon={CLOSE_SVG} className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
};

export default Toast;
