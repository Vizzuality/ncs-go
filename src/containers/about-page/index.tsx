import React from 'react';

import Image from 'next/image';

import Wrapper from 'containers/wrapper';

const About = () => {
  return (
    <div id="about" className="bg-white pt-44 w-full">
      <Wrapper>
        <h2 className="text-gray-800 pb-6 font-sans text-xl">What is naturebase?</h2>

        <div className="pb-10 font-sans text-base text-gray-800 lg:pb-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="col-start-1 pb-4 lg:pb-0">
            <p>
              An open data platform designed to identify where, why and how to implement
              high-integrity nature-based projects with the highest carbon mitigation impact whilst
              protecting livelihoods and biodiversity.
            </p>
          </div>
          <div className="col-start-2 space-y-4 md:space-y-6">
            <p>
              Backed by peer-reviewed scientific data, the application shows users the emissions
              reduction potential for each pathway everywhere on the planet, complemented with
              information on ecosystem and human benefits, enabling policies and case studies.
            </p>
          </div>
        </div>
      </Wrapper>

      <Image
        src={'/images/about/01.png'}
        alt={'What is naturebase?'}
        width={1280}
        height={448}
        layout="responsive"
        objectFit="contain"
      />

      <section>
        <Wrapper>
          <div className="pt-32 lg:grid lg:grid-cols-3">
            <h2 className="text-gray-800 pb-6 font-sans text-xl">Who&apos;s with us?</h2>
          </div>

          <div className="pb-10 font-sans text-base text-gray-800 lg:pb-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10">
            <div className="col-start-1 col-end-3 pb-4 lg:pb-0">
              <p>
                Naturebase is a product of a collaborative effort between scientists and developers
                at The Nature Conservancy, with contributions by numerous organisations across the
                environmental sector and academia.{' '}
                <span className="font-semibold">These include:</span>
              </p>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="bg-beige">
        <Wrapper>
          <div className="pt-32 pb-0 lg:grid lg:grid-cols-3">
            <h2 className="text-gray-800 pb-6 font-sans text-xl">What we want?</h2>
          </div>

          <div className="pb-10 font-sans text-base text-gray-800 lg:pb-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10">
            <div className="col-start-1 pb-4 lg:pb-0">
              <p>
                Nature can deliver up to one-third of the mitigation solutions that are required to
                stabilize the planet whilst also providing ecosystem and human well-being benefits
                such as improving water and air quality, public health and building communities that
                are resilient to extreme weather events such as flooding and drought.
              </p>
            </div>
            <div className="col-start-2 space-y-4 md:space-y-6">
              <p>
                Knowing where, why and how to deploy these interventions is critical to unlocking
                nature’s potential towards achieving these goals. Naturebase is designed to fill
                data accessibility gaps that often stifle action.
              </p>
            </div>
          </div>
        </Wrapper>
      </section>

      <Image
        src={'/images/about/02.png'}
        alt={'What we want'}
        width={1074}
        height={410}
        layout="responsive"
        objectFit="contain"
      />
    </div>
  );
};

export default About;
