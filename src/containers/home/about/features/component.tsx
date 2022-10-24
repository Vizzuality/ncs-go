import React, { useState } from 'react';

import FeatureCard from 'containers/home/about/features/card';
import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

import Modal from 'components/modal';

import { FEATURES } from './constants';

const Features = () => {
  const [modalOpen, setModalOpen] = useState(null);

  return (
    <>
      <Wrapper>
        <div className="py-10 md:py-32 lg:grid lg:grid-cols-3">
          <Hero
            className="col-span-2 col-start-1 text-beige"
            title="Features"
            subtitle="A home base for all decision-makers interested in unlocking the power of nature to preserve our living planet."
          />
        </div>

        <div className="grid -mx-4 md:grid-cols-2 xl:grid-cols-4 md:mx-0">
          {FEATURES.map((f, i) => (
            <>
              <div key={f.key} className={`order-${f.key}`} onClick={() => setModalOpen(f.key)}>
                <FeatureCard title={f.title} icon={f.icon} index={i} />
              </div>
              <Modal
                title={f.title}
                size="s"
                open={modalOpen === f.key}
                onOpenChange={() => setModalOpen(null)}
              >
                <div className="p-20">
                  <h2>{f.title}</h2>
                  <p>{f.info}</p>
                </div>
              </Modal>
            </>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Features;
