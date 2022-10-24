import { useCallback } from 'react';

import { useHomeStore } from 'store/home';

import { AnimatePresence, motion } from 'framer-motion';

import { STEPS } from '../constants';

const Navigation = () => {
  const step = useHomeStore((state) => state.step);

  const scrollTo = useCallback((id) => {
    const $scrollEl = document.getElementById(`scroll-${id}`);
    const y = $scrollEl.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: y,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.33 } }}
      key="step-navigation"
      className="absolute bottom-10 left-0 z-10 flex items-center justify-center space-x-2.5 w-full"
    >
      {STEPS.map(({ id }) => {
        return (
          <div
            key={id}
            className="flex flex-col items-center justify-center w-4 h-4 transition-transform border rounded-full border-beige"
            onClick={() => {
              scrollTo(id);
            }}
          >
            <AnimatePresence>
              {id <= step && (
                <motion.div
                  key={`step-${id}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="w-2 h-2 rounded-full bg-beige"
                />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Navigation;
