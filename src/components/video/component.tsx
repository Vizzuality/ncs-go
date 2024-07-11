import { FC } from 'react';

import cx from 'classnames';

import ReactPlayer from 'react-player/lazy';

import PlayControl from 'components/video/play-control';

import type { VideoProps } from './types';

export const Video: FC<VideoProps> = ({
  className,
  config,
  loop = false,
  playing = false,
  light = true,
  playBackground = 'bg-brand-700',
  playColor = 'text-white',
  url,
  height,
  width,
  ...props
}: VideoProps) => (
  <ReactPlayer
    className={cx({
      [className]: !!className,
    })}
    width={width}
    height={height}
    url={url}
    loop={loop}
    light={light}
    playing={playing}
    config={config}
    playIcon={<PlayControl playBackground={playBackground} playColor={playColor} />}
    {...props}
  />
);

export default Video;
