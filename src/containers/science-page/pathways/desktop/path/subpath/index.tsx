import React, { useCallback, useMemo, useState } from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';

import Tooltip from './tooltip';

const SubPath = ({ id, title, description, color, index, width, height, lenght, center }) => {
  const [more, setMore] = useState(false);

  const VARIANTS = useMemo(() => {
    const LENGTH = lenght < 5 ? 8 : lenght;
    const angle = index * (360 / LENGTH) - 90;

    const x = center.x + width / 2 + ((width + width / 2) / 2) * Math.cos((angle * Math.PI) / 180);
    const y =
      center.y + height / 2 + ((height + width / 2) / 2) * Math.sin((angle * Math.PI) / 180);

    return {
      initial: {
        x: center.x + width / 2,
        y: center.y + height / 2,
        opacity: 0,
      },
      animate: {
        x,
        y,
        opacity: 1,
        transition: {
          type: 'spring',
          delay: 0.25 + index * 0.05,
          bounce: 0.4,
          duration: 0.75,
        },
      },
      exit: {
        x: center.x + width / 2,
        y: center.y + height / 2,
        opacity: 0,
        transition: {
          delay: 0,
          duration: 0.1,
        },
      },
    };
  }, [width, height, index, center, lenght]);

  const handleClick = useCallback(() => {
    setMore(!more);
  }, [more]);

  return (
    <motion.div
      key={id}
      className={cx({
        'absolute top-0 left-0 flex items-center justify-center cursor-pointer': true,
        'z-0': !more,
        'z-20': more,
      })}
      variants={VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={handleClick}
    >
      <Tooltip
        trigger="click"
        placement="top"
        portalProps={{
          enabled: true,
        }}
        content={
          <div
            key="description"
            className="flex items-center justify-center p-10 text-center text-gray-800 bg-white border border-gray-800 rounded-full w-96 h-96"
          >
            <div className="space-y-2">
              <h3>{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        }
      >
        <div
          className="flex items-center justify-center transition-transform -translate-x-1/2 -translate-y-1/2 rounded-full hover:scale-110"
          style={{
            width: 120,
            height: 120,
            backgroundColor: color,
          }}
        >
          <h3 className="px-5 text-sm text-center">{title}</h3>
        </div>
      </Tooltip>
    </motion.div>
  );
};

export default SubPath;
