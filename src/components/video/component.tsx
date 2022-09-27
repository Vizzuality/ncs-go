import { FC } from 'react';

import cx from 'classnames';

import type { VideoProps } from './types';

export const Video: FC<VideoProps> = ({ className = 'w-5 h-5' }: VideoProps) => (
  <div
    className={cx({
      'fill-current': true,
      [className]: className,
    })}
  >
    VIDEO
  </div>
);

export default Video;
