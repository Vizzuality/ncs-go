import { cloneElement, Fragment, useState } from 'react';

import {
  offset,
  autoUpdate,
  useFloating,
  useInteractions,
  useClick,
  useRole,
  useDismiss,
  FloatingPortal,
} from '@floating-ui/react-dom-interactions';
import { motion, AnimatePresence } from 'framer-motion';

import Icon from 'components/icon';

import CLOSE_SVG from 'svgs/ui/close.svg?sprite';

import { TooltipProps } from './types';

export const Tooltip = ({
  children,
  content,
  trigger = 'hover',
  placement = 'top',
  portalProps = {
    enabled: true,
  },
}: TooltipProps) => {
  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [
      offset((args) => {
        const { rects } = args;
        const { reference: r, floating: f } = rects;
        return -f.height / 2 - r.height / 2;
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context, {
      enabled: trigger === 'click',
    }),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
  ]);

  // Portal
  const Portal = portalProps.enabled ? FloatingPortal : Fragment;

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref: reference, ...children.props }))}

      <Portal {...portalProps}>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              {...getFloatingProps({
                ref: floating,
                style: {
                  position: strategy,
                  top: y ?? '',
                  left: x ?? '',
                },
              })}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setOpen(false);
              }}
              className="relative"
            >
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="absolute flex items-center space-x-2 text-gray-900 -translate-x-1/2 top-10 left-1/2"
              >
                <span className="text-sm">Close</span>
                <Icon icon={CLOSE_SVG} className="w-3 h-3 stroke-gray-900" />
              </button>

              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};

export default Tooltip;
