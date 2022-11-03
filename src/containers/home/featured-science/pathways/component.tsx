import React, { useState } from 'react';

import { usePlausible } from 'next-plausible';
import { useElementSize } from 'usehooks-ts';

import { PATHWAYS } from 'containers/home/featured-science/pathways/constants';
import Media from 'containers/media';

import DesktopDescription from './desktop/description';
import DesktopPathway from './desktop/path';
import MobilePathway from './mobile/path';

const Pathways = () => {
  const plausible = usePlausible();

  const [selected, setSelected] = useState<string>();
  const [ref, { width, height }] = useElementSize();

  return (
    <div>
      <Media greaterThanOrEqual="xl">
        <div ref={ref} className="relative z-0 w-full h-screen xl:h-[95vh] bg-bottom bg-no-repeat">
          {PATHWAYS.map((pathway, index) => (
            <DesktopPathway
              {...pathway}
              key={pathway.id}
              index={index}
              canvas={{ width, height }}
              selected={selected}
              selectedIndex={PATHWAYS.findIndex((p) => p.id === selected)}
              length={PATHWAYS.length}
              onClick={() => {
                if (selected !== pathway.id) {
                  plausible('pathways', { props: { pathway: pathway.id } });
                }
                setSelected(selected === pathway.id ? null : pathway.id);
              }}
            />
          ))}

          <DesktopDescription selected={selected} />
        </div>
      </Media>

      <Media lessThan="xl">
        <div className="relative py-10 space-y-4">
          {PATHWAYS.map((pathway) => (
            <MobilePathway
              {...pathway}
              key={pathway.id}
              // index={index}
              selected={selected}
              // length={PATHWAYS.length}
              onClick={() => {
                if (selected !== pathway.id) {
                  plausible('pathways', { props: { pathway: pathway.id } });
                }

                plausible('pathways', { props: { pathway: pathway.id } });
              }}
            />
          ))}
        </div>
      </Media>
    </div>
  );
};

export default Pathways;
