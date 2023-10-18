import React from 'react';

import Image from 'next/image';

import LinkArrow from 'containers/home_old/common/link-arrow';

import Icon from 'components/icon';

import MINUS_SVG from 'svgs/ui/minus.svg?sprite';
import PLUS_SVG from 'svgs/ui/plus.svg?sprite';

import Subpath from './subpath';

const Path = ({ id, title, description, link, color, selected, subpaths, onClick }) => {
  const SELECTED = selected === id;

  return (
    <>
      <div
        className="flex items-center justify-between p-4 space-x-6 cursor-pointer"
        style={{
          backgroundColor: color,
        }}
        onClick={onClick}
      >
        <div className="relative w-16 h-16 mx-auto shrink-0">
          <Image src={`/images/home/pathways/${id}.svg`} layout="fill" alt={title} />
        </div>

        <h3 className="w-full">
          {title} {subpaths.length && <span>({subpaths.length})</span>}
        </h3>

        <Icon icon={SELECTED ? MINUS_SVG : PLUS_SVG} className="w-10 h-10 text-gray-900 shrink-0" />
      </div>

      {SELECTED && (
        <>
          <div className="p-4 space-y-5 border border-gray-800">
            <p>{description}</p>

            {link && (
              <div className="w-full flex justify-end">
                <LinkArrow
                  className={{ arrow: 'stroke-brand-700', label: 'text-brand-700' }}
                  label="Learn more"
                  url={link}
                />
              </div>
            )}
          </div>
          <div className="-mt-2 space-y-2">
            {subpaths.map((subpath) => (
              <Subpath key={subpath.id} {...subpath} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Path;
