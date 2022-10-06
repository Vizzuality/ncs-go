import type { ReactPlayerProps } from 'react-player';

export interface VideoProps extends ReactPlayerProps {
  className?: string;
  playBackground?: string;
  playColor?: string;
}
