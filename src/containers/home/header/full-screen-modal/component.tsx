import {
  useFloating,
  useInteractions,
  useRole,
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
  const { open, onOpenChange } = props;
  const { floating, context } = useFloating({
    open,
    onOpenChange,
  });

  const { getFloatingProps } = useInteractions([useRole(context)]);

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
          <FloatingFocusManager context={context}>
            <>
              {minWidth < BREAKPOINTS.lg && (
                <motion.div
                  {...overlayFramerVariants}
                  className="absolute z-50 top-20 left-0 flex flex-col w-full h-[calc(100%-theme(space.20))] pointer-events-none grow"
                >
                  <ModalContent
                    {...props}
                    floating={floating}
                    getFloatingProps={getFloatingProps}
                  />
                </motion.div>
              )}

              {minWidth >= BREAKPOINTS.lg && (
                <motion.div
                  {...overlayFramerVariants}
                  className="absolute top-0 left-0 z-50 flex flex-col w-full h-full pointer-events-none grow"
                >
                  <ModalContent
                    {...props}
                    viewport="sm"
                    floating={floating}
                    getFloatingProps={getFloatingProps}
                  />
                </motion.div>
              )}
            </>
          </FloatingFocusManager>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
};

export default FullScreenModal;
