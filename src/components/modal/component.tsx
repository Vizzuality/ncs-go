import {
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  FloatingPortal,
  FloatingFocusManager,
} from '@floating-ui/react-dom-interactions';
import { AnimatePresence, motion } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import { BREAKPOINTS } from 'styles/styles.config';

import ModalContent from './content';
import { OVERLAY_CLASSES } from './content/constants';
import { ModalProps } from './types';

export const Modal = (props: ModalProps) => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');
  const { open, onOpenChange, dismissable } = props;
  const { floating, context } = useFloating({
    open,
    onOpenChange,
  });

  const { getFloatingProps } = useInteractions([
    useRole(context),
    useDismiss(context, {
      enabled: dismissable,
    }),
  ]);

  const overlayFramerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <FloatingPortal>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={overlayFramerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={OVERLAY_CLASSES}
          >
            <FloatingFocusManager context={context}>
              <>
                {minWidth < BREAKPOINTS.sm && (
                  <ModalContent
                    {...props}
                    floating={floating}
                    getFloatingProps={getFloatingProps}
                  />
                )}
                {minWidth >= BREAKPOINTS.sm && (
                  <ModalContent
                    {...props}
                    viewport="sm"
                    floating={floating}
                    getFloatingProps={getFloatingProps}
                  />
                )}
              </>
            </FloatingFocusManager>
          </motion.div>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
};

export default Modal;
