import { Transition, SVGMotionProps } from 'framer-motion';

export interface MenuButtonProps extends SVGMotionProps {
  isOpen?: boolean;
  height?: number;
  lineProps?: any;
  transition?: Transition;
  width?: number;
  onClick: () => void;
}
