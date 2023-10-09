import { Story } from 'types';

export const PATHWAY_COLOR = {
  forests: 'bg-forest-400',
  wetlands: 'bg-blue-400',
  croplands: 'bg-grassland-400',
  grasslands: 'bg-brown-400',
  shrublands: 'bg-brown-400',
  savanas: 'bg-brown-400',
};

export const STORIES: Story[] = [
  {
    id: 2,
    country: 'Tanzania',
    title: 'Carbon project on conservation site',
    description:
      'Indigenous-led with key financial schemes to protect biodiversity and benefit local people.',
    image: '/images/news/stories/test-2.jpg',
    pathway: 'croplands',
    clip: '#',
    video: '#',
    category: 'News',
    media: ['Clip', 'Video'],
  },
  {
    id: 4,
    country: 'Dominican Republic',
    title: 'Coastal resilience project',
    description: 'Mangroves and coral reefs restoration.',
    image: '/images/news/stories/test-4.jpg',
    pathway: 'wetlands',
    clip: '#',
    video: '#',
    category: 'Factsheets',
    media: ['Clip', 'Video'],
  },

  // {
  //   id: '2',
  //   title: 'Water resilience: resisting the tide in the Dominican Republic',
  //   description:
  //     'Reef restoration, mangroves, agroforestry. Local communities, scientists and public and private organisations in the Dominican Republic are finding solutions in nature to increase resilience and adapt to climate impacts.',
  //   country: 'Dominican republic',
  //   pathway: 'wetlands',
  //   image: '/images/news/stories/dominican-republic.png',
  //   video: 'https://www.youtube.com/watch?v=3fLjjrugGU4',
  // },
];
