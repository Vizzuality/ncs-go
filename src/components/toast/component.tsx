import { useCallback, useEffect } from 'react';

import cx from 'classnames';

import { motion, useAnimation } from 'framer-motion';

import Icon from 'components/icon';

import CLOSE_SVG from 'svgs/ui/close.svg?sprite';

import { THEME } from './constants';
import type { ToastProps } from './types';

export const Toast: React.FC<ToastProps> = ({
  id,
  content,
  level = 'info',
  autoDismiss = true,
  onDismiss,
}: ToastProps) => {
  const DURATION = 5;
  const controls = useAnimation();

  const ICON = THEME[level || 'info'].icon;

  useEffect(() => {
    if (autoDismiss) {
      controls.start({
        y: '100%',
        transition: { duration: DURATION },
      });
    }
  }, [controls, autoDismiss]);

  const handleDismiss = useCallback(() => {
    if (onDismiss) {
      onDismiss(id);
    }
  }, [id, onDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{
        ease: 'anticipate',
        duration: 0.5,
      }}
    >
      <div
        className={cx({
          'flex w-full px-4 py-3 text-white text-lg font-sans transition shadow-md rounded-xl ':
            true,
          [THEME[level]?.bg]: true,
        })}
      >
        <div className="flex grow space-x-2.5 items-center">
          <Icon icon={ICON} className="w-7 h-7" />
          <div className="leading-10 grow">{content}</div>
        </div>

        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 ml-5 shrink-0"
          onClick={handleDismiss}
        >
          <Icon icon={CLOSE_SVG} className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
};

export default Toast;