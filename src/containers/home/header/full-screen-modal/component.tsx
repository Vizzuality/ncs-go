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
import { ModalProps } from './types';

export const FullScreenModal = (props: ModalProps) => {
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
            className="absolute inset-0 z-50 bg-black bg-blur"
          >
            <FloatingFocusManager context={context}>
              <>
                {minWidth < BREAKPOINTS.sm && (
                  <div className="absolute flex flex-col w-full h-full pointer-events-none grow">
                    <ModalContent
                      {...props}
                      floating={floating}
                      getFloatingProps={getFloatingProps}
                    />
                  </div>
                )}

                {minWidth >= BREAKPOINTS.sm && (
                  <div className="absolute flex flex-col w-full h-full pointer-events-none grow">
                    <ModalContent
                      {...props}
                      viewport="sm"
                      floating={floating}
                      getFloatingProps={getFloatingProps}
                    />
                  </div>
                )}
              </>
            </FloatingFocusManager>
          </motion.div>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
};

export default FullScreenModal;
