export type Category = 'News' | 'Factsheets' | 'Stories from the ground';

export interface Story {
  id: number;
  articleUrl?: string;
  clipUrl: string;
  country: string;
  description: string;
  image: string;
  pathway: string;
  title: string;
  videoUrl?: string;
  category: Category;
}
