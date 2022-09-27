import { FC } from 'react';

import cx from 'classnames';

import ReactPlayer from 'react-player/lazy';

import type { VideoProps } from './types';

export const Video: FC<VideoProps> = ({ className, thumbnail, url }: VideoProps) => (
  <div
    className={cx({
      'h-auto w-full': true,
      [className]: className,
    })}
  >
    <ReactPlayer
      className="react-player"
      url={url}
      loop
      width="auto"
      height="auto"
      light={thumbnail}
      style={{
        width: '100%',
        height: 'auto',
        minWidth: '100%',
        minHeight: '100%',
      }}
      playing
      config={{
        youtube: {
          playerVars: {
            controls: true,
            showinfo: 0,
            rel: 0,
          },
        },
      }}
    />
  </div>
);

export default Video;
