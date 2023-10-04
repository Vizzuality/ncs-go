export type Category = 'News' | 'Factsheets' | 'Stories from the ground';

export type MediaType = 'Article' | 'Clip' | 'Video';

export interface Story {
  id: number;
  article?: string;
  clip: string;
  country: string;
  description: string;
  image: string;
  pathway: string;
  title: string;
  video?: string;
  category: Category;
  media: MediaType[];
}
