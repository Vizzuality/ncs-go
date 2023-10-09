import { ModalProps } from '../types';

export type FullScreenModalProps = ModalProps & {
  /** Size of the viewport in which the modal is rendered */
  viewport?: 'sm' | undefined;
  theme?: 'light' | 'dark';
  closeBtn?: boolean;
  floating: any;
  getFloatingProps: any;
};
