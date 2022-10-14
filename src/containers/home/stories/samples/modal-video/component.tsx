import React from 'react';

import dynamic from 'next/dynamic';

import { useModal } from 'hooks/modals';

import Modal from 'components/modal';

const Video = dynamic(() => import('components/video'), {
  ssr: false,
});

const ModalVideo = () => {
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
      <button onClick={() => open()} className="w-full h-full">
        <div
          style={{ backgroundImage: `url(/images/home/stories/ghana.png)` }}
          className="overflow-hidden bg-center bg-no-repeat bg-cover aspect-video"
        />
      </button>

      <Modal title="" size="l" open={isOpen} onOpenChange={() => close()}>
        <div className="w-full lg:h-full lg:px-10 lg:pb-10 lg:mt-20 aspect-video">
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
