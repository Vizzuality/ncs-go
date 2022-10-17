import React, { useState } from 'react';

import { useElementSize } from 'usehooks-ts';

import { PATHWAYS } from 'containers/home/featured-science/pathways/constants';

import Pathway from './path';

const Pathways = () => {
  const [selected, setSelected] = useState<string>();
  const [ref, { width, height }] = useElementSize();

  return (
    <div
      ref={ref}
      className="relative w-full h-screen bg-bottom bg-no-repeat"
      style={{
        backgroundImage: `url(/images/home/pathways/bg.svg)`,
      }}
    >
      {PATHWAYS.map((pathway, index) => (
        <Pathway
          {...pathway}
          key={pathway.id}
          index={index}
          canvas={{ width, height }}
          selected={selected}
          selectedIndex={PATHWAYS.findIndex((p) => p.id === selected)}
          onClick={() => {
            setSelected(selected === pathway.id ? null : pathway.id);
          }}
        />
      ))}
    </div>
  );
};

export default Pathways;
