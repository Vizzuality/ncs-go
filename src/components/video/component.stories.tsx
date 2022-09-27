import { Story } from '@storybook/react/types-6-0';

import Video from './component';
import { VideoProps } from './types';

const StoryVideo = {
  title: 'Components/Video',
  component: Video,
};

export default StoryVideo;

const Template: Story<VideoProps> = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: 'https://youtu.be/6PGyRolwFVo',
};
