import React from 'react';

import Image from 'next/image';

import Hero from 'containers/hero';
import Pathways from 'containers/science-page/pathways';
import Wrapper from 'containers/wrapper';

const Science = () => {
  return (
    <div id="naturbase" className="bg-white w-full pt-44">
      <Wrapper className="pb-20">
        <Hero title="Nature climate solutions" subtitle="What nature can do for the climate?" />

        <div className="font-sans text-base text-gray-800 grid grid-cols-3 gap-10">
          <div className="col-start-1">
            <p>
              Natural climate solution pathways protect, manage, and restore nature in forests,
              croplands, wetlands, and grasslands.
            </p>
          </div>
          <div className="col-start-2">
            <p>
              Science shows that natural climate solutions can deliver up to one-third of the
              emission reductions required to stabilise the planet and avoid the worst impacts of
              climate. This whilst also providing ecosystem and human well-being benefits such as
              improving water and air quality, public health and building communities that are
              resilient to extreme weather events such as flooding and drought.
            </p>
          </div>
        </div>
      </Wrapper>

      <Image
        src={'/images/science/01.png'}
        alt={'What nature can do for the climate?'}
        width={1120}
        height={448}
        layout="responsive"
        objectFit="contain"
      />

      <section id="pathways">
        <Wrapper className="py-20">
          <Hero title="NCS pathways" subtitle="Pathways to mitigate climate change" />

          <div className="font-sans text-base text-gray-800 grid grid-cols-3 gap-10">
            <p className="col-start-1 col-end-3">
              Learn more about the nature-based approaches to mitigate climate change (also known as
              natural climate solutions), which avoid emissions and enhance sequestration across
              forests, wetlands, grasslands and agricultural lands.{' '}
              <a href="https://www.n4c.org" className="font-semibold">
                Visit n4c.org
              </a>{' '}
              to learn more.
            </p>
          </div>
          <Pathways />
        </Wrapper>
      </section>
    </div>
  );
};

export default Science;
