import React from 'react';

import { PLACEMENTS } from 'hooks/toast/constants';
import { ToastContainerProps } from 'hooks/toast/types';

export const ToastContainer = ({ placement, ...props }: ToastContainerProps) => (
  <div
    className="fixed z-[60] w-full max-w-full max-h-full"
    style={{
      ...PLACEMENTS[placement],
      maxWidth: 420,
    }}
    {...props}
  />
);

export default ToastContainer;
