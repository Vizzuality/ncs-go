import React from 'react';

import dynamic from 'next/dynamic';

import useBreakpoint from 'use-breakpoint';

import { useModal } from 'hooks/modals';

import Modal from 'components/modal';
import PlayControl from 'components/video/play-control';
import { BREAKPOINTS } from 'styles/styles.config';

const Video = dynamic(() => import('components/video'), {
  ssr: false,
});

const ModalVideo = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');
  const { isOpen, open, close } = useModal();

  const videoConfig = {
    youtube: {
      playerVars: {
        controls: true,
        showinfo: 0,
        rel: 0,
      },
    },
  };
  return (
    <>
      <div className="relative">
        <div
          style={{ backgroundImage: `url(/images/home/stories/ghana.png)` }}
          className="overflow-hidden bg-center bg-no-repeat bg-cover aspect-video"
        />
        <button
          onClick={() => open()}
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <PlayControl playBackground="bg-white" playColor="text-black" />
        </button>
      </div>

      <Modal
        title=""
        size="l"
        open={isOpen}
        closeBtn={minWidth >= BREAKPOINTS.sm && minWidth < BREAKPOINTS.lg ? false : true}
        onOpenChange={() => close()}
      >
        <div className="w-full translate-y-full sm:translate-y-0 sm:pt-0 lg:h-full lg:px-10 lg:pb-10 lg:mt-20 aspect-video">
          <Video
            config={videoConfig}
            playing
            light={false}
            loop
            url="https://youtu.be/6PGyRolwFVo"
            height="100%"
            width="100%"
            muted
          />
        </div>
      </Modal>
    </>
  );
};

export default ModalVideo;
