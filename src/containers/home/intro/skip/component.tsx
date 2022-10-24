import { useCallback } from 'react';

import { motion } from 'framer-motion';

import Button from 'components/button';

const Skip = () => {
  const scrollTo = useCallback((id) => {
    const $scrollEl = document.getElementById(id);
    const $header = document.getElementById('header');
    const y =
      $scrollEl.getBoundingClientRect().top +
      window.pageYOffset +
      -$header.getBoundingClientRect().height;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
      key="step-navigation"
      className="absolute z-10 right-6 bottom-7"
    >
      <Button
        theme="secondary"
        size="xs"
        onClick={() => {
          scrollTo('about');
        }}
      >
        Skip intro
      </Button>
    </motion.div>
  );
};

export default Skip;
