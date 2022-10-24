import { useCallback } from 'react';

import { useHomeStore } from 'store/home';

import { AnimatePresence, motion } from 'framer-motion';

import Icon from 'components/icon';

import SCROLL_SVG from 'svgs/scroll.svg?sprite';

import { STEPS } from '../constants';

const Navigation = () => {
  const step = useHomeStore((state) => state.step);

  const scrollTo = useCallback((id) => {
    const $scrollEl = document.getElementById(id);
    const y = $scrollEl.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: y,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      key="step-navigation"
      className="absolute left-0 z-10 w-full bottom-10"
    >
      <div className="flex flex-col items-center justify-center">
        <AnimatePresence>
          {step === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.33 } }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, y: -5 }}
              key="step-navigation"
              className="inline-flex flex-col items-center justify-center mb-10 space-y-2 cursor-pointer text-beige"
              onClick={() => {
                scrollTo(`scroll-1`);
              }}
            >
              <div>Scroll down</div>
              <Icon icon={SCROLL_SVG} className="w-6 h-6 fill-beige animate-bounce" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center space-x-2.5">
        {STEPS.map(({ id }) => {
          return (
            <div
              key={id}
              className="flex flex-col items-center justify-center w-4 h-4 transition-transform border rounded-full cursor-pointer border-beige hover:scale-110"
              onClick={() => {
                scrollTo(`scroll-${id}`);
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
      </div>
    </motion.div>
  );
};

export default Navigation;
