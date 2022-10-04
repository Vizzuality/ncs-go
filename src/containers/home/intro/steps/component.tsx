import { useHomeStore } from 'store/home';

import { motion, AnimatePresence } from 'framer-motion';

import { STEPS } from '../constants';

const Steps = () => {
  const step = useHomeStore((state) => state.step);

  return (
    <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full">
      <AnimatePresence>
        {STEPS.map(({ id, content }) => {
          if (id !== step) {
            return null;
          }

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.33 } }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-xl text-center text-white"
            >
              {content}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Steps;
