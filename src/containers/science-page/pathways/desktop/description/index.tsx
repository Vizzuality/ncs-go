import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { PATHWAYS } from 'containers/science-page/pathways/constants';

import LinkArrow from 'components/link-arrow';

const Description = ({ selected }) => {
  const { description, link } = PATHWAYS.find((pathway) => pathway.id === selected) || {};

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              ease: 'linear',
              delay: 0.25,
            },
          }}
          exit={{
            opacity: 0,
            y: -20,
            transition: {
              ease: 'linear',
              delay: 0,
            },
          }}
          className="absolute right-0 z-0 max-w-xs bottom-5 2xl:bottom-10"
        >
          <div className="space-y-3">
            <div className="text-gray-900">{description}</div>

            {link && (
              <LinkArrow
                className={{ arrow: 'stroke-brand-700', label: 'text-brand-700' }}
                label="Learn more"
                url={link}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Description;
