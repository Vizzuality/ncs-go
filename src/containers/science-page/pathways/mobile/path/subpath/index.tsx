import React, { useCallback, useState } from 'react';

import cx from 'classnames';

import Icon from 'components/icon';

import MINUS_SVG from 'svgs/ui/minus.svg?sprite';
import PLUS_SVG from 'svgs/ui/plus.svg?sprite';

const SubPath = ({ id, title, description, color }) => {
  const [more, setMore] = useState(false);

  const handleClick = useCallback(() => {
    setMore(!more);
  }, [more]);

  return (
    <>
      <div
        key={id}
        className={cx({
          'flex items-center justify-between cursor-pointer p-4': true,
        })}
        style={{
          backgroundColor: color,
        }}
        onClick={handleClick}
      >
        <p>{title}</p>
        <Icon icon={more ? MINUS_SVG : PLUS_SVG} className="w-10 h-10 text-gray-900 shrink-0" />
      </div>

      {more && (
        <div className="p-4 border border-gray-800">
          <p>{description}</p>
        </div>
      )}
    </>
  );
};

export default SubPath;
