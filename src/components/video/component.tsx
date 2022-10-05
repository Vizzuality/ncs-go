import { FC } from 'react';

import cx from 'classnames';

import ReactPlayer from 'react-player/lazy';

import Icon from 'components/icon';

import PLAY_SVG from 'svgs/play.svg?sprite';

import type { VideoProps } from './types';

const PlayControl = () => {
  return (
    <div className="relative">
      <div className="flex w-40 h-40 rounded-full opacity-25 bg-brand"></div>
      <div className="absolute z-10 flex items-center justify-center w-32 h-32 rounded-full bg-brand top-4 left-4">
        <Icon icon={PLAY_SVG} className="inline-block w-5 h-8 text-white bg-brand" />
      </div>
    </div>
  );
};

export const Video: FC<VideoProps> = ({
  className,
  config,
  loop = false,
  playing = false,
  light = true,
  url,
  height,
  width,
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
    playIcon={<PlayControl />}
  />
);

export default Video;
