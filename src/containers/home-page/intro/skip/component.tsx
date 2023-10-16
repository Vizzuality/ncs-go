import { motion } from 'framer-motion';

import Button from 'components/button';

const Skip = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
      key="step-navigation"
      className="absolute z-20 top-4 md:top-auto md:bottom-7 right-4"
    >
      <Button theme="secondary" size="xs">
        <a href="#home">Skip intro</a>
      </Button>
    </motion.div>
  );
};

export default Skip;
