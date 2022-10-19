import {
  useFloating,
  useInteractions,
  useRole,
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
} from '@floating-ui/react-dom-interactions';
import { AnimatePresence, motion } from 'framer-motion';

import Media from 'containers/media';

import ModalContent from './content';
import { ModalProps } from './types';

export const FullScreenModal = (props: ModalProps) => {
  const { open, onOpenChange, zIndex = 'z-10' } = props;

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
          <FloatingOverlay lockScroll className={`${zIndex}`}>
            <FloatingFocusManager context={context}>
              <>
                <Media lessThan="lg">
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
                </Media>

                <Media greaterThanOrEqual="lg">
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
                </Media>
              </>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
};

export default FullScreenModal;
