import React, { useMemo } from 'react';

import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import { BREAKPOINTS } from 'styles/styles.config';

import Subpath from './subpath';

const Path = ({
  id,
  title,
  color,
  canvas,
  index,
  selected,
  selectedIndex,
  subpaths,
  length,
  onClick,
}) => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  const { width, height } = useMemo(() => {
    return {
      width: canvas.width / 4,
      height: canvas.width / 4,
    };
  }, [canvas]);

  const SELECTED = selected === id;
  const NOT_SELECTED = selected && selected !== id;

  const INDEX = selectedIndex < index ? index - 1 : index;
  const SCALE = useMemo(() => {
    if (NOT_SELECTED) {
      return minWidth >= BREAKPOINTS['2xl'] ? 0.4 : 0.3;
    }
    return 1;
  }, [minWidth, NOT_SELECTED]);

  const CENTER = useMemo(() => {
    return {
      x: canvas.width / 2 - width / 2,
      y: canvas.height / 2 - height / 2,
    };
  }, [width, height, canvas]);

  const ANIMATE = useMemo(() => {
    if (selected === id) {
      return 'selected';
    }

    if (!!selected) {
      return 'list';
    }

    return 'static';
  }, [id, selected]);

  const LIST_HEIGHT = useMemo(() => {
    const arr = new Array(length - 1);
    return arr.fill(0).reduce((acc, v, i) => {
      return acc + i * height * 0.5 + i * 50 * SCALE;
    }, 0);
  }, [height, length, SCALE]);

  const VARIANTS = useMemo(() => {
    return {
      initial: {
        zIndex: 10,
        y: index % 2 === 0 ? 0 : canvas.height / 2 - height / 2,
        x: index * width,
        scale: SCALE,
      },
      static: {
        zIndex: 10,
        y: index % 2 === 0 ? canvas.height / 2 - height : canvas.height / 2 - height / 2,
        x: index * width,
        scale: SCALE,
      },
      hover: {
        zIndex: 20,
        scale: !SELECTED ? SCALE + SCALE * 0.1 : 1,
      },
      selected: {
        zIndex: 10,
        x: CENTER.x,
        y: CENTER.y,
        scale: SCALE,
      },
      list: {
        zIndex: 10,
        x: (-width / 2) * SCALE,
        y:
          canvas.height / 2 -
          LIST_HEIGHT / 2 -
          (height / 2) * SCALE +
          INDEX * height * SCALE +
          INDEX * 50,
        scale: SCALE,
      },
    };
  }, [width, height, index, canvas, INDEX, SCALE, CENTER, SELECTED, LIST_HEIGHT]);

  const BIG_VARIANTS = useMemo(() => {
    return {
      initial: { opacity: 1 },
      static: { opacity: 1 },
      selected: { opacity: 1 },
      list: { opacity: 0 },
    };
  }, []);

  const SMALL_VARIANTS = useMemo(() => {
    return {
      initial: { opacity: 0 },
      static: { opacity: 0 },
      selected: { opacity: 0 },
      list: { opacity: 1 },
    };
  }, []);

  const TEXT_SMALL_VARIANTS = useMemo(() => {
    return {
      initial: { opacity: 0 },
      static: { opacity: 0 },
      selected: { opacity: 0 },
      list: { opacity: 1 },
    };
  }, []);

  return (
    <>
      <motion.div
        className="absolute top-0 left-0 z-10 flex items-center justify-center rounded-full cursor-pointer"
        variants={VARIANTS}
        animate={ANIMATE}
        whileHover="hover"
        transition={{
          type: 'spring',
          duration: 0.75,
          bounce: 0.25,
        }}
        style={{
          width: width,
          height: height,
          backgroundColor: color,
        }}
        onClick={onClick}
      >
        {/* BIG BALL */}
        <motion.div
          variants={BIG_VARIANTS}
          className="absolute space-y-1 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          transition={{
            duration: 0.125,
          }}
        >
          <div className="relative mx-auto w-[120px] h-[120px]">
            <Image src={`/images/home/pathways/${id}.svg`} layout="fill" alt={title} />
          </div>

          <h3 className="w-full text-lg text-center">
            {title} <span>({subpaths.length})</span>
          </h3>
        </motion.div>

        {/* SMALL BALL */}
        <motion.div
          variants={SMALL_VARIANTS}
          className="absolute space-y-1 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          transition={{
            duration: 0.125,
          }}
        >
          <div className="mx-auto w-[120px] h-[120px]">
            <Image layout="fill" src={`/images/home/pathways/${id}-sm.svg`} alt={title} />
          </div>
        </motion.div>

        <motion.h3
          variants={TEXT_SMALL_VARIANTS}
          style={{ scale: 1 / SCALE }}
          transition={{
            duration: 0.125,
          }}
          className="absolute w-full max-w-[120px] mx-auto mt-5 text-sm text-center top-full origin-top"
        >
          {title} <span>({subpaths.length})</span>
        </motion.h3>
      </motion.div>

      <AnimatePresence key="new">
        {SELECTED &&
          subpaths.map((subpath, i) => (
            <Subpath
              {...subpath}
              key={subpath.id}
              index={i}
              center={CENTER}
              lenght={subpaths.length}
              width={width}
              height={height}
            />
          ))}
      </AnimatePresence>
    </>
  );
};

export default Path;
