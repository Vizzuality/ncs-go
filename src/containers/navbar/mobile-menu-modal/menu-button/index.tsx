import React from 'react';

import { motion } from 'framer-motion';

import { MenuButtonProps } from './types';

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  transition = null,
  lineProps = null,
  ...props
}: MenuButtonProps) => {
  const variant = isOpen ? 'opened' : 'closed';
  const top = {
    closed: {
      rotate: 0,
      translateY: 1.45,
      transformorigin: '50% 50%',
    },
    opened: {
      rotate: 45,
      translateY: 2,
      transformorigin: '50% 50%',
    },
  };

  const bottom = {
    closed: {
      rotate: 0,
      translateY: -1.45,
      transformorigin: '50% 50%',
    },
    opened: {
      rotate: -45,
      translateY: -2,
      transformorigin: '50% 50%',
    },
  };
  lineProps = {
    stroke: '#FFFFFF',
    strokeWidth: '1px',
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition,
    ...lineProps,
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />

      <motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
    </motion.svg>
  );
};

export default MenuButton;
