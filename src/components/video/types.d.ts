export interface VideoProps {
  className?: string;

  // * Override options for the various players
  config?: Record<string, unknown>;

  // * To loop the media
  loop?: boolean;

  // * To pause or play the media: https://github.com/cookpete/react-player#config-prop
  playing?: boolean;

  // * Show the video thumbnail, which loads the full player on click
  light?: boolean;

  url: string;
}
