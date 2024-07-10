'use client';

import dynamic from 'next/dynamic';
const Video = dynamic(() => import('components/video'), {
  ssr: false,
});

const InvolvedVideo = () => (
  <Video
    config={{
      youtube: {
        playerVars: {
          controls: true,
          showinfo: 0,
          rel: 0,
        },
      },
    }}
    light={false}
    loop
    url="https://www.youtube.com/watch?v=nu5fd-ATaL8&list=PLZwFPkUsoHXkKe3atQmn8Xr83BSDPNCTx&ab_channel=Nature4Climate"
    height="100%"
    width="100%"
  />
);

export default InvolvedVideo;
