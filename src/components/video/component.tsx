import { FC } from 'react';

import cx from 'classnames';

import ReactPlayer from 'react-player/lazy';

import Icon from 'components/icon';

import PLAY_SVG from 'svgs/play.svg?sprite';

import type { VideoProps } from './types';

const PlayControl = ({ playBackground, playColor }) => {
  return (
    <div className="relative">
      <div
        className={`flex w-20 h-20 rounded-full opacity-25 md:w-40 md:h-40 ${playBackground}`}
      ></div>
      <div
        className={`absolute z-10 flex items-center justify-center w-16 h-16 rounded-full md:w-32 md:h-32 ${playBackground} top-2 left-2 md:top-4 md:left-4`}
      >
        <Icon
          icon={PLAY_SVG}
          className={`inline-block md:w-5 h-4 w-2.5 md:h-8 ${playColor} ${playBackground}`}
        />
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
  playBackground = 'bg-brand',
  playColor = 'text-white',
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
    playIcon={<PlayControl playBackground={playBackground} playColor={playColor} />}
  />
);

export default Video;
