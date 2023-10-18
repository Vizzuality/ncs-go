import React, { useRef } from 'react';

import dynamic from 'next/dynamic';

import { motion, useScroll, useTransform } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import { useModal } from 'hooks/modals';

import Modal from 'components/modal';
import PlayControl from 'components/video/play-control';
import { BREAKPOINTS } from 'styles/styles.config';

import type { SampleMediaProps } from './types';
const Video = dynamic(() => import('components/video'), {
  ssr: false,
});

export const SampleMedia = ({ backgroundImage, video }: SampleMediaProps) => {
  const targetRef = useRef(null);
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  const { isOpen, open, close } = useModal();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const bgPos = useTransform(scrollYProgress, [0, 1], [`50% 100%`, `50% 0%`]);

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
    <div className="relative w-full h-full">
      <motion.div
        ref={targetRef}
        className="md:w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover w-auto mr-4 md:mr-0"
        style={{
          backgroundImage,
          backgroundPosition: bgPos,
        }}
      />
      {video && (
        <button
          onClick={() => open()}
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0"
        >
          <PlayControl playBackground="bg-white" playColor="text-black" />
        </button>
      )}
      <Modal
        title=""
        size="l"
        open={isOpen}
        closeBtn={minWidth >= BREAKPOINTS.sm ? false : true}
        onOpenChange={() => close()}
      >
        <div className="absolute left-0 w-full -translate-y-1/2 sm:static top-1/2 sm:translate-y-0 sm:pt-0 aspect-video">
          <Video config={videoConfig} light={false} loop url={video} height="100%" width="100%" />
        </div>
      </Modal>
    </div>
  );
};

export default SampleMedia;
