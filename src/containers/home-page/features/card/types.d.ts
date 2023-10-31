import { ReactNode } from 'react';

export interface FeatureCardProps {
  index: number;
  icon: any;
  title: string;
  description: ReactNode;
  tag?: string;
}
