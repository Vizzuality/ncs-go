import { FC } from 'react';

import cx from 'classnames';

import ReactPlayer from 'react-player/lazy';

import type { VideoProps } from './types';

export const Video: FC<VideoProps> = ({
  className,
  config,
  loop = false,
  playing = false,
  light = true,
  url,
}: VideoProps) => (
  <ReactPlayer
    className={cx({
      'c-video': true,
      'h-full w-full': true,
      [className]: className,
    })}
    url={url}
    loop={loop}
    light={light}
    playing={playing}
    config={config}
  />
);

export default Video;
