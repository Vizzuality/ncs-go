import { Story } from 'types';

export const STORIES: Story[] = [
  {
    id: 1,
    country: null,
    title:
      'Unlocking the potential: N4C launches interactive database showing opportunities for high-integrity nature-based projects',
    description:
      'Nature4Climate unveiled the beta version of naturebase, a free platform designed for policymakers, practitioners, and other decision-makers to identify strategies for implementing impactful nature-based projects, covering carbon mitigation, biodiversity preservation, and livelihood enhancement across global, national, and subnational scales.',
    image: 'test-1.jpg',
    pathway: 'forest',
    article:
      'https://nature4climate.org/unlocking-the-potential-n4c-launches-interactive-database-showing-opportunities-for-high-integrity-nature-based-projects',
    clip: null,
    video: null,
    category: 'Stories from the ground',
    media: ['Article'],
  },
  {
    id: 2,
    country: 'Ghana',
    title: 'From Peru to Ghana: how technology is transforming community reforestation',
    description:
      'Follow Peruvian activist Betty Rubio’s trip to Ghana to share her expertise in monitoring and reporting technologies for reforestation and native plant growing in the Bowkrom Community.',
    image: 'peru-ghana.jpg',
    pathway: 'croplands',
    article:
      'https://nature4climate.org/from-peru-to-ghana-how-technology-is-transforming-community-reforestation',
    clip: null,
    video: null,
    category: 'News',
    media: ['Article'],
  },
  {
    id: 3,
    country: 'Panama',
    title: 'Panama: The Return of an Ancestral Forest',
    description:
      'Follow the Embera People in their efforts to restore 90 hectares in Panama, planting 90,000 native species and implementing strategies such as avoiding forest conversion, reforestation, and agroforestry, while rewarding ancestral knowledge through carbon credits.',
    image: 'panama-01.jpg',
    pathway: 'forest',
    article: 'https://nature4climate.org/panama-the-return-of-an-ancestral-forest',
    clip: null,
    video: null,
    category: 'Stories from the ground',
    media: ['Article'],
  },
  {
    id: 4,
    country: 'Dominican Republic',
    title: 'Water resilience: resisting the tide in the Dominican Republic',
    description:
      'Nature is a fundamental element of survival in coastal countries, especially in the Caribbean, where communities rely on the well-being of ecosystems like forests, reefs, and mangroves for protection and economic sustainability. In the Dominican Republic, scientists and local organizations are actively collaborating to develop innovative solutions that enhance resilience and adapt to the impacts of climate change.',
    image: 'test-4.jpg',
    pathway: 'wetlands',
    article:
      'https://nature4climate.org/water-resilience-resisting-the-tide-in-the-dominican-republic',
    clip: null,
    video: null,
    category: 'Factsheets',
    media: ['Article'],
  },
  // 4th DECEMBER 2023
  // {
  //   id: 5,
  //   country: 'Tanzania',
  //   title: 'Nature and community-based solutions: how carbon revenues transformed land use and management in Tanzania',
  //   description:
  //     'Indigenous communities in Tanzania are making history by selling high-integrity carbon credits, recognizing their millennia-long dedication to preserving East Africa's forests. With 60% of the revenue managed by these communities, funds are reinvested in health, education, and local business development, showcasing the transformative impact of nature-positive initiatives.',
  //   image: 'test-1.jpg',
  //   pathway: 'croplands',
  //   article: 'https://nature4climate.org/naturebase-tanzania',
  //   clip: null,
  //   category: 'News',
  //   media: ['Article'],
  // },
  // {
  //   id: 6,
  //   country: 'Indonesia',
  //   title: 'Wetlands for livelihoods: how local communities thrive in protecting mangroves and peatlands in Borneo',
  //   description: 'Dedicated to restoring the Teluk Semanting Mangrove, the village embraces the mantra: "more mangroves, more blessings," as they plant Rhizophora seedlings. Indonesia holds the third-highest potential globally for carbon sequestration through natural climate solutions. Protecting Indonesia's remaining wetland ecosystems is crucial for meeting greenhouse gas emissions goals by the end of the decade, all while serving as a vital source of income for local communities.',
  //   image: 'test-3.jpg',
  //   pathway: 'savana',
  //   article: 'https://nature4climate.org/naturebase-indonesia,
  //   clip: null,
  //   category: 'Stories from the ground',
  //   media: ['Article'],
  // },
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
