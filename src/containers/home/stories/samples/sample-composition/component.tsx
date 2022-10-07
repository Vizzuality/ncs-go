import React from 'react';

import cx from 'classnames';

const SampleComposition = ({ media, card, align = 'right' }) => (
  <div className="pt-4 lg:pt-0 lg:grid lg:grid-cols-12">
    <div
      className={cx({
        'relative lg:col-span-7': true,
        'lg:col-start-2': align === 'left',
        'lg:col-start-5': align === 'right',
      })}
    >
      <div className="aspect-video">{media}</div>

      <div
        className={cx({
          ' w-full lg:absolute top-1/3': true,
          'left-full': align === 'left',
          'left-0': align === 'right',
        })}
      >
        <div className="w-full lg:max-w-[400px] lg:-translate-x-1/2">{card}</div>
      </div>
    </div>
  </div>
);

export default SampleComposition;
