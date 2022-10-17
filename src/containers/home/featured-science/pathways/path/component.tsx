import React, { useMemo } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

const Ball = ({ id, title, color, canvas, index, selected, selectedIndex, onClick }) => {
  const { width, height } = useMemo(() => {
    return {
      width: canvas.width / 4,
      height: canvas.width / 4,
    };
  }, [canvas]);

  const NOT_SELECTED = selected && selected !== id;

  const INDEX = selectedIndex < index ? index - 1 : index;
  const SCALE = NOT_SELECTED ? 0.5 : 1;

  const ANIMATE = useMemo(() => {
    if (selected === id) {
      return 'selected';
    }

    if (!!selected) {
      return 'list';
    }

    return 'static';
  }, [id, selected]);

  const VARIANTS = useMemo(() => {
    return {
      initial: {
        y: index % 2 === 0 ? 0 : height / 2,
        x: index * width,
        scale: SCALE,
      },
      static: {
        y: index % 2 === 0 ? 0 : height / 2,
        x: index * width,
        scale: SCALE,
      },
      hover: {
        zIndex: 10,
        scale: SCALE + SCALE * 0.1,
      },
      selected: {
        x: canvas.width / 2 - width / 2 + width * 0.25,
        y: canvas.height / 2 - height / 2,
        scale: SCALE,
      },
      list: {
        y: INDEX * height * SCALE,
        x: (-width / 2) * SCALE,
        scale: SCALE,
      },
    };
  }, [width, height, canvas, index, INDEX, SCALE]);

  const TITLE_VARIANTS = useMemo(() => {
    return {
      initial: {
        opacity: 1,
      },
      static: {
        opacity: 1,
      },
      hover: {
        opacity: NOT_SELECTED ? 0 : 1,
      },
      selected: {
        opacity: 1,
      },
      list: {
        opacity: 0,
      },
    };
  }, [NOT_SELECTED]);

  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full cursor-pointer"
      variants={VARIANTS}
      animate={ANIMATE}
      whileHover="hover"
      transition={{
        duration: 0.25,
      }}
      style={{
        width: width,
        height: height,
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      <div className="space-y-1">
        <div className="mx-auto w-[120px] h-[120px]">
          <Image src={`/images/home/pathways/${id}.svg`} width={120} height={120} alt={title} />
        </div>

        <motion.h3 variants={TITLE_VARIANTS} className="px-5 text-lg text-center">
          {title}
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default Ball;
