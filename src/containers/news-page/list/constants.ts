import { Story } from 'types';

export const STORIES: Story[] = [
  {
    id: 1,
    country: 'Ghana',
    title: 'Reforestation project',
    description: 'Local communities are using GIS technology to map forest cover, youth-led.',
    image: 'test-1.jpg',
    pathway: 'forest',
    clip: '#',
    video: '#',
    category: 'Stories from the ground',
    media: ['Clip', 'Video'],
  },
  {
    id: 2,
    country: 'Tanzania',
    title: 'Carbon project on conservation site',
    description:
      'Indigenous-led with key financial schemes to protect biodiversity and benefit local people.',
    image: 'test-2.jpg',
    pathway: 'croplands',
    clip: '#',
    video: '#',
    category: 'News',
    media: ['Clip', 'Video'],
  },
  {
    id: 3,
    country: 'Panama',
    title: 'Agroforestry project',
    description:
      'Indigenous-led with key financial schemes to protect biodiversity and benefit local people.',
    image: 'test-3.jpg',
    pathway: 'forest',
    clip: '#',
    video: '#',
    category: 'Stories from the ground',
    media: ['Clip', 'Video'],
  },
  {
    id: 4,
    country: 'Dominican Republic',
    title: 'Coastal resilience project',
    description: 'Mangroves and coral reefs restoration.',
    image: 'test-4.jpg',
    pathway: 'wetlands',
    clip: '#',
    video: '#',
    category: 'Factsheets',
    media: ['Clip', 'Video'],
  },
  {
    id: 5,
    country: 'Tanzania',
    title: 'Carbon project on conservation site',
    description:
      'Indigenous-led with key financial schemes to protect biodiversity and benefit local people.',
    image: 'test-1.jpg',
    pathway: 'croplands',
    article: '#',
    clip: '#',
    category: 'News',
    media: ['Article', 'Clip'],
  },
  {
    id: 6,
    country: 'Ghana',
    title: 'Reforestation project',
    description: 'Local communities are using GIS technology to map forest cover, youth-led.',
    image: 'test-3.jpg',
    pathway: 'savana',
    article: '#',
    clip: '#',
    category: 'Stories from the ground',
    media: ['Article', 'Clip'],
  },
  {
    id: 7,
    country: 'Ghana',
    title: 'Reforestation project',
    description: 'Local communities are using GIS technology to map forest cover, youth-led.',
    image: 'test-2.jpg',
    pathway: 'grasslands',
    clip: '#',
    video: '#',
    category: 'Stories from the ground',
    media: ['Clip', 'Video'],
  },
];

export const CATEGORY_OPTIONS = [
  { value: 'Factsheets', label: 'Factsheets' },
  { value: 'News', label: 'News' },
  { value: 'Stories from the ground', label: 'Stories from the ground' },
];

export const MEDIA_OPTIONS = [
  { value: 'Article', label: 'Article' },
  { value: 'Clip', label: 'Clip' },
  { value: 'Video', label: 'Video' },
];

export const COUNTRY_OPTIONS = [
  { value: 'Dominican Republic', label: 'Dominican Republic' },
  { value: 'Ghana', label: 'Ghana' },
  { value: 'Panama', label: 'Panama' },
  { value: 'Tanzania', label: 'Tanzania' },
];