'use client';

import dynamic from 'next/dynamic';
const Video = dynamic(() => import('components/video'), {
  ssr: false,
});

const CampaignVideo = () => (
  <Video light={false} url="/videos/campaign.mp4" height="100%" width="100%" controls playing />
);

export default CampaignVideo;
