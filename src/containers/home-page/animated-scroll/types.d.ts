import { PropsWithChildren } from 'react';

export interface AnimatedScrollProps extends PropsWithChildren {
  className: string;
  xOptions: {
    start: number;
    end: number;
  };
  yOptions: {
    start: number;
    end: number;
  };
}
