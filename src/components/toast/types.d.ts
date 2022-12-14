import { ReactNode } from 'react';

export type Level = 'info' | 'success' | 'warning' | 'error';

export interface ToastThemeOption {
  icon: {
    id: string;
    viewBox: string;
  };
  bg: string;
}

export type ToastContent = ReactNode | string;
export interface ToastProps {
  id: string;
  content: ToastContent;
  level: Level;
  onDismiss?: (id: string) => void;
}

export interface ToastTheme {
  info: ToastThemeOption;
  success: ToastThemeOption;
  warning: ToastThemeOption;
  error: ToastThemeOption;
}
