import cx from 'classnames';

import { motion } from 'framer-motion';

import Icon from 'components/icon';

import PLAY_SVG from 'svgs/ui/play.svg?sprite';

const PlayControl = ({ playBackground, playColor }) => {
  const playMotion = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <motion.div className="relative" whileHover="hover">
      <motion.div
        className={cx({
          'flex w-20 h-20 rounded-full opacity-25 md:w-32 md:h-32 xl:w-36 xl:h-36': true,
          [playBackground]: true,
        })}
        variants={playMotion}
      />
      <motion.div
        className={cx({
          'absolute z-0 flex items-center justify-center w-16 h-16 rounded-full md:w-24 md:h-24 xl:w-28 xl:h-28 md:top-4 md:left-4 top-2 left-2':
            true,
          [playBackground]: true,
        })}
      >
        <Icon
          icon={PLAY_SVG}
          className={cx({
            'inline-block xl:w-5 md:w-3.5 md:h-6 h-4 w-2.5 xl:h-8': true,
            [playBackground]: true,
            [playColor]: true,
          })}
        />
      </motion.div>
    </motion.div>
  );
};

export default PlayControl;
